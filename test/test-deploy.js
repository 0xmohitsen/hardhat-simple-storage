const { ethers } = require("hardhat");
const { assert, expect } = require("chai");

describe("SimpleStorage", function () {
    let SimpleStorage, simpleStorage;
    beforeEach(async function () {
        SimpleStorage = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await SimpleStorage.deploy();
    });

    it("Should start with a Fav Number of 0", async function () {
        const currentValue = await simpleStorage.retrieve();
        const expectedValue = "0";

        //assert, expect
        assert.equal(currentValue.toString(), expectedValue);
    });

    it("Should update the value when we call store", async function () {
        const expectedValue = "10";

        const transactionResponse = await simpleStorage.store(expectedValue);
        await transactionResponse.wait(1);

        const currentValue = await simpleStorage.retrieve();

        assert.equal(currentValue.toString(), expectedValue);
    });
});
