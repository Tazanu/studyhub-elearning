pipeline {
    agent any
    
    environment {
        FLUTTER_HOME = '/usr/local/flutter'
        PATH = "$FLUTTER_HOME/bin:$PATH"
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from repository...'
                checkout scm
            }
        }
        
        stage('Setup Flutter') {
            steps {
                echo 'Setting up Flutter environment...'
                sh '''
                    flutter --version
                    flutter doctor
                '''
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Installing Flutter dependencies...'
                sh 'flutter pub get'
            }
        }
        
        stage('Code Analysis') {
            steps {
                echo 'Running code analysis...'
                sh 'flutter analyze'
            }
        }
        
        stage('Run Tests') {
            steps {
                echo 'Running Flutter tests...'
                sh 'flutter test'
            }
        }
        
        stage('Build Web') {
            steps {
                echo 'Building Flutter web application...'
                sh 'flutter build web --release'
            }
        }
        
        stage('Build Android') {
            when {
                anyOf {
                    branch 'main'
                    branch 'develop'
                }
            }
            steps {
                echo 'Building Android APK...'
                sh 'flutter build apk --release'
            }
        }
        
        stage('Archive Artifacts') {
            steps {
                echo 'Archiving build artifacts...'
                archiveArtifacts artifacts: 'build/web/**/*', fingerprint: true
                archiveArtifacts artifacts: 'build/app/outputs/flutter-apk/*.apk', fingerprint: true, allowEmptyArchive: true
            }
        }
        
        stage('Deploy to Staging') {
            when {
                branch 'develop'
            }
            steps {
                echo 'Deploying to staging environment...'
                // Add your staging deployment commands here
                sh '''
                    echo "Deploying StudyHub to staging..."
                    # Example: Deploy to Firebase Hosting staging
                    # firebase deploy --project studyhub-staging --only hosting
                '''
            }
        }
        
        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                echo 'Deploying to production environment...'
                // Add your production deployment commands here
                sh '''
                    echo "Deploying StudyHub to production..."
                    # Example: Deploy to Firebase Hosting production
                    # firebase deploy --project studyhub-production --only hosting
                '''
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline execution completed.'
            cleanWs()
        }
        success {
            echo 'Pipeline executed successfully! 🎉'
            // Add success notifications here
            // Example: Slack notification, email, etc.
        }
        failure {
            echo 'Pipeline failed! ❌'
            // Add failure notifications here
            // Example: Slack notification, email, etc.
        }
    }
}