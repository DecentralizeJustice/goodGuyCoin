// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// import "hardhat/console.sol";

contract GoodGuyNoScam is ERC20 {
  struct AccountsStruct {
    uint256 spendByTime;
    uint256 balance;
    address returnAddress;
  }

  mapping (address => AccountsStruct) public accounts;

  uint256 public _totalSupply;
  constructor() ERC20("GoodGuyNoScam", "GGNS") {
    _totalSupply = 0;
  }

  function depositxDai(address to, uint256 spendByTime) public payable returns (bool) {
    address sender = msg.sender;
    uint256 amount = msg.value;
    _totalSupply = _totalSupply + amount;
    accounts[to] = AccountsStruct (spendByTime, amount, sender);
    return true;
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
