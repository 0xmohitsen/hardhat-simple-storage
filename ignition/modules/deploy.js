//Imports
const { ethers, run, network } = require("hardhat");
//main function
async function main() {
    const SimpleStorageFactory =
        await ethers.getContractFactory("SimpleStorage");

    console.log("Deploying contract...");

    const simpleStorage = await SimpleStorageFactory.deploy();
    await simpleStorage.waitForDeployment();
    const contractAddress = await simpleStorage.getAddress();

    console.log(`Deployed contract is : ${contractAddress}`);

    if (network.config.chainId == 11155111 && process.env.ETHERSCAN_API_KEY) {
        console.log("Waiting for block confirmations...");
        await simpleStorage.deploymentTransaction().wait(6);
        await verify(contractAddress, []);
    }

    // interact with contract
    const currentValue = await simpleStorage.retrieve();
    console.log(`Current favNum : ${currentValue}`);

    // update the favNum
    const transactionResponse = await simpleStorage.store(15);
    await transactionResponse.wait(1);

    const updatedValue = await simpleStorage.retrieve();
    console.log(`Updated favNum : ${updatedValue}`);
}

async function verify(contractAddress, args) {
    console.log("Verifying the contract...");
    try {
        await run("verify", {
            address: contractAddress,
            contractArguments: args,
        });
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Contract is already verified!");
        } else {
            console.log("Error occurred :", e);
        }
    }
}

//call main function
main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
