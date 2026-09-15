@echo off
title LUXE APPAREL - Unified Master Controller [ON]
color 0A
echo ======================================================
echo       LUXE APPAREL - LUXURY CLOTHING BRAND STORE
echo ======================================================
echo.
echo [1/3] Checking Store Frontend dependencies...
if not exist "node_modules\" (
    echo Node modules not found. Installing frontend dependencies...
    call npm install
) else (
    echo Frontend dependencies are ready.
)

echo.
echo [2/3] Launching Store Dev Server & Backend API...
start "Luxe Store Frontend (5173)" cmd /c "npm run dev"

if exist "server\server.js" (
    echo Launching Luxe MongoDB API Server (Port 5000)...
    start "Luxe Backend API (5000)" cmd /c "node server\server.js"
)

echo.
echo [3/3] Opening Luxe Apparel Store in your browser...
timeout /t 3 /nobreak >nul
start http://localhost:5173

echo.
echo ======================================================
echo  Frontend Server: ONLINE at http://localhost:5173
echo  Backend API / MongoDB: ONLINE at http://localhost:5000
echo  To STOP both servers anytime, run STOP_STORE.bat
echo ======================================================
echo.
pause
