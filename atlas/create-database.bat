@echo off
echo Creating Atlas Database...
echo.

echo This script will help you create the database.
echo Make sure PostgreSQL is installed and running.
echo.

echo 1. Starting PostgreSQL service...
net start postgresql-x64-15
if %errorlevel% neq 0 (
    echo ❌ Failed to start PostgreSQL service
    echo Please check if PostgreSQL is installed
    pause
    exit /b 1
)

echo.
echo 2. Creating database 'atlas_db'...
echo You may need to enter your PostgreSQL password.

psql -U postgres -c "CREATE DATABASE atlas_db;"
if %errorlevel% equ 0 (
    echo ✅ Database 'atlas_db' created successfully
) else (
    echo ❌ Failed to create database
    echo The database might already exist
)

echo.
echo 3. Running setup script...
psql -U postgres -d atlas_db -f setup-database.sql
if %errorlevel% equ 0 (
    echo ✅ Database setup completed successfully
) else (
    echo ❌ Failed to run setup script
)

echo.
echo Database creation process complete!
echo You can now run start-project.bat to start the application.
echo.
pause

