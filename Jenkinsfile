pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo "Etape de build avec Github Auto"
                sh '''
                    ssh dnt3@10.0.2.15
                    cd ~/DNT3
                    pm2 stop bin/www
                    git pull
                    npm install --production
                    pm2 start bin/www
                '''
            }
        }
        stage('Test') {
            steps {
                echo "Etape de test"
            }
        }
        stage('Deploy') {
            steps {
                echo "Etape de déploiement"
            }
        }
    }  
}
