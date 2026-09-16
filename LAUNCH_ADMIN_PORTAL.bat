@echo off
title LUXE APPAREL - SECRET EXECUTIVE ADMIN CONSOLE
color 06
cls
echo =======================================================================
echo          LUXE APPAREL COUTURE - CONFIDENTIAL OWNER SYSTEM
echo          Authorized Store Owner: arifmuneeb81@gmail.com
echo =======================================================================
echo.
echo  [1/2] Initializing Secure Atelier Admin Environment
echo  [2/2] Detecting Web Browser: Google Chrome or Microsoft Edge
echo.

set "TARGET_FILE=%~dp0ADMIN_PORTAL.html"

if exist "C:\Program Files\Google\Chrome\Application\chrome.exe" (
    echo Launching with Google Chrome...
    start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" "%TARGET_FILE%"
    goto :success
)

if exist "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" (
    echo Launching with Microsoft Edge...
    start "" "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" "%TARGET_FILE%"
    goto :success
)

if exist "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" (
    echo Launching with Google Chrome...
    start "" "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" "%TARGET_FILE%"
    goto :success
)

if exist "%LocalAppData%\Google\Chrome\Application\chrome.exe" (
    echo Launching with Google Chrome...
    start "" "%LocalAppData%\Google\Chrome\Application\chrome.exe" "%TARGET_FILE%"
    goto :success
)

if exist "C:\Program Files\Microsoft\Edge\Application\msedge.exe" (
    echo Launching with Microsoft Edge...
    start "" "C:\Program Files\Microsoft\Edge\Application\msedge.exe" "%TARGET_FILE%"
    goto :success
)

echo Launching with System Browser via PowerShell...
powershell -NoProfile -ExecutionPolicy Bypass -Command "Start-Process 'chrome.exe' -ArgumentList '\"%TARGET_FILE%\"' -ErrorAction SilentlyContinue; if (!$?) { Start-Process 'msedge.exe' -ArgumentList '\"%TARGET_FILE%\"' -ErrorAction SilentlyContinue }"

:success
echo.
echo  ---------------------------------------------------------------------
echo  SUCCESS: Private Admin Portal is now active and running.
echo  - View and verify customer orders
echo  - Track Cash on Delivery (COD) and Stripe payments in PKR
echo  - Manage registered VIP client accounts
echo  - Adjust inventory and sync cloud records
echo  ---------------------------------------------------------------------
echo.
echo  You may close this terminal window at any time.
pause
