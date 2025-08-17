@echo off
echo ========================================
echo    تنظيف مشروع أطلس الشرق
echo ========================================
echo.

echo [1/3] حذف الملفات غير الضرورية...

REM حذف ملفات التعليمات والوثائق المكررة
del /q "تعليمات_التطبيق_النهائية.txt" 2>nul
del /q "home-hero-enhanced.tsx" 2>nul
del /q "header-enhanced.tsx" 2>nul
del /q "تعليمات_التطبيق.txt" 2>nul
del /q "تم_إصلاح_المشاكل_الكاملة.txt" 2>nul
del /q "تم_إصلاح_المشكلة.txt" 2>nul
del /q "تم_إعادة_التصميم_الملون.txt" 2>nul
del /q "تم_إعادة_التصميم_السابق.txt" 2>nul
del /q "تم_تحسين_الهيدر.txt" 2>nul

REM حذف ملفات الباتش المكررة
del /q "OPEN_BROWSER_NOW.bat" 2>nul
del /q "EASY_START.bat" 2>nul
del /q "RUN_CMD.bat" 2>nul
del /q "RUN_PROJECT.bat" 2>nul
del /q "START_NOW.bat" 2>nul
del /q "FIX_CACHE.bat" 2>nul
del /q "FINAL_FIX.bat" 2>nul
del /q "FIX_NOW.bat" 2>nul
del /q "FIX_ALL_PROBLEMS.bat" 2>nul
del /q "OPEN_BROWSER.bat" 2>nul
del /q "RESTART_CLEAN.bat" 2>nul
del /q "FIX_AND_START.bat" 2>nul
del /q "START_SIMPLE.bat" 2>nul
del /q "QUICK_INSTALL.bat" 2>nul
del /q "setup-complete.bat" 2>nul
del /q "download-postgresql.bat" 2>nul
del /q "create-database.bat" 2>nul
del /q "check-database.bat" 2>nul
del /q "start-frontend.bat" 2>nul
del /q "start-backend.bat" 2>nul
del /q "start-project.bat" 2>nul
del /q "run-now.bat" 2>nul
del /q "run-project.bat" 2>nul
del /q "start-database.bat" 2>nul
del /q "start-full-project.bat" 2>nul
del /q "check-json.bat" 2>nul
del /q "start-clean.bat" 2>nul

REM حذف ملفات الوثائق المكررة
del /q "الحل_النهائي_للمشروع.txt" 2>nul
del /q "كيف_تشغل_المشروع_الآن.txt" 2>nul
del /q "كيف_تشغل_المشروع.txt" 2>nul
del /q "تعليمات_سريعة.txt" 2>nul
del /q "حل_مشكلة_المنفذ.txt" 2>nul
del /q "حل_مشكلة_الكاش.md" 2>nul
del /q "الحل_الأخير.md" 2>nul
del /q "الحل_النهائي.md" 2>nul
del /q "مشاكل_المشروع_والحلول.md" 2>nul
del /q "إرجاع_الهيدر.md" 2>nul
del /q "تحسينات_الهيدر.md" 2>nul
del /q "FINAL_STATUS_UPDATE.md" 2>nul
del /q "SOLUTION.md" 2>nul
del /q "QUICK_START.md" 2>nul
del /q "INSTALLATION_GUIDE.md" 2>nul
del /q "ABOUT_PAGE_CREATION.md" 2>nul
del /q "COLOR_IMPROVEMENTS_AND_CITIES.md" 2>nul
del /q "COMPLETE_TRANSLATION_REVIEW.md" 2>nul
del /q "DATABASE_SETUP.md" 2>nul
del /q "FINAL_UPDATES_COMPLETED.md" 2>nul
del /q "HOME_SERVICES_VISUAL_IMPROVEMENT.md" 2>nul
del /q "RTL_SPACING_FIX.md" 2>nul
del /q "RTL_SPACING_FIXES.md" 2>nul
del /q "UPCOMING_EVENTS_VISUAL_IMPROVEMENT.md" 2>nul
del /q "VISUAL_IMPROVEMENTS_APPLIED.md" 2>nul
del /q "WHY_ATLAS_TRANSLATION_FIX.md" 2>nul
del /q "ABOUT_CONTACT_UPDATE.md" 2>nul
del /q "JSON_FIX_UPDATE.md" 2>nul
del /q "PRODUCTS_TRANSLATION_UPDATE.md" 2>nul
del /q "FINAL_SERVICES_UPDATE.md" 2>nul
del /q "COMPLETE_IMPROVEMENTS.md" 2>nul
del /q "DESIGN_IMPROVEMENTS.md" 2>nul
del /q "FINAL_IMPROVEMENTS.md" 2>nul
del /q "SERVICES_ERROR_FIX.md" 2>nul
del /q "SERVICES_RESTORATION_UPDATE.md" 2>nul
del /q "SERVICES_TRANSLATION_UPDATE.md" 2>nul
del /q "UPDATES_COMPLETED.md" 2>nul
del /q "WHY_ATLAS_SECTION.md" 2>nul
del /q "UPDATES.md" 2>nul
del /q "RUN_MANUALLY.md" 2>nul
del /q "PRODUCT_ORDER_SYSTEM.md" 2>nul
del /q "BUSINESS_VISITS_BUTTON_UPDATE.md" 2>nul
del /q "FALCON_REGISTRATION_UPDATE.md" 2>nul
del /q "PRODUCT_DETAILS_FIX.md" 2>nul
del /q "RTL_UPDATES_COMPLETED.md" 2>nul
del /q "LANGUAGE_FIX.md" 2>nul
del /q "LANGUAGE_GUIDE.md" 2>nul

REM حذف ملفات SCSS غير المستخدمة
del /q "palette1.scss" 2>nul
del /q "palette.scss" 2>nul

REM حذف ملفات JavaScript غير المستخدمة
del /q "start-servers.js" 2>nul
del /q "check-json.js" 2>nul
del /q "start-project.ps1" 2>nul
del /q "start-simple.ps1" 2>nul

echo [2/3] إنشاء مجلدات منظمة...

REM إنشاء مجلد docs
if not exist "docs" mkdir docs

REM إنشاء مجلد scripts
if not exist "scripts" mkdir scripts

REM نقل الملفات المهمة إلى المجلدات المناسبة
move "setup-database.sql" "scripts\" 2>nul
move "README.md" "docs\" 2>nul

echo [3/3] إنشاء README جديد...

echo # أطلس الشرق للمعارض والمؤتمرات > README.md
echo. >> README.md
echo ## 🚀 تشغيل المشروع >> README.md
echo. >> README.md
echo ```bash >> README.md
echo # تشغيل سريع >> README.md
echo START_PROJECT.bat >> README.md
echo ``` >> README.md
echo. >> README.md
echo ## 📚 الوثائق >> README.md
echo. >> README.md
echo راجع مجلد `docs/` للوثائق التفصيلية >> README.md

echo.
echo ========================================
echo    تم تنظيف المشروع بنجاح!
echo ========================================
echo.
echo ✅ تم حذف الملفات غير الضرورية
echo ✅ تم إنشاء هيكل منظم
echo ✅ تم إنشاء README جديد
echo.
echo 📁 الملفات المتبقية:
echo    - README.md
echo    - package.json
echo    - tailwind.config.js
echo    - START_PROJECT.bat
echo    - src/ (المجلد الرئيسي للكود)
echo    - backend/ (الخادم الخلفي)
echo    - docs/ (الوثائق)
echo    - scripts/ (السكربتات)
echo.
pause
