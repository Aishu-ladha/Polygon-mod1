const hre = require("hardhat");
const randomNFTContractJSON = require("../artifacts/contracts/randomp.sol/RandomNFT.json");

const contract_address = "0x00bC5663d9A518750c7D87F0837542D14bBa04Ae"; // Replace with your contract address that you see on mumbai polygon after all token depoite 
const randomNFTABI = randomNFTContractJSON.abi;
const walletAddress = "0xB48c24e5d5697550593b862C666Ae59e5B5671Be"; // Replace with your wallet address

async function main() {
    const randomNFTContract = await hre.ethers.getContractAt(randomNFTABI, contract_address);

    console.log("Your Polygon Address have: " + (await randomNFTContract.balanceOf(walletAddress)).toString() + " tokens");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
