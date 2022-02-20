import { ethers } from "hardhat";

async function main() {
  const factory = await ethers.getContractFactory("Drop");
  const contract = await factory.deploy("drop");
  console.info("Drop addr:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
