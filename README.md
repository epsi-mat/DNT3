# Projet DNT3
Le but de ce projet est de mettre en place l'intégration continue pour le client Preudhomme, une banque qui souhaite développer son propre ERP.
# Procédure d'installation
Tout d'abord clonner ce repository et placez-vous à l'intérieur.
## Avec Node.js
Ouvrez un terminal et installez les paquets nécessaires aux projets :
```
npm install --production
```
Si vous voulez seulement voir le site.
```
npm install 
```
Cette commande installera tout les dépendances, y compris celles de développement.

Pour plus d'information direction : `package.json`

Créer un fichier `.env` à la racine du dossier et copier-coller le contenu du fichier `.env.txt`

Il est nécessaire d'avoir mysql et de le paramétrer en fonction des variables d'environnements du fichier `.env`.
La base de données utilisées doit contenir la structure fourni dans le dossier `sqlscripts/`

Pour lancer le site internet, lancer la commande :
```
npm start
```
Le site est accessible sur http://localhost:<_PORT_>
## Avec Docker
Lancer la commande :
```
docker-compose up
```
Le site est accessible sur http://localhost

Pour changer le port (80), il faut modifier le fichier docker-compose.yml au niveau de :
```yaml
services:
  nodejs:
...
    ports:
      - "80:3000"
```
# Integration continue
Le dossier `continuous-integration/` contient des fichiers de configuration pour la mise en place de Jenkins et SonarQube. 
Un fichier docker-compose est présent dans ce dossier pour lancer Jenkins en local sur le port 8080.

L'utilisateur et le mot de passe sont préconfiguré à admin / admin.
Les plugins Jenkins nécessaires sont déjà installés et la configuration de l'agent Docker aussi.

Une précision sur l'image Jenkins qui est en fait monté d'un Docker. 
On utilise un Docker dans un Docker avec un volume pour récupérer le Docker daemon de l'hôte.
```yaml
services:
  jenkins:
...
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
```
## SonarQube
SonarQube est un serveur distinct regroupant différents cadres d'analyse de code, tels que Checkstyle, FindBugs et JaCoCo. 

Pour y accéder, aller sur ur le http://localhost:9000 

L'utilisateur: admin et le mot de passe : admin

Sans Jenkins on peut tester notre solution en téléchargeant le sonnarscanner à l'adresse suivante :
https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/

Puis générer un token dans sonarqube et suivre les instructions sur le site