pipeline {
    agent {
        docker {
            image 'node:15.6.0-alpine3.12'
            args  '-u root:root'
        }
    }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
                sh 'npm install'
            }
        }
        stage('test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}