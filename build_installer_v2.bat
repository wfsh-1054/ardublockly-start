@echo off
setlocal EnableDelayedExpansion

REM ----------------------------------------------------
REM Ardublockly Build Script with Versioning
REM ----------------------------------------------------

REM 1. 設定版本號來源
REM 優先讀取 VERSION 檔案，若無則設為預設值
if exist "VERSION" (
    set /p APP_VERSION=<VERSION
) else (
    set "APP_VERSION=1.0"
    echo [警告] 找不到 VERSION 檔案，使用預設版本: !APP_VERSION!
)
echo [建置版本] !APP_VERSION!

REM 2. 尋找 ISCC 編譯器
set "ISCC_PATH_1=C:\Program Files (x86)\Inno Setup 6\ISCC.exe"
set "ISCC_PATH_2=C:\Program Files\Inno Setup 6\ISCC.exe"

if exist "%ISCC_PATH_1%" (
    set "ISCC=%ISCC_PATH_1%"
    goto :FOUND
)
if exist "%ISCC_PATH_2%" (
    set "ISCC=%ISCC_PATH_2%"
    goto :FOUND
)
where ISCC >nul 2>nul
if %ERRORLEVEL% equ 0 (
    set "ISCC=ISCC"
    goto :FOUND
)

echo.
echo [錯誤] 找不到 Inno Setup 編譯器 (ISCC.exe)。
exit /b 1

:FOUND
echo [編譯器] "%ISCC%"

REM 3. 執行編譯 (注入版本號)
REM /DMyAppVersion="..." 會覆蓋 .iss 中的定義
REM /F"..." 設定輸出的檔名包含版本號 (例如 Ardublockly_Setup_v1.0)
"%ISCC%" "/DMyAppVersion=!APP_VERSION!" "/FArdublockly_Setup_v!APP_VERSION!" "Ardublockly_Setup.iss"

if %ERRORLEVEL% equ 0 (
    echo.
    echo [成功] 安裝檔已建立: Output\Ardublockly_Setup_v!APP_VERSION!.exe
    echo.
) else (
    echo.
    echo [失敗] 編譯過程中發生錯誤。
    echo.
)
pause
