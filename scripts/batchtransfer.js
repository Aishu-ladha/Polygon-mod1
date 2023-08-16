const hre = require("hardhat");
const randomNFTJSON = require("../artifacts/contracts/randomp.sol/RandomNFT.json");

const contract_address ='0x6F8eC97D8e76d8e2b061a4711E54d3CBe6813ADC'; // Replace with your contract address
const randomNFTABI = randomNFTJSON.abi;
const walletAddress = "0x2ae4E9D3a5E8CD009621f0366e8e79D2F6c122Ff"; // Replace with your wallet address

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
