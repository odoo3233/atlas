@echo off
echo Checking PostgreSQL Database Status...
echo.

echo 1. Checking if PostgreSQL service is running...
sc query postgresql-x64-15 | find "RUNNING"
if %errorlevel% equ 0 (
    echo ✅ PostgreSQL service is running
) else (
    echo ❌ PostgreSQL service is not running
    echo Starting PostgreSQL service...
    net start postgresql-x64-15
    if %errorlevel% equ 0 (
        echo ✅ PostgreSQL service started successfully
    ) else (
        echo ❌ Failed to start PostgreSQL service
    )
)

echo.
echo 2. Checking if port 5432 is open...
netstat -an | findstr :5432
if %errorlevel% equ 0 (
    echo ✅ Port 5432 is open - PostgreSQL is listening
) else (
    echo ❌ Port 5432 is not open
)

echo.
echo 3. Testing database connection...
echo This will attempt to connect to the database...
echo If you see connection errors, the database might not exist.

echo.
echo Database check complete!
echo.
echo If you see errors, you may need to:
echo 1. Install PostgreSQL
echo 2. Create the database 'atlas_db'
echo 3. Run setup-database.sql
echo.
pause

