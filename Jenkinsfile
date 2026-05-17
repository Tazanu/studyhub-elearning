pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                checkout scm
            }
        }

        stage('Setup Flutter') {
            steps {
                echo 'Running Flutter in Docker...'
                sh 'docker pull cirrusci/flutter:stable'
            }
        }

        stage('Flutter Doctor') {
            steps {
                sh '''
                docker run --rm \
                -v $WORKSPACE:/app \
                -w /app \
                cirrusci/flutter:stable \
                flutter doctor
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                docker run --rm \
                -v $WORKSPACE:/app \
                -w /app \
                cirrusci/flutter:stable \
                flutter pub get
                '''
            }
        }

        stage('Run Tests') {
            steps {
                sh '''
                docker run --rm \
                -v $WORKSPACE:/app \
                -w /app \
                cirrusci/flutter:stable \
                flutter test
                '''
            }
        }

        stage('Build Web') {
            steps {
                sh '''
                docker run --rm \
                -v $WORKSPACE:/app \
                -w /app \
                cirrusci/flutter:stable \
                flutter build web
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline SUCCESS ✅'
        }
        failure {
            echo 'Pipeline FAILED ❌'
        }
    }
}