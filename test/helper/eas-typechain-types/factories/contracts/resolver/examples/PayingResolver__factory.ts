/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  PayingResolver,
  PayingResolverInterface,
} from "../../../../contracts/resolver/examples/PayingResolver";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEAS",
        name: "eas",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "incentive",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessDenied",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AddressInsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientValue",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidEAS",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidLength",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidValue",
    type: "error",
  },
  {
    inputs: [],
    name: "NotPayable",
    type: "error",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "uid",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "schema",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "time",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "expirationTime",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "revocationTime",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "refUID",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "address",
            name: "attester",
            type: "address",
          },
          {
            internalType: "bool",
            name: "revocable",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Attestation",
        name: "attestation",
        type: "tuple",
      },
    ],
    name: "attest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "isPayable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "uid",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "schema",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "time",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "expirationTime",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "revocationTime",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "refUID",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "address",
            name: "attester",
            type: "address",
          },
          {
            internalType: "bool",
            name: "revocable",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Attestation[]",
        name: "attestations",
        type: "tuple[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "multiAttest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "uid",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "schema",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "time",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "expirationTime",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "revocationTime",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "refUID",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "address",
            name: "attester",
            type: "address",
          },
          {
            internalType: "bool",
            name: "revocable",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Attestation[]",
        name: "attestations",
        type: "tuple[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "multiRevoke",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "uid",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "schema",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "time",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "expirationTime",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "revocationTime",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "refUID",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "address",
            name: "attester",
            type: "address",
          },
          {
            internalType: "bool",
            name: "revocable",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Attestation",
        name: "attestation",
        type: "tuple",
      },
    ],
    name: "revoke",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x61012060405234801561001157600080fd5b50604051610c45380380610c458339810160408190526100309161007d565b6001608052600360a052600060c052816001600160a01b038116610067576040516341bc07ff60e11b815260040160405180910390fd5b6001600160a01b031660e05261010052506100b7565b6000806040838503121561009057600080fd5b82516001600160a01b03811681146100a757600080fd5b6020939093015192949293505050565b60805160a05160c05160e05161010051610b3561011060003960008181610506015281816105360152818161056401526105fb015260006104a90152600061016901526000610140015260006101170152610b356000f3fe6080604052600436106100695760003560e01c8063ce46e04611610043578063ce46e046146100d6578063e49617e1146100ea578063e60c3505146100fd57600080fd5b806354fd4d501461007557806388e5b2d9146100a057806391db0b7e146100c357600080fd5b3661007057005b600080fd5b34801561008157600080fd5b5061008a610110565b6040516100979190610834565b60405180910390f35b6100b36100ae3660046108d1565b6101b3565b6040519015158152602001610097565b6100b36100d13660046108d1565b6102b4565b3480156100e257600080fd5b5060016100b3565b6100b36100f8366004610942565b6103a5565b6100b361010b366004610942565b6103bf565b606061013b7f00000000000000000000000000000000000000000000000000000000000000006103d3565b6101647f00000000000000000000000000000000000000000000000000000000000000006103d3565b61018d7f00000000000000000000000000000000000000000000000000000000000000006103d3565b60405160200161019f93929190610985565b604051602081830303815290604052905090565b60006101bd610491565b838281146101f7576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3460005b828110156102a457600086868381811061021757610217610a1c565b9050602002013590508281111561025a576040517f1101129400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61028789898481811061026f5761026f610a1c565b90506020028101906102819190610a4b565b82610502565b6102985760009450505050506102ac565b909103906001016101fb565b506001925050505b949350505050565b60006102be610491565b838281146102f8576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3460005b828110156102a457600086868381811061031857610318610a1c565b9050602002013590508281111561035b576040517f1101129400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61038889898481811061037057610370610a1c565b90506020028101906103829190610a4b565b826105bf565b6103995760009450505050506102ac565b909103906001016102fc565b60006103af610491565b6103b98234610502565b92915050565b60006103c9610491565b6103b982346105bf565b606060006103e08361064f565b600101905060008167ffffffffffffffff81111561040057610400610a89565b6040519080825280601f01601f19166020018201604052801561042a576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a850494508461043457509392505050565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610500576040517f4ca8886700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60007f0000000000000000000000000000000000000000000000000000000000000000821015610534575060006103b9565b7f00000000000000000000000000000000000000000000000000000000000000008211156105b6576105b66105897f000000000000000000000000000000000000000000000000000000000000000084610ab8565b61059a610100860160e08701610af2565b73ffffffffffffffffffffffffffffffffffffffff1690610731565b50600192915050565b600081156105cf575060006103b9565b6105e0610100840160e08501610af2565b73ffffffffffffffffffffffffffffffffffffffff166108fc7f00000000000000000000000000000000000000000000000000000000000000009081150290604051600060405180830381858888f19350505050158015610645573d6000803e3d6000fd5b5060019392505050565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310610698577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef810000000083106106c4576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106106e257662386f26fc10000830492506010015b6305f5e10083106106fa576305f5e100830492506008015b612710831061070e57612710830492506004015b60648310610720576064830492506002015b600a83106103b95760010192915050565b80471015610771576040517fcd78605900000000000000000000000000000000000000000000000000000000815230600482015260240160405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146107cb576040519150601f19603f3d011682016040523d82523d6000602084013e6107d0565b606091505b505090508061080b576040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050565b60005b8381101561082b578181015183820152602001610813565b50506000910152565b6020815260008251806020840152610853816040850160208701610810565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60008083601f84011261089757600080fd5b50813567ffffffffffffffff8111156108af57600080fd5b6020830191508360208260051b85010111156108ca57600080fd5b9250929050565b600080600080604085870312156108e757600080fd5b843567ffffffffffffffff8111156108fe57600080fd5b61090a87828801610885565b909550935050602085013567ffffffffffffffff81111561092a57600080fd5b61093687828801610885565b95989497509550505050565b60006020828403121561095457600080fd5b813567ffffffffffffffff81111561096b57600080fd5b8201610140818503121561097e57600080fd5b9392505050565b60008451610997818460208901610810565b7f2e0000000000000000000000000000000000000000000000000000000000000090830190815284516109d1816001840160208901610810565b7f2e00000000000000000000000000000000000000000000000000000000000000600192909101918201528351610a0f816002840160208801610810565b0160020195945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec1833603018112610a7f57600080fd5b9190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b818103818111156103b9577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060208284031215610b0457600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461097e57600080fdfea164736f6c634300081b000a";

type PayingResolverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PayingResolverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PayingResolver__factory extends ContractFactory {
  constructor(...args: PayingResolverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    eas: AddressLike,
    incentive: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(eas, incentive, overrides || {});
  }
  override deploy(
    eas: AddressLike,
    incentive: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(eas, incentive, overrides || {}) as Promise<
      PayingResolver & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PayingResolver__factory {
    return super.connect(runner) as PayingResolver__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PayingResolverInterface {
    return new Interface(_abi) as PayingResolverInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): PayingResolver {
    return new Contract(address, _abi, runner) as unknown as PayingResolver;
  }
}
