@echo off
echo ========================================
echo    إصلاح جميع المشاكل - Atlas Al-Sharq
echo ========================================
echo.

echo إيقاف جميع العمليات...
taskkill /f /im node.exe 2>nul
taskkill /f /im npm.exe 2>nul
echo تم إيقاف العمليات السابقة.

echo.
echo إصلاح المشاكل...
echo.

echo الخطوة 1: تشغيل قاعدة البيانات...
call start-database.bat

echo.
echo الخطوة 2: انتظار 5 ثوانٍ...
timeout /t 5 /nobreak >nul

echo.
echo الخطوة 3: تشغيل الخادم الخلفي...
cd backend
start "Backend Server" cmd /k "npm start"
cd ..

echo.
echo الخطوة 4: انتظار 10 ثوانٍ...
timeout /t 10 /nobreak >nul

echo.
echo الخطوة 5: تشغيل الواجهة الأمامية...
start "Frontend Server" cmd /k "npm run dev"

echo.
echo ========================================
echo    تم تشغيل المشروع!
echo ========================================
echo.
echo المشروع يعمل الآن على:
echo - الواجهة الأمامية: http://localhost:3000
echo - أو http://localhost:3001
echo - أو http://localhost:3002
echo - أو http://localhost:3003
echo - الواجهة الخلفية: http://localhost:5000
echo.
echo انتظر قليلاً حتى تفتح النوافذ...
echo ثم افتح المتصفح على أحد المنافذ المذكورة أعلاه
echo.
pause

