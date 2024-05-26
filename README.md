# Ethereum-compatible mock network with predeployed contract

Build docker: docker build -t cryptohog/mocknet:latest .
Run docker: docker run -d -p 8545:8545 --name eth-docker cryptohog/mocknet

 * Endpoint: 8545
 * MockToken address: 0x28A49D544161150d504A55Ec033Ed32D229E0865
 * ABI file: /backend_facing/MockToken.json

