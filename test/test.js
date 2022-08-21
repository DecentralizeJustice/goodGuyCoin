const { expect } = require('chai')
require('@nomiclabs/hardhat-ethers')
const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers')

async function deployContract () {
  const initTotalSupply = 0
  const tokenName = 'GoodGuyNoScam'

  const [owner, otherAccount] = await ethers.getSigners()
  const LocalCoin = await ethers.getContractFactory(tokenName)
  const deployedCoin = await LocalCoin.deploy()
  await deployedCoin.deployed();
  const MyContract = await ethers.getContractFactory(tokenName)
  const contract = await MyContract.attach(deployedCoin.address)
  return { owner, contract, otherAccount, initTotalSupply }
}

describe('Intitial State Checks', function () {
  it('Initial Supply Should Be Zero', async function () {
    const { contract, initTotalSupply } = await loadFixture(deployContract)
    const contractInitialSupply = await contract.totalSupply()
    expect(contractInitialSupply.toNumber()).to.deep.equal(initTotalSupply)
  })
  it('Internal Token Transfer', async function () {
    const sendInt = 13
    const sendAmmount = ethers.utils.parseUnits(sendInt.toString(), "ether")
    const locktime = 215
    const { contract, otherAccount } = await loadFixture(deployContract)
    await contract.depositxDai(otherAccount.address, locktime, { value: sendAmmount })
    const currentTotalSupply = await contract._totalSupply()
    const convertedEthers = ethers.utils.formatEther(currentTotalSupply)
    expect(convertedEthers).to.deep.equal(ethers.utils.formatEther(sendAmmount))
  })
})

// describe("transfer", function () {
//   it("Should assign all tokens to Owner when created", async function () {
//     const { owner, contract, totalSupply } = await loadFixture(deployContract);
//     const ownerBalance = await contract.balanceOf(owner.address);
//
//     expect(ownerBalance.value).to.equal(ethers.BigNumber.from(totalSupply).value);
//   });
//   // it("Should set the right unlockTime", async function () {
//   //   const { lock, unlockTime } = await loadFixture(deployOneYearLockFixture);
//   //
//   //   // assert that the value is correct
//   //   expect(await lock.unlockTime()).to.equal(unlockTime);
//   // });
// });
// describe('eth-gas-reporter workaround', () => {
//   it('should kill time', (done) => {
//     setTimeout(done, 1000);
//   })
// })
