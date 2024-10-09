const { task } = require("hardhat/config");

task("block-number", "Prints the current block number").setAction(
    async (taskArgs, hre) => {
        const provider = hre.ethers.provider; // Get the provider instance
        const blockNumber = await provider.getBlockNumber(); // Use the provider to get the block number
        console.log(`Current Block Number: ${blockNumber}`);
    },
);
