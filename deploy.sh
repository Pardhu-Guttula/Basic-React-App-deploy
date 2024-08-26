#!/bin/bash

DOCKERHUB_USERNAME=$1
DOCKERHUB_PASSWORD=$2
# Log in to Docker Hub
docker login -u "$DOCKERHUB_USERNAME" -p "$DOCKERHUB_PASSWORD"

# Check if the container is already running and stop/remove it if necessary
if [ "$(docker ps -q -f name=my-react-app-container)" ]; then
  echo "Stopping and removing the existing container..."
  docker stop my-react-app-container
  docker rm my-react-app-container
fi

docker rmi pardhuguttula/react-img:main
# Pull the Docker image
docker pull pardhuguttula/react-img:main

# Run the Docker container
docker run -d -p 5000:5000 --name my-react-app-container pardhuguttula/react-img:main
