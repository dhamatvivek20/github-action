#!/bin/bash

# Pull the Docker image
docker pull dhamatvivek/demo-react-app

# Run the Docker container with a specified name
docker run -d --name demo-react-app -p 80:80 dhamatvivek/demo-react-app
