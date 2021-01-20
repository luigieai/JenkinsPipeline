pipeline {
    agent { docker { image 'node:14-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
                sh 'npm i'
            }
        }
        stage('test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}