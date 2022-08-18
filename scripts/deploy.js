// scripts/deploy.js
async function main () {
  // We get the contract to deploy
  const Coin = await ethers.getContractFactory('GLDToken');
  console.log('Deploying Coin...');
  const coin = await Coin.deploy(10);
  await coin.deployed();
  console.log('Box deployed to:', coin.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
