@echo off
echo Starting Atlas Al-Sharq Development Environment...
echo.

echo Starting Backend Server (Port 5001)...
start cmd /k "node src/index.js"

echo Starting Frontend Server (Port 3000)...
start cmd /k "npm run dev"

echo.
echo ================================
echo Development servers starting...
echo ================================
echo Frontend: http://localhost:3000
echo Backend:  http://localhost:5001
echo ================================
echo.
echo Press any key to exit...
pause > nul
