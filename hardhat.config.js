//require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");


module.exports = {
    solidity: "0.8.20",
    networks: {
        hardhat: {
            accounts: [
                {
                    privateKey: "0x2e38df7b11890eb23b89e44c4e9fd451bcf6852ae023467034af115b737baec7",
                    balance: "1000000000000000000000" // 1000 ETH
                },
                {
                    privateKey: "0xd1a44e60b0a24bdb0831d46a206276a21df5d20b2db67864b02dbe2e0cc8a1d2",
                    balance: "1000000000000000000000" // 1000 ETH
                },
                {
                    privateKey: "0x3f5ed8d4e075c38e1cf4efb239c833f14eb3ed7d3f97c0f5c1a11cbb56c0b1a9",
                    balance: "1000000000000000000000" // 1000 ETH
                }
            ]
        }
    }
};
