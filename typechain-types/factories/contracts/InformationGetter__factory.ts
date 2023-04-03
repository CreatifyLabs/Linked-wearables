/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  InformationGetter,
  InformationGetterInterface,
} from "../../contracts/InformationGetter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_contractAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "getOwnerOfToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contractAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getTokensOfAddress",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061051f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80634a141b291461003b57806358e574c41461006b575b600080fd5b61004e6100493660046103b0565b61008b565b6040516001600160a01b0390911681526020015b60405180910390f35b61007e6100793660046103dc565b610101565b6040516100629190610415565b6040516331a9108f60e11b81526004810182905260009083906001600160a01b03821690636352211e90602401602060405180830381865afa1580156100d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100f99190610459565b949350505050565b606060008390506000816001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610148573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061016c919061047d565b6040516370a0823160e01b81526001600160a01b0386811660048301529192506000918416906370a0823190602401602060405180830381865afa1580156101b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101dc919061047d565b905060008267ffffffffffffffff8111156101f9576101f9610496565b604051908082528060200260200182016040528015610222578160200160208202803683370190505b50905060008267ffffffffffffffff81111561024057610240610496565b604051908082528060200260200182016040528015610269578160200160208202803683370190505b50905060005b8481101561031c576040516331a9108f60e11b8152600481018290526001600160a01b03871690636352211e90602401602060405180830381865afa1580156102bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e09190610459565b8382815181106102f2576102f26104ac565b6001600160a01b039092166020928302919091019091015280610314816104c2565b91505061026f565b5060005b8481101561038c57876001600160a01b0316838281518110610344576103446104ac565b60200260200101516001600160a01b03160361037a578082828151811061036d5761036d6104ac565b6020026020010181815250505b80610384816104c2565b915050610320565b50979650505050505050565b6001600160a01b03811681146103ad57600080fd5b50565b600080604083850312156103c357600080fd5b82356103ce81610398565b946020939093013593505050565b600080604083850312156103ef57600080fd5b82356103fa81610398565b9150602083013561040a81610398565b809150509250929050565b6020808252825182820181905260009190848201906040850190845b8181101561044d57835183529284019291840191600101610431565b50909695505050505050565b60006020828403121561046b57600080fd5b815161047681610398565b9392505050565b60006020828403121561048f57600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6000600182016104e257634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220cf58ba79f969c31103d155294d75b11ae150ab0644c1324a27d359d53c0c071864736f6c63430008110033";

type InformationGetterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InformationGetterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InformationGetter__factory extends ContractFactory {
  constructor(...args: InformationGetterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<InformationGetter> {
    return super.deploy(overrides || {}) as Promise<InformationGetter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): InformationGetter {
    return super.attach(address) as InformationGetter;
  }
  override connect(signer: Signer): InformationGetter__factory {
    return super.connect(signer) as InformationGetter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InformationGetterInterface {
    return new utils.Interface(_abi) as InformationGetterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InformationGetter {
    return new Contract(address, _abi, signerOrProvider) as InformationGetter;
  }
}
