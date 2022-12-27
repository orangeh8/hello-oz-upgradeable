// scripts/upgrade_box.js
const { ethers, upgrades } = require("hardhat");

const PROXY = "0x41db53938a590deB64Ce0105390A7C16757583f0";

async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Upgrading Box...");
    await upgrades.upgradeProxy(PROXY, BoxV2);
    console.log("Box upgraded");
}

main();
