pipeline {
    agent any
    stages {
        stage ('dumpDB') {
            sh '''
                ssh dnt3@10.0.2.15 <<EOF
                 mysqldump --column-statistics=0 --user=epsi --password="epsimysql" --socket='/opt/lampp/var/mysql/mysql.sock' --databases epsi > /var/www/dnt3/`date +%Y-%m-%d-%H`-dump.sql
                 exit
                EOF
            '''
        }
        stage('Deploy') {
            steps {
                echo "Etape de déploiement"
                sh '/var/www/dnt3/DNT3/bin/deploy.sh'
            }
        }
    }  
}
