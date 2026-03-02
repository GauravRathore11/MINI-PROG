pipeline{
    agent any
    options {
        buildDiscarder(logRotator(numToKeepStr: '5')) 
    }
    stages{
        stage('Build'){
            steps{
<<<<<<< HEAD
                if (isUnix()) {
                    sh 'npm ci'
                    sh 'npm run build'
                } else {
                    bat 'npm ci'
                    bat 'npm run build'
                }
=======
                bat 'npm install'
                bat 'npm run build'
>>>>>>> 15d487100353ce489ff3ee2765644ce08c847277
            }
        }
    }
}