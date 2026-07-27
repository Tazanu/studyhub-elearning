@echo off
echo =========================================
echo GROUP JOIN REQUEST WORKFLOW TEST
echo =========================================
echo.

set API_BASE=http://localhost:5000/api

echo [TEST] Make sure you have two test users in your database:
echo   1. test@example.com / password123 (will be owner)
echo   2. user2@example.com / password123 (will request to join)
echo.
pause
echo.

echo [1] Login as User 1 (group owner)...
curl -s -X POST "%API_BASE%/auth/login" ^
  -H "Content-Type: application/json" ^
  -d "{\"email\":\"test@example.com\",\"password\":\"password123\"}" > user1.json
echo.

echo [2] Create group with requires_approval=true...
echo Enter the token from user1.json and run:
echo curl -X POST "%API_BASE%/groups" -H "Authorization: Bearer YOUR_TOKEN" -H "Content-Type: application/json" -d "{\"name\":\"Test Approval Group\",\"description\":\"Testing workflow\",\"subject\":\"Computer Science\",\"requiresApproval\":true}"
echo.
pause
echo.

echo [3] Login as User 2...
curl -s -X POST "%API_BASE%/auth/login" ^
  -H "Content-Type: application/json" ^
  -d "{\"email\":\"user2@example.com\",\"password\":\"password123\"}" > user2.json
echo.

echo [4] User 2 requests to join (use group ID from step 2)...
echo curl -X POST "%API_BASE%/groups/GROUP_ID/join" -H "Authorization: Bearer USER2_TOKEN"
echo.
pause
echo.

echo [5] User 1 fetches pending requests...
echo curl "%API_BASE%/groups/GROUP_ID/requests" -H "Authorization: Bearer USER1_TOKEN"
echo.
pause
echo.

echo [6] User 1 approves the request...
echo curl -X POST "%API_BASE%/groups/GROUP_ID/requests/REQUEST_ID/approve" -H "Authorization: Bearer USER1_TOKEN"
echo.
pause
echo.

echo [7] Verify membership...
echo curl "%API_BASE%/groups/GROUP_ID"
echo.
echo Check that current_members = 2
echo.

echo =========================================
echo TEST COMPLETE
echo =========================================
