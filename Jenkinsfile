pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo "Etape de build avec Github Auto"
                sh '''
                    ssh dnt3@10.0.2.15
                    cd /var/www/dnt3/DNT3
                    git pull
                    npm install --production
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
