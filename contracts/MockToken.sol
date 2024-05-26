// contracts/MyToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

error Error_Enforced(address);

contract MockToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("MockToken", "MTK") {
        _mint(msg.sender, initialSupply);
    }

    function mint(uint256 value) public {
	_mint(msg.sender, value);
    }

    function fail() public {
	revert Error_Enforced(msg.sender);
    }
}
