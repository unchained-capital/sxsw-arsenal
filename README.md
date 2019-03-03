# sxsw-arsenal

Supporting materials for "The Arsenal of a Blockchain Developer" SXSW 2019 Workshop

**WORK IN PROGRESS**

# Run a bitcoind node!

## Prerequs:

1. Clone this repo: `git clone https://github.com/unchained-capital/sxsw-arsenal.git`
2. make bitcoind/.bitcoin writable by all

You can either install bitcoind, or run a docker container I've provided.


### Dockerized bitcoind
1. [Docker]
2. DockerHub login
3. docker-compose modern version (ubuntu may give you an old version)

### Install bitcoind locally
1. [bitcoind]
2. Configure bitcoind to use the provided config file in bitcoind/.bitcoin


## Quickstart

### docker-compose
```
cd bitcoind
docker-compose pull
docker-compose up
docker-compose exec bitcoind bitcoin-cli help
```

### docker
```
cd bitcoind
docker build -f Dockerfile.bitcoind -t destrys/bitcoind .
docker run -it -v "$PWD/.bitcoind":/home/bitcoin/.bitcoind destrys/bitcoind
docker exec bitcoind bitcoin-cli help
```

### Local install



[docker]: https://www.docker.com/get-started
[bitcoind]: https://bitcoin.org/en/download