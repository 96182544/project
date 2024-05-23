pipeline {
    agent none
    stages {
        stage('Checkout') {
            agent any
            steps {
                // Vérification du code source depuis le dépôt SCM
                checkout scm
            }
        }
        stage('Build & SonarQube Analysis') {
            agent any
            steps {
                withSonarQubeEnv('SonarQube_server') {
                    // Exécuter l'analyse SonarQube sur le code JavaScript
                    sh 'sonar-scanner -Dsonar.projectKey=my_project_key -Dsonar.sources=./src -Dsonar.language=js -Dsonar.sourceEncoding=UTF-8'
                }
            }
        }
        stage('Quality Gate') {
            agent any
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
}
