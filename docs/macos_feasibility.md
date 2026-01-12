# 跨平台 (macOS/Linux) 架構重構計畫

## 核心結論
正如您所指出的，要支援 macOS，目前的「Windows 依賴架構」必須徹底打破。我們不能只是「打包」現有的東西，而是要「重構」底層元件。

## 1. 關鍵障礙與解決方案 (Prerequisites)

### 障礙 A: Python Server (目前是 .exe)
*   **現狀**: `server/start.exe` 是 Windows PE 格式的執行檔，macOS 無法執行。
*   **跨平台需求**:
    1.  **必須擁有 Python 原始碼**: 我們需要 `ardublocklyserver` 的 source code。
    2.  **針對平台編譯 (Native Build)**:
        *   **Windows**: 使用 PyInstaller 產出 `.exe`。
        *   **macOS**: 必須在 Mac 電腦上使用 PyInstaller 產出 Unix Executable (或 `.app`)。
    *   **或者 (替代方案)**: 使用者電腦需安裝 Python 環境，直接執行 `python start.py` (但這會增加安裝門檻)。

### 障礙 B: Arduino Toolchain (目前是 1.8.18 Portable)
*   **現狀**: `arduino/` 資料夾內包含 Windows 專用的 `java.exe`, `arduino_debug.exe` 和 `avr-gcc.exe`。
*   **跨平台需求**: **必須遷移至 `arduino-cli`**。
    *   `arduino-cli` 是 Go 語言編寫，官方提供 Windows/macOS/Linux 的原生執行檔。
    *   **運作邏輯**:
        *   Windows 版安裝包放入 `arduino-cli.exe`。
        *   macOS 版安裝包放入 `arduino-cli` (Darwin binary)。
    *   **優勢**: 後端 Python 程式碼只需要呼叫 `arduino-cli compile`，這個指令在所有作業系統上都是一模一樣的，不需要為不同 OS 寫不同的 Java 呼叫邏輯。

## 2. 理想的跨平台架構 (The Target Architecture)

```mermaid
graph TD
    subgraph "Python Server (Source Code)"
        Logic[Ardublockly Logic]
    end
    
    subgraph "External Tools (OS Dependent)"
        CLI[Arduino CLI]
    end

    OS[Operating System] -->|Windows| WinPkg[Build .exe]
    OS -->|macOS| MacPkg[Build .app]
    
    Logic -->|Calls| CLI
    WinPkg -->|Bundles| CLI_Win[arduino-cli.exe]
    MacPkg -->|Bundles| CLI_Mac[arduino-cli (Darwin)]
```

## 3. 執行策略
若要開發 macOS 版本，您的 Roadmap 順序**必須**是：
1.  **取得 Source**: 找到 Python Server 的原始碼。
2.  **CLI 遷移**: 修改 Python Code，將所有編譯呼叫改為 `arduino-cli`。
3.  **雙平台建置 (CI/CD)**: 建立 GitHub Actions，分別在 Windows Runner 和 macOS Runner 上執行 PyInstaller 打包。
