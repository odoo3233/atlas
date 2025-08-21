@echo off
echo ========================================
echo    Atlas Al-Sharq - Quick Install
echo ========================================
echo.
echo This will automatically set up everything for you.
echo.
echo Press any key to start the installation...
pause > nul

echo.
echo Starting automatic setup...
echo.

echo Step 1: Checking if PostgreSQL is installed...
call check-database.bat
if %errorlevel% neq 0 (
    echo.
    echo PostgreSQL not found. Starting download...
    echo This may take a few minutes...
    call download-postgresql.bat
    echo.
    echo PostgreSQL installation complete!
) else (
    echo PostgreSQL is already installed!
)

echo.
echo Step 2: Creating database...
call create-database.bat

echo.
echo Step 3: Starting the project...
echo The project will open in your browser automatically.
call start-project.bat

echo.
echo ========================================
echo    Installation Complete!
echo ========================================
echo.
echo Your project is now running at:
echo - Frontend: http://localhost:3000
echo - Backend: http://localhost:5000
echo.
echo You can now:
echo - Browse products
echo - View product details
echo - Use the barcode system
echo - Browse exhibitions
echo.
echo Press any key to exit...
pause > nul

