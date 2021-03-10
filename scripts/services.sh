#!/bin/bash

# User service 

docker build \
    -t nodejskonga:user \
    ./services/user

docker run -d \
    --name service-user \
    --network=kong-net \
    -p 5000:5000 \
    nodejskonga:user

# Upstream services 

docker build \
    -t nodejskonga:upstream1 \
    ./services/upstreams/service-one

docker run -d \
    --name upstream-one \
    --network=kong-net \
    -p 6000:6000 \
    nodejskonga:upstream1

docker build \
    -t nodejskonga:upstream2 \
    ./services/upstreams/service-two

docker run -d \
    --name upstream-two \
    --network=kong-net \
    -p 6001:6001 \
    nodejskonga:upstream2

# Log service

docker build \
    -t nodejskonga:log \
    ./services/log

docker run -d \
    --name service-log \
    --network=kong-net \
    -p 7000:7000 \
    nodejskonga:log