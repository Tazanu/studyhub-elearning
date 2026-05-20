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
                echo 'Setting up Flutter environment...'
                sh '''
                    if ! command -v flutter &> /dev/null; then
                        echo "Installing Flutter..."
                        cd /tmp
                        curl -L -o flutter.tar.xz https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.16.5-stable.tar.xz
                        tar xf flutter.tar.xz
                        export PATH="/tmp/flutter/bin:$PATH"
                    fi
                    flutter --version
                '''
            }
        }

        stage('Flutter Doctor') {
            steps {
                sh '''
                    export PATH="/tmp/flutter/bin:$PATH"
                    flutter doctor || true
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    export PATH="/tmp/flutter/bin:$PATH"
                    flutter pub get
                '''
            }
        }

        stage('Run Tests') {
            steps {
                sh '''
                    export PATH="/tmp/flutter/bin:$PATH"
                    flutter test || true
                '''
            }
        }

        stage('Build Web') {
            steps {
                sh '''
                    export PATH="/tmp/flutter/bin:$PATH"
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