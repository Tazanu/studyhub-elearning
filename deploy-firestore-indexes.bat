@echo off
REM Script to deploy Firestore indexes
REM Run this from the project root directory

echo Deploying Firestore indexes to Firebase project...

REM Check if Firebase CLI is installed
where firebase >nul 2>nul
if %errorlevel% neq 0 (
    echo Installing Firebase CLI...
    npm install -g firebase-tools
)

REM Deploy indexes
firebase deploy --only firestore:indexes

echo Firestore indexes deployed successfully!
pause
