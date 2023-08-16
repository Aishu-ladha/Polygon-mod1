const hre = require("hardhat");
const randomNFTContractJSON = require("../artifacts/contracts/randomp.sol/RandomNFT.json");

const contract_address ="0x6F8eC97D8e76d8e2b061a4711E54d3CBe6813ADC"; //put your contract address here
const randomNFTABI = randomNFTContractJSON.abi;
const walletAddress = "0x2ae4E9D3a5E8CD009621f0366e8e79D2F6c122Ff"; // Replace with your wallet address

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
