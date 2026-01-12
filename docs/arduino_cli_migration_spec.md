# Arduino CLI 遷移技術規格書 (Technical Spec)

## 1. 目標
將後端編譯器從舊版 `arduino_debug.exe` (Java) 遷移至現代化 `arduino-cli` (Go)，以達成：
*   **輕量化**: 移除 JRE，減少安裝包約 150MB。
*   **高效能**: 毫秒級啟動。
*   **Headless**: 原生支援無介面操作，更適合伺服器/背景執行。

## 2. 核心指令對照 (Command Mapping)

### 舊版 (Arduino 1.8)
```bash
# 編譯並上傳
arduino_debug.exe --upload --port COM3 --board arduino:avr:uno "C:\Temp\sketch\sketch.ino"
```

### 新版 (Arduino CLI)
```bash
# 1. (一次性) 初始化 Core
arduino-cli core update-index
arduino-cli core install arduino:avr

# 2. 編譯 (Compile)
arduino-cli compile --fqbn arduino:avr:uno "C:\Temp\sketch"

# 3. 上傳 (Upload)
arduino-cli upload -p COM3 --fqbn arduino:avr:uno "C:\Temp\sketch"

# 或者 (編譯並上傳 Combined)
arduino-cli compile --upload -p COM3 --fqbn arduino:avr:uno "C:\Temp\sketch"
```

## 3. Python 後端修改邏輯

您需要修改 Ardublockly Server 的 Python 原始碼 (通常在 `ardublocklyserver/compilers/arduino.py` 類的位置)。

### 邏輯變更點：

1.  **執行檔路徑 (Executable Path)**:
    *   舊：指向 `arduino_debug.exe`。
    *   新：指向 `arduino-cli.exe` (需打包進 `arduexec` 資料夾)。

2.  **參數組裝 (Argument Builder)**:
    *   舊代碼可能長這樣：
        ```python
        cmd = [arduino_exec, '--upload', '--port', port, '--board', board_id, sketch_path]
        ```
    *   新代碼需改為：
        ```python
        # FQBN (Fully Qualified Board Name) 是關鍵，例如 "arduino:avr:uno"
        cmd = [cli_exec, 'compile', '--upload', '-p', port, '--fqbn', fqbn, sketch_path]
        ```

3.  **輸出解析 (Output Parsing)**:
    *   `arduino-cli` 預設支援 JSON 輸出 (`--format json`)。
    *   **建議**: 改用 JSON 模式來解析編譯結果與錯誤訊息，比舊版去字串分析 (Regex) 穩定非常多。
    *   指令範例：`arduino-cli compile ... --format json`

## 4. 依賴管理策略
遷移後，`arduino/` 資料夾結構將變更：
*   **移除**: `java/`, `lib/` (舊 IDE 的 UI 庫), `arduino_debug.exe`.
*   **新增**: `arduino-cli.exe`, `arduino-cli.yaml` (設定檔).
*   **保留**: `hardware/`, `tools/` (編譯器與核心庫可能仍需保留，或改由 CLI 自動下載管理)。

## 5. 建議實作步驟
1.  **環境準備**: 在開發機下載 `arduino-cli`。
2.  **原型測試**: 寫一個簡單的 Python Script 測試呼叫 CLI 編譯您的 `.ino` 檔。
3.  **整合**: 將邏輯寫回 Ardublockly Python Server。
4.  **打包**: 使用 PyInstaller 重新打包 `start.exe`。
