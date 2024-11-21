# Eval docker
 
## Introduction

Ce projet est une évaluation de Docker, présentant diverses fonctionnalités et bonnes pratiques de Docker.

## Prérequis

- Docker installé sur votre machine
- Connaissances de base de Docker et de la containerisation

## Structure du projet

- `Dockerfile` : Contient les instructions pour construire l'image Docker.
- `docker-compose.yml` : Définit les services, réseaux et volumes pour Docker Compose.
- `src/` : Code source de l'application.
- `README.md` : Documentation du projet.

## Pour commencer

1. Clonez le dépôt :
    ```sh
    git clone /C:/Users/pariz/Documents/Mes documents/! La school/DevOps/Eval-docker
    cd Eval-docker
    ```

2. Construisez l'image Docker :
    ```sh
    docker build -t eval-docker .
    ```

3. Exécutez le conteneur Docker :
    ```sh
    docker run -p 8080:80 eval-docker
    ```

4. Accédez à l'application :
    Ouvrez votre navigateur et allez à `http://localhost:8080`.

## Utilisation de Docker Compose

1. Démarrez les services :
    ```sh
    docker-compose up
    ```

2. Arrêtez les services :
    ```sh
    docker-compose down
    ```

## Contribuer

ARYA(merlet) MARTIN ET LOUAN
## Licence

Ce projet est sous licence MIT.