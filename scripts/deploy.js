const hre = require("hardhat");


async function main() {
  const randomp = await hre.ethers.deployContract("RandomNFT");

  await randomp.waitForDeployment();

  const targetAddress = randomp.target;
  console.log(`Deployed to ${targetAddress}`);

  // Write the targetAddress to .env file
 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
