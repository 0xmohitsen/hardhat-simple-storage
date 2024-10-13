const { task } = require("hardhat/config");

task("block-number", "Prints the current block number").setAction(
    async (taskArgs, hre) => {
        const provider = hre.ethers.provider;
        const blockNumber = await provider.getBlockNumber();
        console.log(`Current Block Number: ${blockNumber}`);
    },
);
