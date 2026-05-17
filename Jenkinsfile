pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build APK') {
            agent {
                docker {
                    image 'cirrusci/flutter:stable'
                }
            }
            steps {
                sh 'flutter pub get'
                sh 'flutter build apk --release'
            }
        }

    }

    post {
        success {
            archiveArtifacts artifacts: 'build/app/outputs/flutter-apk/app-release.apk'
        }
    }
}