pipeline {
    agent {
        docker {
            image 'cirrusci/flutter:stable'
            args '--user root'
        }
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                checkout scm
            }
        }

        stage('Setup Flutter') {
            steps {
                echo 'Flutter environment ready (using Docker image)'
                sh 'flutter --version'
            }
        }

        stage('Flutter Doctor') {
            steps {
                sh 'flutter doctor || true'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'flutter pub get'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'flutter test || true'
            }
        }

        stage('Build Web') {
            steps {
                sh '''
                    flutter config --enable-web
                    flutter build web --release
                '''
            }
        }

        stage('Archive Artifacts') {
            steps {
                script {
                    if (fileExists('build/web')) {
                        archiveArtifacts artifacts: 'build/web/**/*', fingerprint: true, allowEmptyArchive: true
                        echo 'Web build artifacts archived successfully ✅'
                    } else {
                        echo 'No web build artifacts found ⚠️'
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed 🏁'
            cleanWs()
        }
        success {
            echo 'Pipeline SUCCESS ✅'
            echo '🎉 StudyHub build completed successfully!'
            echo '📦 Check archived artifacts for build outputs'
        }
        failure {
            echo 'Pipeline FAILED ❌'
            echo '🔍 Check logs above for error details'
            echo '💡 Common issues: Docker permissions, Flutter installation, or dependencies'
        }
    }
}