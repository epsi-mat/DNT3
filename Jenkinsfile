pipeline {
    agent any
        stages {
        stage('Build') {
            steps {
                echo "Etape de build avec Github Auto"
                sh 'docker build -t dnt3/nodeapp:v1'
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
