@echo off
echo ========================================
echo    فتح المتصفح - Atlas Al-Sharq
echo ========================================
echo.

echo فتح المتصفح على المنافذ المختلفة...
echo.

echo فتح http://localhost:3000
start http://localhost:3000

echo انتظار 2 ثانية...
timeout /t 2 /nobreak >nul

echo فتح http://localhost:3001
start http://localhost:3001

echo انتظار 2 ثانية...
timeout /t 2 /nobreak >nul

echo فتح http://localhost:3002
start http://localhost:3002

echo انتظار 2 ثانية...
timeout /t 2 /nobreak >nul

echo فتح http://localhost:3003
start http://localhost:3003

echo.
echo ========================================
echo    تم فتح المتصفح!
echo ========================================
echo.
echo تم فتح 4 تبويبات في المتصفح.
echo أحدها سيعمل مع المشروع.
echo.
pause

