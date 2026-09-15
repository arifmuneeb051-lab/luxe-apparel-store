@echo off
title LUXE APPAREL - Production Compiler
color 0E
echo ======================================================
echo       LUXE APPAREL - PRODUCTION BUILD COMPILER
echo ======================================================
echo.
echo Compiling optimized production bundle into dist/ ...
call npm run build

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ======================================================
    echo  SUCCESS! Production build is ready inside 'dist/'
    echo  You can now deploy the 'dist' folder to Vercel/Netlify!
    echo ======================================================
) else (
    echo.
    echo Build failed with error code %ERRORLEVEL%
)

echo.
pause
