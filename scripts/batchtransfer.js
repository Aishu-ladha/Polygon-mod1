const hre = require("hardhat");
const randomNFTJSON = require("../artifacts/contracts/randomp.sol/RandomNFT.json");

const contract_address ='0x5C383C8c7AF37Af03e9547021CAB987E51d117A3'; // Replace with your contract address
const randomNFTABI = randomNFTJSON.abi;
const walletAddress = "0xB48c24e5d5697550593b862C666Ae59e5B5671Be"; // Replace with your wallet address

const fxRootContractABI = require("../fxRootcontract.json");
const fxERC21RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de"; // Replace with the actual fxERC21Root contract address

async function main() {
    const randomNFTContract = await hre.ethers.getContractAt(randomNFTABI, contract_address);

    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC21RootAddress);

    const approveTx = await randomNFTContract.setApprovalForAll(fxERC21RootAddress, true);
    await approveTx.wait();

    console.log("Approval confirmed wait for token deposite");
    
    for (let i = 1; i < 6; i++) {
        const depositTx = await fxContract.deposit(contract_address, walletAddress, i, '0x6566');
        await depositTx.wait();
        console.log(`Token ${i} deposited please wait untill all the token is depositing`);
    }
    
    console.log("Your 5 Tokens deposited successfully to your Polygon address");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
