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

#### Compilation

The ethereum network runs ethereum bytecode in the ethereum vitual machine (EVM),
but unlike bitcoin, we write ethereum contracts in a higher level language
which is compiled down for us. The contract for this example is in
(contracts/Adoption.sol)[contracts/Adoption.sol]. The language in use here
is [Solidity] ([solidity docs]. Solidity isn't the only language for writing
smart contracts (e.g. [vyper]) but I think it's the most commonly used at this
time.

Take a look at the Adoption smart contract, we'll discuss that a little
before moving on.

Once you're comfortable with the code, compile the contract:

```
truffle compile
```

This creates an artifact in `build/contracts`. Go check it out.
It includes the contract [ABI], the bytecode, and truffle-specific metadata.

#### Testing

Testing is **ESSENTIAL** in blockchain application development.
Once a contract or transaction is on-chain, it can't be changed. There are
some advanced methods of making contract updatable, but you should
be trying your level best to write bug-free code.

Truffle's most important feature (in my humble opinion) is it's testing rig.
Ganache allows you to run tests fast and reset the state of the test blockchain.

The tests are stored in `test`. Go check them out. Test can either
be written in solidity or javascript. 

Then run the tests (make sure Ganache is running first):

```
truffle test
```

#### Migration

Ethereum applications can involve multiple contracts that need to
be aware of each other, even contracts that are created by other contracts.
Truffle provides a migration framework to deploy your contracts for you.
The code for migrations is in `migrations/`, give it a look. Then
deploy the contract on the running Ganache node:

```
truffle migrate
```

The artifact file gets updated with the address of the deployed contract.

**NOTE:** If you restart Ganache, you'll probably need to run this command
before you use the dApp UI again: `truffle migrate --reset`. This forgets
about previous deployments and starts fresh.


### Run the dApp

This example comes with a bare bones web app that you can run with this command:

```
npm run dev
```

be sure to have ganache running, have run the migrations,
and have MetaMask setup. Poke around and see what you can do.


### Improve the Contract

Let's now discuss how this contract and dApp are useless, a nice example of
a simple app, but you'd never want to use this. And let's discuss
ways that this could be improved.

1. No way to 'un-adopt'.
2. The pictures are completely external and have no relationship to anything on-chain
3. Anyone can adopt with no cost besides the network fee
4. Can only ever support 16 dogs.
5. No other information about the dogs.

Let's discuss ways that these issues could be addressed.

## Deployment Options

While it's fine to host your dApp on a server, part of the magic of dApps
is that it can (should?) function without your direct involvement.
As an example, I've included a browserified version of the dApp.
Because the contract address gets hard coded into the bundled js file,
you need to call browserify after calling your migration:

```
truffle migrate
./node_modules/browserify/bin/cmd.js src/js/flatapp.js > src/js/bundled.js
```

the flattened version of the dApp is at `src/flatindex.html`. You *should*
be able to open that file with your browser and interact with the dApp.
MetaMask doesn't work with files, it's restricted to only work over https,
so the app defaults back to Ganache, but if you click 'adopt', you'll see
a transaction go through.

If you were to publish this to github pages, or your own site,
you *should* be able to even use MetaMask.


## Additional Resources

1. [Remix]
1. [The Ethernaut]


## What's next:

1. Install [Parity] or [Geth] and run a testnet node
2. Check out the [ERC20] or [ERC721] specs.
2. [IPFS]
3. Try testing my [multisig dApp]
4. Try my [ecrecover demos]

If you have an O'Reilly Safari subscription, check out my [upcoming online class]


[node.js]: https://nodejs.org/en/
[truffle framework]: https://truffleframework.com/
[metamask]: https://metamask.io/
[pet shop tutorial]: https://truffleframework.com/tutorials/pet-shop
[reset Metamask]: https://stackoverflow.com/questions/45585735/testrpc-ganache-the-tx-doesnt-have-the-correct-nonce
[solidity]: https://github.com/ethereum/solidity
[solidity docs]: https://solidity.readthedocs.io/en/v0.5.5/
[vyper]: https://github.com/ethereum/vyper
[abi]: https://solidity.readthedocs.io/en/develop/abi-spec.html
[remix]: https://remix.ethereum.org
[multisig dapp]: https://github.com/unchained-capital/ethereum-multisig
[ecrecover demos]: https://github.com/destrys/ecrecover-demo
[ipfs]: https://ipfs.io/
[parity]: https://www.parity.io/ethereum/
[geth]: https://github.com/ethereum/go-ethereum
[erc20]: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md
[erc721]: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md
[upcoming online class]: https://learning.oreilly.com/live-training/courses/an-introduction-to-ethereum-dapps/0636920254539/
[the ethernaut]: https://ethernaut.zeppelin.solutions/