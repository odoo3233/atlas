@echo off
echo ========================================
echo    Atlas Al-Sharq Project Starter
echo ========================================

echo.
echo Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js found: 
node --version

echo.
echo Starting Backend Server...
cd backend
start "Backend Server" cmd /k "echo Starting Backend... && npm run dev"

echo.
echo Starting Frontend Server...
cd ..
start "Frontend Server" cmd /k "echo Starting Frontend... && npm run dev"

echo.
echo ========================================
echo    Servers are starting...
echo ========================================
echo Backend:  http://localhost:3001
echo Frontend: http://localhost:3000
echo.
echo Please wait a few moments for servers to start...
echo.
pause

