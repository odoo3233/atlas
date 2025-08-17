@echo off
echo ========================================
echo    تشغيل مشروع أطلس الشرق
echo ========================================
echo.

echo [1/4] بدء تشغيل قاعدة البيانات...
start-database.bat
timeout /t 3 /nobreak >nul

echo [2/4] بدء تشغيل الخادم الخلفي...
cd backend
start "Backend Server" cmd /k "npm start"
cd ..
timeout /t 5 /nobreak >nul

echo [3/4] بدء تشغيل الواجهة الأمامية...
start "Frontend Server" cmd /k "npm run dev"
timeout /t 5 /nobreak >nul

echo [4/4] فتح المتصفح...
timeout /t 3 /nobreak >nul
start http://localhost:3000
start http://localhost:3001
start http://localhost:3002

echo.
echo ========================================
echo    تم تشغيل المشروع بنجاح!
echo ========================================
echo.
echo الواجهة الأمامية: http://localhost:3000
echo الخادم الخلفي: http://localhost:5000
echo.
echo اضغط أي مفتاح للخروج...
pause >nul
