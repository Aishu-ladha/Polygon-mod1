const hre = require("hardhat");
const randomNFTContractJSON = require("../artifacts/contracts/randomp.sol/RandomNFT.json");

const contract_address ="0x5C383C8c7AF37Af03e9547021CAB987E51d117A3"; //put your contract address here
const randomNFTABI = randomNFTContractJSON.abi;
const walletAddress = "0xB48c24e5d5697550593b862C666Ae59e5B5671Be"; // Replace with your wallet address

async function main() {
    const randomNFTContract = await ethers.getContractAt(randomNFTABI, contract_address);
    
    
    for (let i = 0; i < 5; i++) {
        try {
            const tx = await randomNFTContract.mintRandomToken(walletAddress);
            await tx.wait();

            
            
        } catch (error) {
            console.error(" minting token error :", error.message);
        }
    }

    
    console.log("You now have : " + (await randomNFTContract.balanceOf(walletAddress)).toString() + " Ethereum Token");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
