pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo "Etape de build avec Github Auto"
                sh '''
                    cd /var/www/dnt3/DNT3
                    pm2 stop /var/www/dnt3/DNT3/bin/www
                    git pull
                    npm install
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
                sh 'p2 start /var/www/dnt3/DNT3/bin/www'
            }
        }
    }  
}
