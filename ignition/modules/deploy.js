//Imports
const { ethers } = require("hardhat");
//main function
async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    );

    console.log("Deploying contract...");

    const simpleStorage = await SimpleStorageFactory.deploy();
    await simpleStorage.waitForDeployment();
    const contractAddress = await simpleStorage.getAddress();

    console.log(`Deployed contract is : ${contractAddress}`);
}

//call main function
main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
