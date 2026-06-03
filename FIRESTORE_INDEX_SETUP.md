# Firestore Index Setup Guide

## Problem
The query requires a composite index because it uses both `arrayContains` and `orderBy` operations.

## Solution
I've created the necessary index configuration files.

## Files Created

1. **firestore.indexes.json** - Contains all required composite indexes
2. **firebase.json** - Firebase configuration pointing to the indexes file
3. **deploy-firestore-indexes.bat** - Windows script to deploy indexes
4. **deploy-firestore-indexes.sh** - Linux/Mac script to deploy indexes

## How to Deploy Indexes

### Option 1: Using Firebase CLI (Recommended)

1. **Install Firebase CLI** (if not already installed):
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**:
   ```bash
   firebase login
   ```

3. **Deploy indexes**:
   ```bash
   # Windows
   deploy-firestore-indexes.bat
   
   # Linux/Mac
   ./deploy-firestore-indexes.sh
   ```

### Option 2: Manual Deployment

1. **Navigate to project directory**:
   ```bash
   cd peer_to_peer_e_learning_app
   ```

2. **Deploy using Firebase CLI**:
   ```bash
   firebase deploy --only firestore:indexes
   ```

### Option 3: Using Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `peer-to-peer-elearning`
3. Navigate to **Firestore Database** → **Indexes**
4. Click **Create Index** for each query that needs an index

## Indexes Required

The following composite indexes are needed:

| Collection | Field 1 | Mode | Field 2 | Mode |
|------------|---------|------|---------|------|
| groups | memberIds | ARRAY_CONTAINS | updatedAt | DESCENDING |
| posts | groupId | ASCENDING | createdAt | DESCENDING |
| messages | groupId | ASCENDING | createdAt | ASCENDING |
| groupNotes | groupId | ASCENDING | createdAt | DESCENDING |
| questions | tags | ARRAY_CONTAINS | createdAt | DESCENDING |
| notes | isVerified | ASCENDING | rating | DESCENDING |
| notes | isVerified | ASCENDING | category | ASCENDING | rating | DESCENDING |
| tutors | isVerified | ASCENDING | rating | DESCENDING |
| tutors | isVerified | ASCENDING | subjects | ARRAY_CONTAINS | rating | DESCENDING |

## After Deployment

1. Wait for indexes to build (usually 1-2 minutes)
2. Test your group page - the error should be resolved
3. All queries should now work correctly

## Troubleshooting

- **Index not found**: Wait a few minutes for the index to finish building
- **Still getting error**: Check that you're using the correct project in Firebase Console
- **Permission denied**: Make sure you have the necessary Firebase permissions
