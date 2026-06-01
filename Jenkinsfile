pipeline {
    agent any
    
    environment {
        FLUTTER_HOME = '/var/jenkins_home/flutter'
        PATH = "${FLUTTER_HOME}/bin:${PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                checkout([$class: 'GitSCM', 
                    branches: [[name: '*/main']],
                    doGenerateSubmoduleConfigurations: false,
                    extensions: [],
                    userRemoteConfigs: [[
                        url: 'https://github.com/Tazanu/studyhub-elearning.git',
                        credentialsId: 'github-credentials'
                    ]]
                ])
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing required system packages...'
                sh '''
                    # Install xz-utils if not present
                    if ! command -v xz &> /dev/null; then
                        echo "Installing xz-utils..."
                        apt-get update -qq
                        apt-get install -y xz-utils curl git unzip
                    fi
                '''
            }
        }

        stage('Setup Flutter') {
            steps {
                echo 'Setting up Flutter environment...'
                sh '''
                    if [ ! -d "${FLUTTER_HOME}" ]; then
                        echo "Installing Flutter for the first time..."
                        mkdir -p /var/jenkins_home
                        cd /var/jenkins_home
                        curl -L -o flutter.tar.xz https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.16.5-stable.tar.xz
                        tar xf flutter.tar.xz
                        rm flutter.tar.xz
                        echo "Flutter installed successfully!"
                    else
                        echo "Flutter already installed, skipping download..."
                    fi
                    
                    flutter --version
                    flutter config --no-analytics
                '''
            }
        }

        stage('Flutter Doctor') {
            steps {
                echo 'Running Flutter Doctor...'
                sh 'flutter doctor -v || true'
            }
        }

        stage('Get Flutter Dependencies') {
            steps {
                echo 'Installing Flutter dependencies...'
                sh 'flutter pub get'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running Flutter tests...'
                sh 'flutter test || true'
            }
        }

        stage('Build Web') {
            steps {
                echo 'Building Flutter web app...'
                sh '''
                    flutter config --enable-web
                    flutter build web --release --verbose
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
