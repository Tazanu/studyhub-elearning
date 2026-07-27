@echo off
echo ========================================
echo Starting StudyHub Backend Server
echo ========================================
echo.

REM Kill any existing Node processes on port 5000
echo [1/3] Cleaning up old processes...
taskkill /F /IM node.exe >nul 2>&1
if %errorlevel% equ 0 (
    echo    ✓ Killed existing Node processes
) else (
    echo    → No existing processes found
)
echo.

REM Wait a moment for ports to free up
timeout /t 2 /nobreak >nul

REM Start the server
echo [2/3] Starting backend server...
echo.
npm run dev
