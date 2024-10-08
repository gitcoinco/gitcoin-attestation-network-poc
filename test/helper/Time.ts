import { ethers } from "hardhat";

const seconds = (val: bigint) => val;
const minutes = (val: bigint) => val * seconds(60n);
const hours = (val: bigint) => val * minutes(60n);
const days = (val: bigint) => val * hours(24n);
const weeks = (val: bigint) => val * days(7n);
const years = (val: bigint) => val * days(365n);

export const duration = { seconds, minutes, hours, days, weeks, years };

export const latest = async (): Promise<bigint> => {
  const block = await ethers.provider.getBlock("latest");
  if (!block) {
    throw new Error("Unable to get the latest block");
  }

  return BigInt(block.timestamp);
};
