Write-Host "========================================" -ForegroundColor Green
Write-Host "   Atlas Al-Sharq - PowerShell Start" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

Write-Host "الخطوة 1: تشغيل قاعدة البيانات..." -ForegroundColor Yellow
# تشغيل PostgreSQL
Write-Host "تأكد من تشغيل PostgreSQL..." -ForegroundColor Cyan

Write-Host ""
Write-Host "الخطوة 2: تشغيل الخادم الخلفي..." -ForegroundColor Yellow
Set-Location backend
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm start" -WindowStyle Normal
Set-Location ..

Write-Host ""
Write-Host "الخطوة 3: تشغيل الواجهة الأمامية..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev" -WindowStyle Normal

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "    تم تشغيل المشروع!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "المشروع يعمل الآن على:" -ForegroundColor Cyan
Write-Host "- الواجهة الأمامية: http://localhost:3000" -ForegroundColor White
Write-Host "- الواجهة الخلفية: http://localhost:5001" -ForegroundColor White
Write-Host ""
Write-Host "انتظر قليلاً حتى تفتح النوافذ..." -ForegroundColor Yellow
Write-Host ""

# فتح المتصفح بعد 5 ثوان
Start-Sleep -Seconds 5
Start-Process "http://localhost:3000"

Write-Host "تم فتح المتصفح!" -ForegroundColor Green
