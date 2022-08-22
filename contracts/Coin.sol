// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// import "hardhat/console.sol";

contract GiftBot is ERC20 {
  struct AccountsStruct {
    uint256 timeExpires;
    uint256 balance;
    address returnAddress;
  }
  mapping (address => AccountsStruct) private accounts;

  uint256 private _totalSupply;
  constructor() ERC20("GiftBot", "GBOT") {
    _totalSupply = 0;
  }
  function totalSupply() public override view returns (uint256){
    return _totalSupply;
  }

  function depositxDai(address to, uint256 timeToReedeem) public payable returns (bool) {
    address sender = msg.sender;
    uint256 amount = msg.value;
    _totalSupply = _totalSupply + amount;
    uint256 timeExpires = block.timestamp + timeToReedeem;
    accounts[to] = AccountsStruct (timeExpires, amount, sender);
    return true;
  }
  function balanceOf(address account) public view override returns (uint256) {
      return accounts[account].balance;
  }
  /* function burn(address from, uint256 amount) private {
      // Check that the calling account has the minter role
      _burn(from, amount);
  } */
  /* function transfer(address to, uint256 amount) public override returns (bool){
  address owner = _msgSender();
  _transfer(owner, to, amount);
  return true;
  }
  function transferFrom( address from, address to, uint256 amount) public virtual override returns (bool) {
      address spender = _msgSender();
      _spendAllowance(from, spender, amount);
      _transfer(from, to, amount);
      return true;
  } */


}
