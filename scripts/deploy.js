// scripts/deploy.js
require('@nomiclabs/hardhat-ethers')
async function main () {
  // We get the contract to deploy
  const Coin = await ethers.getContractFactory('GoodGuyNoScam');
  console.log('Deploying Coin...');
  const coin = await Coin.deploy(10);
  const deployedCoin = await coin.deployed()
  const contract = await Coin.attach(deployedCoin.address)
  const test = await contract.totalSupply()
  console.log(test)
  console.log('Box deployed to:', coin.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
