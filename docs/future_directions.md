# Ardublockly 未來發展藍圖 (Roadmap)

基於對目前專案架構的分析與現代開發趨勢，以下提供四個主要的發展方向供您參考。

## 方向一：架構現代化 (Architecture Modernization)
目標：擺脫 Electron 與舊版 Python 的依賴，轉向更輕量、跨平台的 Web 技術。

*   **PWA (Progressive Web App)**: 
    *   將前端完全靜態化，支援離線快取。
    *   讓使用者可以直接「安裝」網頁到桌面或平板，無需經過 App Store 或下載 exe。
*   **Web Serial API**:
    *   實現「無驅動燒錄」。只要是 Chrome/Edge 瀏覽器，插入 USB 線即可直接從網頁燒錄 (需配合雲端編譯或 WebAssembly)。
*   **WebAssembly (WASM) 編譯器**:
    *   **終極目標**。將 GCC 編譯器編譯成 WASM，讓瀏覽器變成編譯器。這樣就能達成真正的「零後端」、「零安裝」、「純離線」開發體驗。

## 方向二：教育生態系深度整合 (EdTech Integration)
目標：不只是寫程式的工具，而是教學管理的平台。

*   **Google Classroom /LMS 整合**:
    *   允許老師「派發作業」 (例如：請完成一個讓 LED 閃爍的專案)。
    *   學生直接在網頁完成後由系統自動評分 (例如：檢查積木邏輯是否正確)。
*   **即時協作 (Real-time Collaboration)**:
    *   像 Google Docs 一樣，允許兩個學生在不同電腦上編輯同一個積木畫布 (基於 WebSocket)。
*   **互動式教學 (Gamification)**:
    *   在左側積木區與右側程式碼區中間，加入「虛擬模擬器 (Simulator)」。
    *   學生沒有硬體也能先在網頁上看到 LED 亮起或馬達轉動 (類似 Wokwi 或 Tinkercad)。

## 方向三：硬體支援擴展 (IoT & AI)
目標：跳脫傳統 Arduino Uno，擁抱現代物聯網晶片。

*   **ESP32 / ESP8266 完整支援**:
    *   這兩款晶片內建 WiFi/藍牙，是目前 IoT 主流。Ardublockly 目前支援度可能有限，加強這部分能讓專案價值翻倍。
*   **MicroPython / CircuitPython 模式**:
    *   積木不一定要轉成 C++。可以新增模式讓積木轉成 Python 程式碼，直接燒錄到支援 MicroPython 的板子上 (開發體驗通常比 C++ 更快更順)。
*   **TinyML (微型機器人學習)**:
    *   新增「AI 積木」，例如「當語音辨識到 '開啟'」、「當影像辨識到 '人臉'」。這符合目前 AI 教育的熱潮。

## 方向四：Local Broker 增強版 (The "Bridge" Strategy)
目標：保留桌面版的強大功能，但擁有網頁版的靈活性 (即您剛才提到的方案)。

*   **通用硬體橋接器**:
    *   開發一個標準化的 `HardwareAgent`。不只服務 Ardublockly，還可以開放 API 給其他網頁應用使用。
    *   例如：您的網頁可以控制 Arduino，別人的網頁也可以透過您的 Agent 控制機械手臂。
