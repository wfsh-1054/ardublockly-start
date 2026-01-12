@echo off
setlocal
echo 正在尋找 Inno Setup 編譯器...

:: 定義常見安裝路徑
set "ISCC_PATH_1=C:\Program Files (x86)\Inno Setup 6\ISCC.exe"
set "ISCC_PATH_2=C:\Program Files\Inno Setup 6\ISCC.exe"

:: 檢查路徑 1
if exist "%ISCC_PATH_1%" (
    set "ISCC=%ISCC_PATH_1%"
    goto :FOUND
)

:: 檢查路徑 2
if exist "%ISCC_PATH_2%" (
    set "ISCC=%ISCC_PATH_2%"
    goto :FOUND
)

:: 嘗試從 PATH 尋找
where ISCC >nul 2>nul
if %ERRORLEVEL% equ 0 (
    set "ISCC=ISCC"
    goto :FOUND
)

echo.
echo [錯誤] 找不到 Inno Setup 編譯器 (ISCC.exe)。
echo 請確認您已安裝 Inno Setup 6，或是手動開啟 Ardublockly_Setup.iss 進行編譯。
echo.
pause
exit /b 1

:FOUND
echo [成功] 找到編譯器: "%ISCC%"
echo 正在編譯 Ardublockly_Setup.iss ...
"%ISCC%" "Ardublockly_Setup.iss"

if %ERRORLEVEL% equ 0 (
    echo.
    echo [完成] 安裝檔已建立於 Output 資料夾！
    echo.
) else (
    echo.
    echo [失敗] 編譯過程中發生錯誤。
    echo.
)
pause
