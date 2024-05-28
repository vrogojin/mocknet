// scripts/deploy.js
async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const Token = await ethers.getContractFactory("MockToken");
    const token = await Token.deploy("1000000000000000000000");

    await token.waitForDeployment();

    console.log("Token deployed to:", await token.getAddress());

    const recipient = "0x3b3cfcd94656e1281ffe968e625c5ede66d375c9";

    const tx = await deployer.sendTransaction({
        to: recipient,
        value: ethers.parseEther("100.0"), // 100 ETH
    });

    // Wait for the transaction to be mined
    await tx.wait();
    console.log(`Transferred 100 ETH to ${recipient}. Transaction hash: ${tx.hash}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
