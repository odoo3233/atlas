@echo off
echo Starting Atlas Al-Sharq Project...
echo.
cd /d "C:\Users\majed\Desktop\atlas"
echo Starting Frontend...
start cmd /k "npm run dev"
echo.
echo Frontend is starting on http://localhost:3000
echo Press any key to exit...
pause >nul
