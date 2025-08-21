@echo off
echo ========================================
echo    Atlas Al-Sharq Project Starter
echo ========================================
echo.

echo Step 1: Starting PostgreSQL Database...
call start-database.bat
if %errorlevel% neq 0 (
    echo Failed to start database. Please check DATABASE_SETUP.md
    pause
    exit /b 1
)

echo.
echo Step 2: Starting Backend Server...
cd backend
start "Backend Server" cmd /k "npm start"
cd ..

echo.
echo Step 3: Starting Frontend Server...
start "Frontend Server" cmd /k "npm run dev"

echo.
echo ========================================
echo    Project is starting...
echo ========================================
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:3000 (or 3001, 3002, etc.)
echo.
echo Press any key to close this window...
pause >nul
