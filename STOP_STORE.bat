@echo off
title LUXE APPAREL - Unified Master Controller [OFF]
color 0C
echo ======================================================
echo       LUXE APPAREL - STOPPING ALL STORE SERVERS
echo ======================================================
echo.
echo Searching for processes running on port 5173 (Frontend)...

set FOUND=0
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5173 ^| findstr LISTENING') do (
    echo Terminating Frontend PID: %%a on port 5173...
    taskkill /F /PID %%a >nul 2>&1
    set FOUND=1
)

echo Searching for processes running on port 5000 (Backend API)...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5000 ^| findstr LISTENING') do (
    echo Terminating Backend PID: %%a on port 5000...
    taskkill /F /PID %%a >nul 2>&1
    set FOUND=1
)

if "%FOUND%"=="0" (
    echo No active store servers found. Servers are already offline.
) else (
    echo.
    echo All Luxe Apparel Store servers (5173 & 5000) have been stopped cleanly!
)

echo ======================================================
echo.
timeout /t 3 >nul
