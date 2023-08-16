const hre = require("hardhat");
const randomNFTContractJSON = require("../artifacts/contracts/randomp.sol/RandomNFT.json");

const contract_address = "0x639776715c1fEc88e399A3f5F3e1A143e434edEe"; // Replace with your contract address that you see on mumbai polygon after all token depoite 
const randomNFTABI = randomNFTContractJSON.abi;
const walletAddress = "0x2ae4E9D3a5E8CD009621f0366e8e79D2F6c122Ff"; // Replace with your wallet address

async function main() {
    const randomNFTContract = await hre.ethers.getContractAt(randomNFTABI, contract_address);

    console.log("Your Polygon Address have: " + (await randomNFTContract.balanceOf(walletAddress)).toString() + " tokens");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
