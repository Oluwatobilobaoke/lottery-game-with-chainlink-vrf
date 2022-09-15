//  https://docs.chain.link/docs/vrf/v2/supported-networks/#polygon-matic-mumbai-testnet

const { ethers, BigNumber } = require("hardhat");

const LINK_TOKEN = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB";
// // const VRF_COORDINATOR = "0x8C7382F9D8f56b33781fE506E897a4F1e2d17255";
// const KEY_HASH =
//   "0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4";
const VRF_COORDINATOR = "0x7a1BaC17Ccc5b313516C5E16fb24f7659aA5ebed";
const KEY_HASH =
  "0x4b09e658ed251bcafeebbc69400383d49f344ace09b9576fe248bb02c003fe9f";
const FEE = ethers.utils.parseEther("0.0005");
module.exports = { LINK_TOKEN, VRF_COORDINATOR, KEY_HASH, FEE };