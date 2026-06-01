#!/bin/bash
# Jenkins Docker Network Fix Script

echo "=== Jenkins Docker GitHub Connectivity Fix ==="

# Get Jenkins container ID
JENKINS_CONTAINER=$(docker ps | grep jenkins | awk '{print $1}')

if [ -z "$JENKINS_CONTAINER" ]; then
    echo "Jenkins container not found. Listing all containers:"
    docker ps -a
    exit 1
fi

echo "Found Jenkins container: $JENKINS_CONTAINER"

# Configure DNS in Jenkins container
echo "1. Configuring DNS in Jenkins container..."
docker exec -u root $JENKINS_CONTAINER sh -c "
    echo 'nameserver 8.8.8.8' > /etc/resolv.conf
    echo 'nameserver 8.8.4.4' >> /etc/resolv.conf
"

# Test GitHub connectivity from container
echo "2. Testing GitHub connectivity from container..."
docker exec $JENKINS_CONTAINER sh -c "
    nslookup github.com 8.8.8.8
    ping -c 3 github.com || true
"

# Configure Git settings in container
echo "3. Configuring Git settings in container..."
docker exec $JENKINS_CONTAINER sh -c "
    git config --global http.timeout 300
    git config --global http.lowSpeedLimit 0
    git config --global http.lowSpeedTime 999999
    git config --global http.sslVerify false
"

echo "=== Network configuration complete ==="
echo "Restart Jenkins container: docker restart $JENKINS_CONTAINER"