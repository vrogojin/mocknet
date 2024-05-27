# Ethereum-compatible mock network with predeployed contract

 - Build docker: docker build -t cryptohog/mocknet:latest .
 - Run docker: docker run -d -p 8545:8545 --name eth-docker cryptohog/mocknet

 * Endpoint: 8545
 * MockToken address: 0x28A49D544161150d504A55Ec033Ed32D229E0865
 * ABI file: /backend_facing/MockToken.json

Private keys with preset 1000 ETH balance:
 * 0x2e38df7b11890eb23b89e44c4e9fd451bcf6852ae023467034af115b737baec7
 * 0xd1a44e60b0a24bdb0831d46a206276a21df5d20b2db67864b02dbe2e0cc8a1d2
 * 0x3f5ed8d4e075c38e1cf4efb239c833f14eb3ed7d3f97c0f5c1a11cbb56c0b1a9
