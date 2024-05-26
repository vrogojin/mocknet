const { expect } = require("chai");
const { ethers } = require("hardhat");
require("@nomicfoundation/hardhat-chai-matchers");

describe("MockToken", function () {
  let MockToken, mockToken, owner, addr1;

  beforeEach(async function () {
    MockToken = await ethers.getContractFactory("MockToken");
    [owner, addr1, ...addrs] = await ethers.getSigners();
    mockToken = await MockToken.deploy(ethers.parseEther("1000"));
    await mockToken.waitForDeployment();
  });

  describe("Mint", function () {
    it("Should mint tokens to the caller's address", async function () {
      const mintValue = ethers.parseEther("10");

      await mockToken.mint(mintValue);
      const balance = await mockToken.balanceOf(owner.address);

      expect(balance).to.equal(ethers.parseEther("1010"));
    });
  });

  describe("Fail", function () {
    it("Should revert with an enforced error", async function () {
//      await expect(mockToken.fail()).to.be.revertedWith("Error_Enforced");
	await expect(mockToken.fail()).to.be.revertedWithCustomError(
    	    mockToken,
    	    "Error_Enforced"
        ).withArgs(owner.address);
    });
  });
});
