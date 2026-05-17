pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from repository...'
                checkout scm
            }
        }
        
        stage('Setup and Build') {
            agent {
                docker {
                    image 'cirrusci/flutter:stable'
                    args '-u root:root'
                }
            }
            stages {
                stage('Flutter Doctor') {
                    steps {
                        echo 'Checking Flutter installation...'
                        sh 'flutter --version'
                        sh 'flutter doctor'
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
                
                stage('Build Android APK') {
                    steps {
                        echo 'Building Android APK...'
                        sh 'flutter build apk --release'
                    }
                }
            }
        }
        
        stage('Archive Artifacts') {
            steps {
                echo 'Archiving build artifacts...'
                archiveArtifacts artifacts: 'build/web/**/*', fingerprint: true, allowEmptyArchive: true
                archiveArtifacts artifacts: 'build/app/outputs/flutter-apk/*.apk', fingerprint: true, allowEmptyArchive: true
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
            echo 'StudyHub build completed successfully!'
        }
        failure {
            echo 'Pipeline failed! ❌'
            echo 'Check the logs above for error details.'
        }
    }
}