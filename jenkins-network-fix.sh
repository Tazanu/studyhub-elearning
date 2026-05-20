#!/bin/bash
# Jenkins Network Fix Script

echo "=== Jenkins GitHub Connectivity Fix ==="

# Method 1: Configure DNS
echo "1. Configuring DNS servers..."
echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf.backup
echo "nameserver 8.8.4.4" | sudo tee -a /etc/resolv.conf.backup
sudo cp /etc/resolv.conf.backup /etc/resolv.conf

# Method 2: Test connectivity
echo "2. Testing GitHub connectivity..."
nslookup github.com 8.8.8.8
ping -c 3 github.com

# Method 3: Configure Git to use different protocol
echo "3. Configuring Git settings..."
git config --global http.timeout 300
git config --global http.lowSpeedLimit 0
git config --global http.lowSpeedTime 999999

echo "=== Network configuration complete ==="
echo "Restart Jenkins service: sudo systemctl restart jenkins"