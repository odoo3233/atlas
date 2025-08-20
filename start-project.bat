@echo off
echo Starting Atlas Al-Sharq Project...
echo.

echo Step 1: Starting Database...
call start-database.bat
echo.

echo Step 2: Starting Backend Server...
cd backend
start "Backend Server" cmd /k "npm start"
cd ..
echo.

echo Step 3: Starting Frontend Server...
start "Frontend Server" cmd /k "npm run dev"
echo.

echo Both servers are starting...
echo Backend will be available at: http://localhost:5001
echo Frontend will be available at: http://localhost:3000
echo.
echo Press any key to exit this window...
pause > nul

