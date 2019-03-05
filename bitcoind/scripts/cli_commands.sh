bitcoin-cli generate 200
bitcoin-cli getbalance
bitcoin-cli listunspent
address=$(bitcoin-cli getnewaddress)
transactionid=$(bitcoin-cli sendtoaddress $address)
bitcoin-cli listunspent 0
bitcoin-cli generate 1
bitcoin-cli listunspent
bitcoin-cli getrawtransaction $(transactionid)
bitcoin-cli gettransaction $(transactionid)
