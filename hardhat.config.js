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
      accounts: ["3bd44fd997b88058f3c48a36bed802771c980a3f3b8d297c9ec4bc0dfd6229fa"], //add your wallet private key here 
    },
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/nyHyzW8RbkwSKnszaYmdcV-UAjmRa9AH',
      accounts: ["3bd44fd997b88058f3c48a36bed802771c980a3f3b8d297c9ec4bc0dfd6229fa"], //add your wallet private key here
      gasPrice: 100
    },
  },
};