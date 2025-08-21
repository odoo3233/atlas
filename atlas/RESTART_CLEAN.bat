@echo off
echo ========================================
echo    Atlas Al-Sharq - Clean Restart
echo ========================================
echo.

echo إيقاف جميع العمليات...
taskkill /f /im node.exe 2>nul
taskkill /f /im npm.exe 2>nul
taskkill /f /im cmd.exe 2>nul
echo تم إيقاف جميع العمليات.

echo.
echo انتظار 3 ثوانٍ...
timeout /t 3 /nobreak >nul

echo.
echo تشغيل قاعدة البيانات...
call start-database.bat

echo.
echo انتظار 5 ثوانٍ...
timeout /t 5 /nobreak >nul

echo.
echo تشغيل الخادم الخلفي...
cd backend
start "Backend Server" cmd /k "npm start"
cd ..

echo.
echo انتظار 10 ثوانٍ...
timeout /t 10 /nobreak >nul

echo.
echo تشغيل الواجهة الأمامية...
start "Frontend Server" cmd /k "npm run dev"

echo.
echo ========================================
echo    تم تشغيل المشروع!
echo ========================================
echo.
echo انتظر قليلاً حتى تفتح النوافذ...
echo.
echo ثم افتح المتصفح على:
echo - http://localhost:3000
echo - أو http://localhost:3001
echo - أو http://localhost:3002
echo - أو http://localhost:3003
echo.
echo (سيظهر المنفذ الصحيح في نافذة Frontend)
echo.
pause

