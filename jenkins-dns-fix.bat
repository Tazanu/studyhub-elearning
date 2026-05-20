@echo off
REM Jenkins DNS Fix Script
echo Configuring DNS for Jenkins...

REM Set DNS to Google DNS
netsh interface ip set dns "Wi-Fi" static 8.8.8.8
netsh interface ip add dns "Wi-Fi" 8.8.4.4 index=2

REM Flush DNS cache
ipconfig /flushdns

REM Test GitHub connectivity
echo Testing GitHub connectivity...
nslookup github.com 8.8.8.8

echo DNS configuration complete. Restart Jenkins service.
pause