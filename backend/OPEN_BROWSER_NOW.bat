@echo off
echo فتح المتصفح على الموقع...

echo فتح المنفذ 3000...
start http://localhost:3000

echo انتظار 2 ثانية...
timeout /t 2 /nobreak >nul

echo فتح المنفذ 3001...
start http://localhost:3001

echo انتظار 2 ثانية...
timeout /t 2 /nobreak >nul

echo فتح المنفذ 3002...
start http://localhost:3002

echo انتظار 2 ثانية...
timeout /t 2 /nobreak >nul

echo فتح المنفذ 3003...
start http://localhost:3003

echo.
echo تم فتح جميع المنافذ في المتصفح!
echo.
pause
