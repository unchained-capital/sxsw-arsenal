# sxsw-arsenal

Supporting materials for "The Arsenal of a Blockchain Developer"
SXSW 2019 Workshop

**WORK IN PROGRESS**

# Run a bitcoind node!

## Prerequs:

1. Clone this repo:
`git clone https://github.com/unchained-capital/sxsw-arsenal.git`
2. python - 2 or 3 should be ok
3. [nodejs]

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



## Explore bitcoind

### The bitcoind config file

Take a glance at .bitcoin/bitcoin.conf,
this is how you set up bitcoind to behave how you want.
For now, just note the `regtest=1` line.
This instructs bitcoind to run in [regtest mode].
Removing this line and uncommenting `testnet=1` would allow you to
connect to the [bitcoin testnet]. Without either config, bitcoind would
connect to the bitcoin mainnet, which can take days to download depending
on your connection.

### bitcoind interfaces

Bitcoind has 3 interfaces:

1. The CLI
2. JSON-RPC
3. REST

### python-bitcoinlib



[nodejs]: https://nodejs.org
[docker]: https://www.docker.com/get-started
[bitcoind]: https://bitcoin.org/en/download
[regtest mode]: https://bitcoin.org/en/developer-examples#regtest-mode
[bitcoin testnet]: https://bitcoin.org/en/developer-examples#testnet