const { expect } = require("chai");
require('@nomiclabs/hardhat-ethers');

describe("allTokens", function () {
  it("Should assign all tokens to Owner when created", async function () {
    const totalSupply = 2345
    const tokenName = 'GoodGuyNoScam'

    const [owner] = await ethers.getSigners()
    const LocalCoin = await ethers.getContractFactory(tokenName);
    const deployedCoin = await LocalCoin.deploy(totalSupply);
    await deployedCoin.deployed();
    const MyContract = await ethers.getContractFactory(tokenName)
    const erc20 = await MyContract.attach(deployedCoin.address)
    const ownerBalance = await erc20.balanceOf(owner.address);

    expect(ownerBalance.value).to.equal(ethers.BigNumber.from(totalSupply).value);
  });
});

describe("eth-gas-reporter workaround", () => {
it("should kill time", (done) => {
  setTimeout(done, 2000);
});
});
