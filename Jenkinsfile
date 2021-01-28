pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo "Etape de build avec Github Auto"
                cd /home/epsi/Bureau/DNT3
                pm2 stop bin/www
                git pull
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
            cd /home/epsi/Bureau/DNT3
            npm install
            pm2 start bin/www
          }
        }
    }
}
