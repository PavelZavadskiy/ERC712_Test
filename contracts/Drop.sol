// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol";

contract Drop is EIP712 {
  constructor(string memory name) EIP712(name, "1.0.0") {}
}
