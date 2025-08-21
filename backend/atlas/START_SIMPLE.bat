@echo off
echo ========================================
echo    Atlas Al-Sharq - Simple Start
echo ========================================
echo.

echo مرحباً! سأساعدك في تشغيل المشروع بسهولة.
echo.

echo الخطوة 1: تشغيل قاعدة البيانات...
call start-database.bat

echo.
echo الخطوة 2: تشغيل الخادم الخلفي...
cd backend
start "Backend" cmd /k "npm start"
cd ..

echo.
echo الخطوة 3: تشغيل الواجهة الأمامية...
start "Frontend" cmd /k "npm run dev"

echo.
echo ========================================
echo    تم تشغيل المشروع!
echo ========================================
echo.
echo المشروع يعمل الآن على:
echo - الواجهة الأمامية: http://localhost:3000
echo - الواجهة الخلفية: http://localhost:5000
echo.
echo انتظر قليلاً حتى تفتح النوافذ...
echo.
pause

