@echo off
title Atlas Project Starter

echo.
echo ========================================
echo    تشغيل مشروع Atlas Al-Sharq
echo ========================================
echo.

echo 1. إيقاف العمليات السابقة...
taskkill /f /im node.exe 2>nul
taskkill /f /im npm.exe 2>nul

echo 2. تشغيل قاعدة البيانات...
net start postgresql-x64-15 2>nul

echo 3. تشغيل الخادم الخلفي...
cd backend
start "Backend" cmd /k "npm start"
cd ..

echo 4. انتظار 3 ثوانٍ...
timeout /t 3 /nobreak >nul

echo 5. تشغيل الواجهة الأمامية...
start "Frontend" cmd /k "npm run dev"

echo.
echo ========================================
echo    تم تشغيل المشروع!
echo ========================================
echo.
echo افتح المتصفح على:
echo http://localhost:3000
echo.
echo إذا لم يعمل، جرب:
echo http://localhost:3001
echo http://localhost:3002
echo http://localhost:3003
echo.
pause
