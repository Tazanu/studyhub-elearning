#!/bin/bash

# Script to deploy Firestore indexes
# Run this from the project root directory

echo "🚀 Deploying Firestore indexes to Firebase project..."

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI not found. Installing..."
    npm install -g firebase-tools
fi

# Check if logged in
firebase login list | grep -q "No accounts configured" && {
    echo "❌ Not logged in. Please run 'firebase login' first."
    exit 1
}

# Deploy indexes
firebase deploy --only firestore:indexes

echo "✅ Firestore indexes deployed successfully!"
