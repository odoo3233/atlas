@echo off
chcp 65001 >nul
echo ========================================
echo    Atlas Al-Sharq - تشغيل سريع
echo ========================================
echo.

echo الخطوة 1: تشغيل قاعدة البيانات...
echo تأكد من تشغيل PostgreSQL...
echo.

echo الخطوة 2: تشغيل الخادم الخلفي...
cd backend
start "Backend Server" cmd /k "npm start"
cd ..

echo.
echo الخطوة 3: تشغيل الواجهة الأمامية...
start "Frontend Server" cmd /k "npm run dev"

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

timeout /t 5 /nobreak >nul
start http://localhost:3000

echo تم فتح المتصفح!
echo.
pause
