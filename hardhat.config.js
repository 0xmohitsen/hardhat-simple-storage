require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");
require("./tasks/block-number");
require("hardhat-gas-reporter");
require("solidity-coverage");

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "https://eth-sepolia";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xkey";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "0xkey";
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "0xkey";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 11155111,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            // hardhat automatically add the accounts here
            chainId: 31337,
        },
    },
    solidity: "0.8.27",
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    sourcify: {
        enabled: true,
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        currency: "USD",
        noColors: true,
        coinmarketcap: COINMARKETCAP_API_KEY,
        // offline: true,
        // token: "MATIC",
    },
};
