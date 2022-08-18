// hardhat.config.js
require('@nomiclabs/hardhat-ethers');
require("hardhat-gas-reporter");
require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
  gasReporter: {
    currency: 'USD',
    coinmarketcap: process.env.COINMARKETKEY
  }
}

// task("accounts", "Prints the list of accounts", async (taskArgs) => {
//   const accounts = await ethers.getSigners();
//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });
//
// task("balance", "Prints an account's balance")
//   .addParam("account", "The account's address")
//   .setAction(async (taskArgs) => {
//     const balance = await ethers.provider.getBalance(taskArgs.account);
//     console.log(ethers.utils.formatEther(balance), "ETH");
//   });
//
// task("ownerBalance", "Prints owners erc20 balance")
//   .setAction(async (taskArgs, hre) => {
//     const [owner] = await ethers.getSigners()
//     const MyContract = await ethers.getContractFactory("GLDToken")
//     const erc20 = await MyContract.attach("0xe7f1725e7734ce288f8367e1bb143e90bb3f0512") // The deployed contract address);
//     const ownerBalance = await erc20.balanceOf('0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC');
//     // const name = await contract.address()
//     console.log(ownerBalance)
//   });
//   task("trans", "Prints owners erc20 balance")
//     .setAction(async (taskArgs, hre) => {
//       const [owner] = await ethers.getSigners()
//       const MyContract = await ethers.getContractFactory("GLDToken")
//       const erc20 = await MyContract.attach("0xe7f1725e7734ce288f8367e1bb143e90bb3f0512") // The deployed contract address);
//       const ownerBalance = await erc20.transfer('0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC', 3);
//       // const name = await contract.address()
//       console.log(ownerBalance)
//     });
// task(
//   "blockNumber",
//   "Prints the current block number",
//   async (_, { ethers }) => {
//     const test = await ethers.provider.getBlockNumber()
//     console.log(test)
//   }
// );
