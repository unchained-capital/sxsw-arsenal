# sxsw-arsenal

Supporting materials for "The Arsenal of a Blockchain Developer"
SXSW 2019 Workshop

These instructions should work for mac and linux laptops. Windows users
may need some additional steps.

**WORK IN PROGRESS**

# Run a bitcoin node!

## Prerequs:

1. Clone this repo:
`git clone https://github.com/unchained-capital/sxsw-arsenal.git`
2. python 3
3. [nodejs]

You may need to make `bitcoind/.bitcoin` writable by all.

You can either install bitcoind, or run a docker container I've provided.

### Dockerized bitcoind
1. [Docker]
2. DockerHub login
3. docker-compose modern version (ubuntu may give you an old version)

### Install bitcoin locally
1. [bitcoin-qt]


## Quickstart

Use one of the methods below to get a node running in regtest mode

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
docker run -it --name bitcoind -p 18443:18443 -v "$PWD/.bitcoind":/home/bitcoin/.bitcoind destrys/bitcoind
docker exec bitcoind bitcoin-cli help
```

### Local install
1. Install [bitcoin-qt] using the instructions for your system
2. Replace the config file with the one provided (or symlink it).
[default datadir locations]
3. Start `Bitcoin Core` (logo should be blue and say '[regtest]'
4. `bitcoin-cli` isn't installed for mac and windows, but you can access
the same functions via the debug window's console (under the Help menu).


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

### The datadir directory

The datadir directory is where bitcoind stores all wallet and chain data.



### bitcoind interfaces

Bitcoind has 3 interfaces:

1. The CLI (not available with bitcoin-qt)
2. JSON-RPC
3. REST



## Bitcoin Libraries

### python-bitcoinlib

My favorite way to manipulate bitcoin transactions is with Peter Todd's
[python-bitcoinlib] python library. It currently doesn't have
all the functions you might need for key management and signing
(i.e. no BIP32, BIP39, or RFC6979), but it does have good functions for
parsing and forming transactions.

### [bitcoinjs]



### [bcoin]

Bcoin isn't just a library, it's actually a full client written in node.js.
So it's an alternative to bitcoind. As with all thing crypto, DYOR and use
at your own risk. But it's good to have multiple implementations.

## Block Explorers

There are a number of block explorers out there. These are very useful
for a blockchain developer as it gives you external validation that
you transactions are on-chain, it gives your customers an easy-to-use
second interface to blockchain data, and you can access transaction data
without having a full node running.

Block explorers are centralized software though, so you should not trust
them in any way. Don't trust them to provide you accurate data, and assume they
saving all data surrounding your requests.

### [BlockCypher]



## Using bitcoind in an application

`blocknotify` and `walletnotify` examples.


## Blockchain data

[blocksci] and [bitcoin-iterate]


[nodejs]: https://nodejs.org
[docker]: https://www.docker.com/get-started
[bitcoin-qt]: https://bitcoin.org/en/download
[regtest mode]: https://bitcoin.org/en/developer-examples#regtest-mode
[bitcoin testnet]: https://bitcoin.org/en/developer-examples#testnet
[default datadir locations]: https://en.bitcoin.it/wiki/Data_directory#Default_Location
[python-bitcoinlib]: https://github.com/petertodd/python-bitcoinlib
[bitcoinjs]: https://github.com/bitcoinjs/bitcoinjs-lib
[bcoin]: https://github.com/bcoin-org/bcoin
[blockcypher]: https://www.blockcypher.com/dev/bitcoin/
[blocksci]: https://github.com/citp/BlockSci
[bitcoin-iterate]: https://github.com/rustyrussell/bitcoin-iterate