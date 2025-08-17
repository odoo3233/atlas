@echo off
echo Starting PostgreSQL Database...

echo Checking if PostgreSQL service is running...
sc query postgresql-x64-15 | find "RUNNING"
if %errorlevel% neq 0 (
    echo PostgreSQL service is not running. Starting it...
    net start postgresql-x64-15
    if %errorlevel% neq 0 (
        echo Failed to start PostgreSQL service.
        echo Please check if PostgreSQL is installed and try manual start.
        pause
        exit /b 1
    )
) else (
    echo PostgreSQL service is already running.
)

echo.
echo Checking if port 5432 is open...
netstat -an | findstr :5432
if %errorlevel% neq 0 (
    echo Port 5432 is not open. PostgreSQL might not be running properly.
) else (
    echo Port 5432 is open. PostgreSQL is running.
)

echo.
echo Database setup complete!
echo You can now run the application.
pause
