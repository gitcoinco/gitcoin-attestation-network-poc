/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export type AttestationStruct = {
  uid: BytesLike;
  schema: BytesLike;
  time: BigNumberish;
  expirationTime: BigNumberish;
  revocationTime: BigNumberish;
  refUID: BytesLike;
  recipient: AddressLike;
  attester: AddressLike;
  revocable: boolean;
  data: BytesLike;
};

export type AttestationStructOutput = [
  uid: string,
  schema: string,
  time: bigint,
  expirationTime: bigint,
  revocationTime: bigint,
  refUID: string,
  recipient: string,
  attester: string,
  revocable: boolean,
  data: string
] & {
  uid: string;
  schema: string;
  time: bigint;
  expirationTime: bigint;
  revocationTime: bigint;
  refUID: string;
  recipient: string;
  attester: string;
  revocable: boolean;
  data: string;
};

export interface GitcoinGrantsResolverInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DEFAULT_ADMIN_ROLE"
      | "DELEGATORS_MANAGER_ROLE"
      | "NATIVE"
      | "VALID_DELEGATOR_ROLE"
      | "addValidDelegator"
      | "attest"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "isPayable"
      | "multiAttest"
      | "multiRevoke"
      | "removeValidDelegator"
      | "renounceRole"
      | "revoke"
      | "revokeRole"
      | "supportsInterface"
      | "version"
      | "withdraw"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "RoleAdminChanged" | "RoleGranted" | "RoleRevoked"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DELEGATORS_MANAGER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "NATIVE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "VALID_DELEGATOR_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addValidDelegator",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "attest",
    values: [AttestationStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "isPayable", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "multiAttest",
    values: [AttestationStruct[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "multiRevoke",
    values: [AttestationStruct[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "removeValidDelegator",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revoke",
    values: [AttestationStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DELEGATORS_MANAGER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "NATIVE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "VALID_DELEGATOR_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addValidDelegator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "attest", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPayable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "multiAttest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multiRevoke",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeValidDelegator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revoke", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface GitcoinGrantsResolver extends BaseContract {
  connect(runner?: ContractRunner | null): GitcoinGrantsResolver;
  waitForDeployment(): Promise<this>;

  interface: GitcoinGrantsResolverInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  DELEGATORS_MANAGER_ROLE: TypedContractMethod<[], [string], "view">;

  NATIVE: TypedContractMethod<[], [string], "view">;

  VALID_DELEGATOR_ROLE: TypedContractMethod<[], [string], "view">;

  addValidDelegator: TypedContractMethod<
    [delegator: AddressLike],
    [void],
    "nonpayable"
  >;

  attest: TypedContractMethod<
    [attestation: AttestationStruct],
    [boolean],
    "payable"
  >;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  isPayable: TypedContractMethod<[], [boolean], "view">;

  multiAttest: TypedContractMethod<
    [attestations: AttestationStruct[], values: BigNumberish[]],
    [boolean],
    "payable"
  >;

  multiRevoke: TypedContractMethod<
    [attestations: AttestationStruct[], values: BigNumberish[]],
    [boolean],
    "payable"
  >;

  removeValidDelegator: TypedContractMethod<
    [delegator: AddressLike],
    [void],
    "nonpayable"
  >;

  renounceRole: TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;

  revoke: TypedContractMethod<
    [attestation: AttestationStruct],
    [boolean],
    "payable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  version: TypedContractMethod<[], [string], "view">;

  withdraw: TypedContractMethod<
    [_token: AddressLike, _to: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "DELEGATORS_MANAGER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "NATIVE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "VALID_DELEGATOR_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "addValidDelegator"
  ): TypedContractMethod<[delegator: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "attest"
  ): TypedContractMethod<
    [attestation: AttestationStruct],
    [boolean],
    "payable"
  >;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "isPayable"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "multiAttest"
  ): TypedContractMethod<
    [attestations: AttestationStruct[], values: BigNumberish[]],
    [boolean],
    "payable"
  >;
  getFunction(
    nameOrSignature: "multiRevoke"
  ): TypedContractMethod<
    [attestations: AttestationStruct[], values: BigNumberish[]],
    [boolean],
    "payable"
  >;
  getFunction(
    nameOrSignature: "removeValidDelegator"
  ): TypedContractMethod<[delegator: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revoke"
  ): TypedContractMethod<
    [attestation: AttestationStruct],
    [boolean],
    "payable"
  >;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "version"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<
    [_token: AddressLike, _to: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;

  filters: {
    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
  };
}
