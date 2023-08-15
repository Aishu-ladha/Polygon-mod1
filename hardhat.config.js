require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
      },
      {
        version: "0.8.9",
      },
    ],
  },
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: ["5388c6ebb1f3edfec44a4da0807f5c10104cd326d71f649fd15e29e5291fe7d7"], //add your wallet private key here 
    },
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/nyHyzW8RbkwSKnszaYmdcV-UAjmRa9AH',
      accounts: ["5388c6ebb1f3edfec44a4da0807f5c10104cd326d71f649fd15e29e5291fe7d7"], //add your wallet private key here
      gasPrice: 100
    },
  },
};