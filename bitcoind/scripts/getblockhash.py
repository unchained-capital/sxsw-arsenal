import bitcoin
import bitcoin.rpc

block_number = 5

bitcoin.SelectParams('regtest')

# If using docker using the local conf file
#proxy = bitcoin.rpc.Proxy(btc_conf_file="./.bitcoin/bitcoin.conf")

# To let python-bitcoinlib use default conf location
proxy = bitcoin.rpc.Proxy()

blockhash = proxy.getblockhash(block_number).hex()

print(blockhash)
