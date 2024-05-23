pipeline {
    agent any
    environment {
        // Configuration du serveur SonarQube
        SONARQUBE_SERVER = 'SonarQube_server'
        // Chemin de SonarQube Scanner s'il n'est pas dans le PATH
        SCANNER_HOME = tool name: 'SonarQube Scanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
    }
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
                    sh "${SCANNER_HOME}/bin/sonar-scanner -Dsonar.projectKey=my_project_key -Dsonar.sources=./src -Dsonar.language=js -Dsonar.sourceEncoding=UTF-8"
                }
            }
        }
        stage('Quality Gate') {
            steps {
                script {
                    // Attendre le résultat du Quality Gate
                    timeout(time: 1, unit: 'HOURS') {
                        def qg = waitForQualityGate()
                        if (qg.status != 'OK') {
                            error "Quality Gate failed: ${qg.status}"
                        }
                    }
                }
            }
        }
    }
    post {
        always {
            // Actions à exécuter après toutes les étapes, par exemple :
            cleanWs()
        }
    }
}
