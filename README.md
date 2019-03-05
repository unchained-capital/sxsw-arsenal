# sxsw-arsenal

Supporting materials for "The Arsenal of a Blockchain Developer"
SXSW 2019 Workshop

These instructions should work for mac and linux laptops. Windows users
may need some additional steps.

Schedule:

1. 1hr bitcoin
2. 1hr ethereum
3. 1hr questions and breakouts


**WORK IN PROGRESS**

# Run a bitcoin node!

**Disclaimer:** I'm not covering SegWit or Lighting in this workshop.
You should definitely learn about both, but I think it's important to
understand the basics first.

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
After booting up bitcoind or bitcoin-qt, you should see a `regtest`
directory in the datadir. If you started in testnet mode, you'd see a
`testnet3` directory.


## bitcoind interfaces

Bitcoind has 3 interfaces:

1. The CLI (not available with bitcoin-qt)
2. JSON-RPC
3. REST (usually turned off)

### The CLI or console

**For the rest of this README, I will use `bitcoin-cli` as the command to
interact with `bitcoind`, use the correct command for your platform.**

Enter `bitcoin-cli help` to see the many
commands that bitcoind accepts. These are the same command accepted by the
JSON-RPC interface. While you can look at websites for a list of the
[rpc commands], it's best to go directly to bitcoind, this way you know you're
up to date.

For detailed info, give help the command you're interest in,
i.e. `bitcoin-cli help generate`. Do that one now since that's
what we're doing next.

### Setup

In regtest mode, we can create blocks as fast as we want, this is great
for testing since bitcoin blocks are mined on average once per 10 minutes,
even on testnet. Go ahead and execute this command:

```
bitcoin-cli generate 200
```

The output on the command line will be 200 block IDs, and if you
look at the bitcoind log, you'll see a bunch of `AddToWallet` and `UpdateTip`
log messages. Now that we have some blocks, let's see how much money we have

```
bitcoin-cli getbalance
```

You **should** see a bunch of BTC. That's becasue you've been awarded the
block reward for all those blocks you just created. Woot!
To see each individual 'recieved' transaction use this command:

```
bitcoin-cli listunspent
```

This displays all the unspent transaction outputs (UTXOs) that the bitcoin
wallet is aware of. Let's clean this up a bit by sweeping a bunch of those
UTXOs into one new address (and author our first real transaction). First we
need an address from our wallet:

```
bitcoin-cli getnewaddress
```

This returns an new address for your wallet, copy it into the next command
```
bitcoin-cli sendtoaddress $(ADDRESS) 4999
```

This returns a transaction id (copy that somewhere) and the bitcoind
log will have a ton of
`CTxIn` and `CScriptWitness` calls. The transaction we just created is a beast
with 100 inputs, one for each of the first 100 block rewards. Why didn't we
use the reward from all 200 blocks we created? Because rewards are 'immature'
for the first 100 blocks after mining, meaning you can't spend them. Just
another little gotcha to be aware of.

Now let's look at our cleaned up list of UTXOs:

```
bitcoin-cli listunspent
```

but wait, where is all our precious fake BTC? Don't worry, the transaction
just hasn't been included in a block yet. If we were using testnet or mainnet,
we'd now get to go get coffee and wait 10ish minutes. Since we're using regtest,
we can just `generate` to confirm the transaction, but before you do, check
out the help for `listunspent`. Look for `minconf`. Our transaction
has zero confirmations (blocks since it was confirmed on-chain), so try
setting `minconf` to `0` and see what you get. After you understand
what you're seeing there (why are there two UTXOs?), go ahead and
get that on-chain:

```
bitcoin-cli generate 1
```

listing your unspents should show 3 UTXOs now, 2 from the transaction, one
from a block reward maturing. Let's look at some transactions now.
Copy the `txid` from our transaction (notice two of the UTXOs have the same
txid) and let's look at that transtion:

```
bitcoin-cli getrawtransaction $(TXID)
```

hopefully you can read hex and know bitcoin's [serialization] format so you
can read that... ha. (but really, do this long enough and you'll be able to
pull a decent amount of information out of that mess).
Look at your unspents again and grab the `txid` for the block reward UTXO,
it should have an amount of `50`. `getrawtransaction` for that `txid`, it
will be much shorter.

*Here's a take-away for this section*: bitcoin 'application development'
is all about
creating and parsing transactions. Those hex strings. Whether you're using a
hardware wallet, a python library, or bitcoind, you will be either
creating transactions, parsing transactions, or probably both. Get comfortable
with transactions ASAP.

Now that I may have scared you, let's look at what's in a transaction.

```
bitcoin-cli getrawtransaction $(TXID) true
```

setting `verbose` to true instructs bitcoind to parse that hex for us.
(also check out `decoderawtransaction`, you can feed any transaction to
be parsed, even something from mainnet. [blockcypher example])
Here you'll see all the good stuff:

1. Transaction inputs: `txid`, `vout` and `scriptSig`. The first two are
specify the UTXO being spent, while the `scriptSig` is the 'unlocking' data
that that authorizes the spend.

2. Transaction outputs: `value`, `n`, `scriptPubKey`. `n` and the transaction id
are what is used to specify this output, and `value` is how much BTC is locked
by the `scriptPubKey`.

Take a close look at `scriptPubKey`, since this is the 'encumbering script',
or what bitcoin has for 'smart contracts'. This is the **code** that locks
the bitcoin in the UTXO. The `scriptSig` in the spending transaction
has to combine with the `scriptPubKey` to evaluate to `true`.

For our transaction, we should see `OP_HASH160 hexbytes OP_EQUAL`. This
is a [P2PKH] standarad transaction. Go to that link and look at the table
to see how a P2PKH transaction is spent.

Aside: a bitcoin address is the [base58check]
encoding of the `hexbytes` used in the `scriptPubKey`.



*Here's another take-away*: The blockchain is the source of **truth**.
`Bitcoind` is you most trusted interface to the blockchain. As a bitcoin
blockchain developer, you should have `bitcoind` nearby. Don't rely
completely on block explorers or services.





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
[rpc commands]: https://en.bitcoin.it/wiki/Original_Bitcoin_client/API_calls_list
[serialization]: https://bitcoin.org/en/developer-reference#raw-transaction-format
[blockcypher example]: https://api.blockcypher.com/v1/btc/main/txs/f854aebae95150b379cc1187d848d58225f3c4157fe992bcd166f58bd5063449?includeHex=true
[p2pkh]: https://en.bitcoinwiki.org/wiki/Pay-to-Pubkey_Hash