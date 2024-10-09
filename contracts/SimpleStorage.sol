// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract SimpleStorage {
    uint256 favNum;

    struct People {
        uint256 favNum;
        string name;
    }

    People[] public people;

    mapping(string => uint256) public nameToAccount;

    function store(uint256 _favNum) public {
        favNum = _favNum;
    }

    function addPeople(string memory _name, uint256 _favNum) public {
        people.push(People(_favNum, _name));
        nameToAccount[_name] =_favNum;
    }

    function retrieve() public view returns (uint256) {
        return favNum;
    }
}