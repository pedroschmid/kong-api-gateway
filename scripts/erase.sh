#!/bin/bash

# stop all running containers
docker stop $(docker ps -aq)

# remove all stopped containers
docker rm $(docker ps -aq)

# remove all images
docker rmi $(docker images -q)

# remove all stray volumes if any
docker volume rm $(docker volume ls -q)

# prune system
docker system prune -af