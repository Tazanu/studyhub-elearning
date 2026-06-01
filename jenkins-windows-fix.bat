@echo off
REM Jenkins Windows Network Fix Script

echo === Jenkins GitHub Connectivity Fix for Windows ===

echo 1. Configuring DNS servers...
netsh interface ip set dns "Wi-Fi" static 8.8.8.8
netsh interface ip add dns "Wi-Fi" 8.8.4.4 index=2

echo 2. Flushing DNS cache...
ipconfig /flushdns

echo 3. Testing GitHub connectivity...
nslookup github.com 8.8.8.8
ping github.com -n 3

echo 4. Configuring Git settings...
git config --global http.timeout 300
git config --global http.lowSpeedLimit 0
git config --global http.lowSpeedTime 999999

echo === Network configuration complete ===
echo Restart Jenkins Windows service from Services.msc
pause