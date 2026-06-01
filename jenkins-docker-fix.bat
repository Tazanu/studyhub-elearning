@echo off
REM Jenkins Docker Network Fix Script for Windows

echo === Jenkins Docker GitHub Connectivity Fix ===

REM Get Jenkins container ID
echo Finding Jenkins container...
for /f "tokens=1" %%i in ('docker ps ^| findstr jenkins') do set JENKINS_CONTAINER=%%i

if "%JENKINS_CONTAINER%"=="" (
    echo Jenkins container not found. Listing all containers:
    docker ps -a
    pause
    exit /b 1
)

echo Found Jenkins container: %JENKINS_CONTAINER%

REM Configure DNS in Jenkins container
echo 1. Configuring DNS in Jenkins container...
docker exec -u root %JENKINS_CONTAINER% sh -c "echo 'nameserver 8.8.8.8' > /etc/resolv.conf && echo 'nameserver 8.8.4.4' >> /etc/resolv.conf"

REM Test GitHub connectivity from container
echo 2. Testing GitHub connectivity from container...
docker exec %JENKINS_CONTAINER% sh -c "nslookup github.com 8.8.8.8 && ping -c 3 github.com"

REM Configure Git settings in container
echo 3. Configuring Git settings in container...
docker exec %JENKINS_CONTAINER% sh -c "git config --global http.timeout 300 && git config --global http.lowSpeedLimit 0 && git config --global http.lowSpeedTime 999999"

echo === Network configuration complete ===
echo Restarting Jenkins container...
docker restart %JENKINS_CONTAINER%

echo Waiting for Jenkins to start...
timeout /t 30

echo Jenkins should be accessible at http://localhost:8080
pause