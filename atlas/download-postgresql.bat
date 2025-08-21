@echo off
echo Downloading PostgreSQL...
echo.

echo This script will download PostgreSQL 15 for Windows.
echo.

echo 1. Creating download directory...
if not exist "downloads" mkdir downloads
cd downloads

echo.
echo 2. Downloading PostgreSQL 15...
echo Downloading from official PostgreSQL website...
powershell -Command "& {Invoke-WebRequest -Uri 'https://get.enterprisedb.com/postgresql/postgresql-15.5-1-windows-x64.exe' -OutFile 'postgresql-15.5-1-windows-x64.exe'}"

if %errorlevel% equ 0 (
    echo ✅ PostgreSQL downloaded successfully!
    echo.
    echo 3. Starting installation...
    echo Please follow the installation wizard.
    echo Make sure to:
    echo - Remember the password you set for 'postgres' user
    echo - Keep the default port (5432)
    echo - Install all components
    echo.
    start /wait postgresql-15.5-1-windows-x64.exe
    echo.
    echo Installation complete!
) else (
    echo ❌ Failed to download PostgreSQL
    echo Please download manually from: https://www.postgresql.org/download/windows/
)

echo.
echo 4. Returning to project directory...
cd ..

echo.
echo PostgreSQL installation process complete!
echo You can now run create-database.bat to set up the database.
echo.
pause

