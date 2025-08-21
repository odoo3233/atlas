@echo off
echo ========================================
echo    إصلاح مشاكل Hydration في Next.js
echo ========================================
echo.

echo تنظيف الكاش...
call npm run build -- --no-cache
if errorlevel 1 (
    echo فشل في بناء المشروع
    pause
    exit /b 1
)

echo.
echo حذف مجلد .next...
if exist .next rmdir /s /q .next

echo.
echo حذف مجلد node_modules...
if exist node_modules rmdir /s /q node_modules

echo.
echo إعادة تثبيت الحزم...
call npm install

echo.
echo بناء المشروع...
call npm run build

echo.
echo تشغيل المشروع...
call npm run dev

echo.
echo تم تشغيل المشروع بنجاح!
echo افتح المتصفح على: http://localhost:3000
echo.
pause
