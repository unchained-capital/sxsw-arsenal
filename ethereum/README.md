# Ethereum!

Honestly, I think understanding Bitcoin makes it harder to understand
Ethereum, so don't be surprised if you're confused by some things here.

## SetUp

1. [Node.js]
2. [Truffle Framework] - truffle and ganache, install truffle globally, it'll
make your life easier
3. [MetaMask] (Chrome, Opera, or Brave browser required)

### Ganache

Ganache is our regtest mode for ethereum, which has some extra great functions
builtin like snapshotting for unit tests. Open it up and check it out.
It generates a random set of wallet words and assigns a bunch of ETH
to a set of balances for you to use.

Aside: If you want a CLI for ganache, check out ganache-cli on npm. This
is really useful for if you want to run solidity tests in your CI.

### MetaMask

When interacting with an Ethereum app, end-users probably won't be running full
nodes, but also need access to lots of information from the blockchain, this
is what ethereum wallets like MetaMask provide. Install the extension,
setup a password, and select 'custom rpc', setting the rpc port to 7545.

**Bug tip:** If you have trouble selecting 'custom rpc' (A recurring bug), you can
use the 'Localhost 8545' option, but then you need to change the port
Ganache is using (under settings) and change the port in `truffle-config.js`
to 8545.

**Another Bug Tip:** When using Ganache, MetaMask can get confused
since you can change the blockchain. If you see an error about an incorrect
nonce, [reset MetaMask] (under 'Settings').


### Truffle

Truffle is a a framework for ethereum app development, and it makes life
MUCH easier. I've included a finished version of their [pet shop tutorial]
to get you started. First, install the project dependencies (from within
this directory):

```
npm install
```

Then run the tests

```
truffle test
```


```
truffle compile
```


### Run the dApp

```
npm run dev
```




## What's next:

1. Install Parity or Geth and run a testnet node


[node.js]: https://nodejs.org/en/
[truffle framework]: https://truffleframework.com/
[metamask]: https://metamask.io/
[pet shop tutorial]: https://truffleframework.com/tutorials/pet-shop
[reset Metamask]: https://stackoverflow.com/questions/45585735/testrpc-ganache-the-tx-doesnt-have-the-correct-nonce