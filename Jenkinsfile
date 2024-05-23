pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                // Cloner le dépôt depuis GitHub
                git url: 'https://github.com/96182544/project.git', branch: 'main'
            }
        }
        stage('Build & SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube_server') {
                    // Exécuter l'analyse SonarQube sur le code JavaScript
                       sh """sonar-scanner \
                -Dsonar.projectKey=-aa \
                -Dsonar.sources=. \
                -Dsonar.host.url=http://100.25.211.99:9000 \
                -Dsonar.login=admin \
                -Dsonar.password=sonar
            """
                }
            }
        }
   
    }

}
