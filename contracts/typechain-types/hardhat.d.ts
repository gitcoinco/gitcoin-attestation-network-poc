/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IEAS",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IEAS__factory>;
    getContractFactory(
      name: "ISchemaRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISchemaRegistry__factory>;
    getContractFactory(
      name: "ISemver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISemver__factory>;
    getContractFactory(
      name: "ISchemaResolver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISchemaResolver__factory>;
    getContractFactory(
      name: "SchemaResolver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SchemaResolver__factory>;
    getContractFactory(
      name: "Semver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Semver__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Math",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Math__factory>;
    getContractFactory(
      name: "Strings",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Strings__factory>;
    getContractFactory(
      name: "GitcoinGrantsResolver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GitcoinGrantsResolver__factory>;

    getContractAt(
      name: "IEAS",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IEAS>;
    getContractAt(
      name: "ISchemaRegistry",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ISchemaRegistry>;
    getContractAt(
      name: "ISemver",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ISemver>;
    getContractAt(
      name: "ISchemaResolver",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ISchemaResolver>;
    getContractAt(
      name: "SchemaResolver",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.SchemaResolver>;
    getContractAt(
      name: "Semver",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Semver>;
    getContractAt(
      name: "Ownable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Math",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Math>;
    getContractAt(
      name: "Strings",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Strings>;
    getContractAt(
      name: "GitcoinGrantsResolver",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.GitcoinGrantsResolver>;

    deployContract(
      name: "IEAS",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IEAS>;
    deployContract(
      name: "ISchemaRegistry",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ISchemaRegistry>;
    deployContract(
      name: "ISemver",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ISemver>;
    deployContract(
      name: "ISchemaResolver",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ISchemaResolver>;
    deployContract(
      name: "SchemaResolver",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SchemaResolver>;
    deployContract(
      name: "Semver",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Semver>;
    deployContract(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Ownable>;
    deployContract(
      name: "Math",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Math>;
    deployContract(
      name: "Strings",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Strings>;
    deployContract(
      name: "GitcoinGrantsResolver",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.GitcoinGrantsResolver>;

    deployContract(
      name: "IEAS",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IEAS>;
    deployContract(
      name: "ISchemaRegistry",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ISchemaRegistry>;
    deployContract(
      name: "ISemver",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ISemver>;
    deployContract(
      name: "ISchemaResolver",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ISchemaResolver>;
    deployContract(
      name: "SchemaResolver",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SchemaResolver>;
    deployContract(
      name: "Semver",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Semver>;
    deployContract(
      name: "Ownable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Ownable>;
    deployContract(
      name: "Math",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Math>;
    deployContract(
      name: "Strings",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Strings>;
    deployContract(
      name: "GitcoinGrantsResolver",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.GitcoinGrantsResolver>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
