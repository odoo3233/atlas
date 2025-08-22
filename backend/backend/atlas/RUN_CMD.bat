@echo off
echo ========================================
echo    تشغيل مشروع Atlas Al-Sharq
echo ========================================
echo.

echo الخطوة 1: إيقاف العمليات السابقة...
taskkill /f /im node.exe 2>nul
taskkill /f /im npm.exe 2>nul
echo تم إيقاف العمليات السابقة.

echo.
echo الخطوة 2: تشغيل قاعدة البيانات...
net start postgresql-x64-15 2>nul
if %errorlevel% neq 0 (
    echo تحذير: لم يتم تشغيل قاعدة البيانات
    echo قد تحتاج لتشغيلها يدوياً
)

echo.
echo الخطوة 3: تشغيل الخادم الخلفي...
cd backend
start "Backend Server" cmd /k "npm start"
cd ..

echo.
echo انتظار 5 ثوانٍ...
timeout /t 5 /nobreak >nul

echo.
echo الخطوة 4: تشغيل الواجهة الأمامية...
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
