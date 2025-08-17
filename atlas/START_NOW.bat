@echo off
echo Starting Atlas Project...

echo Step 1: Kill existing processes...
taskkill /f /im node.exe 2>nul
taskkill /f /im npm.exe 2>nul

echo Step 2: Start database...
net start postgresql-x64-15 2>nul

echo Step 3: Start backend server...
cd backend
start "Backend" cmd /k "npm start"
cd ..

echo Step 4: Wait 3 seconds...
timeout /t 3 /nobreak >nul

echo Step 5: Start frontend server...
start "Frontend" cmd /k "npm run dev"

echo.
echo Project is starting!
echo Frontend: http://localhost:3000
echo Backend: http://localhost:5000
echo.
pause
