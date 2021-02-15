# Starting off with the Jenkins base Image
FROM jenkins/jenkins:latest

# Docker in Docker
USER 0
RUN curl -sSL https://get.docker.com/ | sh
# Setup users and groups
RUN usermod -aG docker jenkins
# should work with the previous line but because it does not work use this (not secure):
RUN chmod 777 /var/run/docker.sock
USER 1000

# Installing the plugins we need using the in-built install-plugins.sh script
RUN /usr/local/bin/install-plugins.sh git matrix-auth workflow-aggregator docker-workflow blueocean credentials-binding docker-plugin

# Setting up environment variables for Jenkins admin user
ENV JENKINS_USER admin
ENV JENKINS_PASS admin

# Skip the initial setup wizard
ENV JAVA_OPTS -Djenkins.install.runSetupWizard=false

# Start-up scripts to set number of executors and creating the admin user
COPY executors.groovy /usr/share/jenkins/ref/init.groovy.d/
COPY default-user.groovy /usr/share/jenkins/ref/init.groovy.d/
COPY myDocker.groovy /usr/share/jenkins/ref/init.groovy.d/

VOLUME /var/jenkins_home