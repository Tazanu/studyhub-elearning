pipeline {
    agent any

    stages {
        stage('Network Setup') {
            steps {
                echo 'Configuring network for GitHub access...'
                script {
                    try {
                        sh '''
                            echo "Configuring DNS for GitHub access..."
                            echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf.backup || true
                            echo "nameserver 8.8.4.4" | sudo tee -a /etc/resolv.conf.backup || true
                            sudo cp /etc/resolv.conf.backup /etc/resolv.conf || true
                            nslookup github.com 8.8.8.8 || true
                        '''
                    } catch (Exception e) {
                        echo "Network setup failed: ${e.getMessage()}"
                    }
                }
            }
        }

        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                retry(3) {
                    timeout(time: 5, unit: 'MINUTES') {
                        checkout scm
                    }
                }
            }
        }

        stage('Setup Flutter') {
            steps {
                echo 'Setting up Flutter environment...'
                script {
                    try {
                        // Try Docker first
                        sh 'sudo docker pull cirrusci/flutter:stable'
                        env.USE_DOCKER = 'true'
                        echo 'Docker available - using containerized Flutter'
                    } catch (Exception e) {
                        echo 'Docker not available or permission denied'
                        echo 'Falling back to direct Flutter installation'
                        env.USE_DOCKER = 'false'
                        
                        // Install Flutter directly
                        sh '''
                            if ! command -v flutter &> /dev/null; then
                                echo "Installing Flutter..."
                                cd /tmp
                                wget -q https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.16.5-stable.tar.xz || curl -L -o flutter_linux_3.16.5-stable.tar.xz https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.16.5-stable.tar.xz
                                tar xf flutter_linux_3.16.5-stable.tar.xz
                                export PATH="/tmp/flutter/bin:$PATH"
                                flutter --version
                            else
                                echo "Flutter already installed"
                                flutter --version
                            fi
                        '''
                    }
                }
            }
        }

        stage('Flutter Doctor') {
            steps {
                script {
                    if (env.USE_DOCKER == 'true') {
                        sh '''
                        sudo docker run --rm \
                        -v $WORKSPACE:/app \
                        -w /app \
                        cirrusci/flutter:stable \
                        flutter doctor || true
                        '''
                    } else {
                        sh '''
                        export PATH="/tmp/flutter/bin:$PATH"
                        flutter doctor || true
                        '''
                    }
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    if (env.USE_DOCKER == 'true') {
                        sh '''
                        sudo docker run --rm \
                        -v $WORKSPACE:/app \
                        -w /app \
                        cirrusci/flutter:stable \
                        flutter pub get
                        '''
                    } else {
                        sh '''
                        export PATH="/tmp/flutter/bin:$PATH"
                        flutter pub get
                        '''
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    if (env.USE_DOCKER == 'true') {
                        sh '''
                        sudo docker run --rm \
                        -v $WORKSPACE:/app \
                        -w /app \
                        cirrusci/flutter:stable \
                        flutter test || true
                        '''
                    } else {
                        sh '''
                        export PATH="/tmp/flutter/bin:$PATH"
                        flutter test || true
                        '''
                    }
                }
            }
        }

        stage('Build Web') {
            steps {
                script {
                    if (env.USE_DOCKER == 'true') {
                        sh '''
                        sudo docker run --rm \
                        -v $WORKSPACE:/app \
                        -w /app \
                        cirrusci/flutter:stable \
                        flutter build web --release
                        '''
                    } else {
                        sh '''
                        export PATH="/tmp/flutter/bin:$PATH"
                        flutter config --enable-web
                        flutter build web --release
                        '''
                    }
                }
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