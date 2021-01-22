pipeline {
    agent any
        stages {
        stage('Build') {
            steps {
                echo "Etape de build avec Github Auto"
                cd /home/groupea/Documents/DNT3
                docker build -t dnt3/nodeapp:v1 .
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
