@echo off
echo Cleaning and starting Atlas Al-Sharq...
echo.

echo Stopping any running processes...
taskkill /f /im node.exe >nul 2>&1

echo.
echo Starting development server...
npm run dev

pause

