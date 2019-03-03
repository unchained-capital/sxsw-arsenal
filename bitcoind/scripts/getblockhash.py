import bitcoin
import bitcoin.rpc

block_number = 5

conf_file = "./.bitcoin/bitcoin.conf"

bitcoin.SelectParams('regtest')

proxy = bitcoin.rpc.Proxy(btc_conf_file=conf_file)

blockhash = proxy.getblockhash(block_number)

print(blockhash)
