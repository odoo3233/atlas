@echo off
echo ========================================
echo    Atlas Al-Sharq - Complete Setup
echo ========================================
echo.

echo This script will help you set up everything needed for the project.
echo.

:menu
echo Choose an option:
echo 1. Download and Install PostgreSQL
echo 2. Check if PostgreSQL is installed
echo 3. Create Database
echo 4. Start the Project
echo 5. Run Complete Setup (All Steps)
echo 6. Exit
echo.
set /p choice="Enter your choice (1-6): "

if "%choice%"=="1" goto download
if "%choice%"=="2" goto check
if "%choice%"=="3" goto create
if "%choice%"=="4" goto start
if "%choice%"=="5" goto complete
if "%choice%"=="6" goto exit
goto menu

:download
echo.
echo ========================================
echo    Step 1: Downloading PostgreSQL
echo ========================================
call download-postgresql.bat
goto menu

:check
echo.
echo ========================================
echo    Step 2: Checking PostgreSQL
echo ========================================
call check-database.bat
goto menu

:create
echo.
echo ========================================
echo    Step 3: Creating Database
echo ========================================
call create-database.bat
goto menu

:start
echo.
echo ========================================
echo    Step 4: Starting Project
echo ========================================
call start-project.bat
goto menu

:complete
echo.
echo ========================================
echo    Complete Setup - All Steps
echo ========================================
echo.
echo This will run all steps automatically.
echo.

echo Step 1: Checking if PostgreSQL is installed...
call check-database.bat
if %errorlevel% neq 0 (
    echo PostgreSQL not found. Starting download...
    call download-postgresql.bat
)

echo.
echo Step 2: Creating database...
call create-database.bat

echo.
echo Step 3: Starting the project...
call start-project.bat

echo.
echo Complete setup finished!
echo The project should now be running at http://localhost:3000
echo.
pause
goto menu

:exit
echo.
echo Thank you for using Atlas Al-Sharq Setup!
echo.
exit /b 0

