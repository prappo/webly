FROM golang:1.13.4-alpine
RUN apk update && upgrade && \
    apk add --no-cache bash git openssh
WORKDIR /app