"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC721A__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "name_",
                type: "string",
            },
            {
                internalType: "string",
                name: "symbol_",
                type: "string",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "ApprovalCallerNotOwnerNorApproved",
        type: "error",
    },
    {
        inputs: [],
        name: "ApprovalQueryForNonexistentToken",
        type: "error",
    },
    {
        inputs: [],
        name: "BalanceQueryForZeroAddress",
        type: "error",
    },
    {
        inputs: [],
        name: "MintERC2309QuantityExceedsLimit",
        type: "error",
    },
    {
        inputs: [],
        name: "MintToZeroAddress",
        type: "error",
    },
    {
        inputs: [],
        name: "MintZeroQuantity",
        type: "error",
    },
    {
        inputs: [],
        name: "OwnerQueryForNonexistentToken",
        type: "error",
    },
    {
        inputs: [],
        name: "OwnershipNotInitializedForExtraData",
        type: "error",
    },
    {
        inputs: [],
        name: "TransferCallerNotOwnerNorApproved",
        type: "error",
    },
    {
        inputs: [],
        name: "TransferFromIncorrectOwner",
        type: "error",
    },
    {
        inputs: [],
        name: "TransferToNonERC721ReceiverImplementer",
        type: "error",
    },
    {
        inputs: [],
        name: "TransferToZeroAddress",
        type: "error",
    },
    {
        inputs: [],
        name: "URIQueryForNonexistentToken",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "fromTokenId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "toTokenId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
        ],
        name: "ConsecutiveTransfer",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getApproved",
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
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
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
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ownerOf",
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
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
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
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "tokenURI",
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
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b506040516200104e3803806200104e833981016040819052620000349162000123565b60026200004283826200021c565b5060036200005182826200021c565b50506000805550620002e8565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200008657600080fd5b81516001600160401b0380821115620000a357620000a36200005e565b604051601f8301601f19908116603f01168101908282118183101715620000ce57620000ce6200005e565b81604052838152602092508683858801011115620000eb57600080fd5b600091505b838210156200010f5785820183015181830184015290820190620000f0565b600093810190920192909252949350505050565b600080604083850312156200013757600080fd5b82516001600160401b03808211156200014f57600080fd5b6200015d8683870162000074565b935060208501519150808211156200017457600080fd5b50620001838582860162000074565b9150509250929050565b600181811c90821680620001a257607f821691505b602082108103620001c357634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200021757600081815260208120601f850160051c81016020861015620001f25750805b601f850160051c820191505b818110156200021357828155600101620001fe565b5050505b505050565b81516001600160401b038111156200023857620002386200005e565b62000250816200024984546200018d565b84620001c9565b602080601f8311600181146200028857600084156200026f5750858301515b600019600386901b1c1916600185901b17855562000213565b600085815260208120601f198616915b82811015620002b95788860151825594840194600190910190840162000298565b5085821015620002d85787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610d5680620002f86000396000f3fe6080604052600436106100dd5760003560e01c80636352211e1161007f578063a22cb46511610059578063a22cb46514610224578063b88d4fde14610244578063c87b56dd14610257578063e985e9c51461027757600080fd5b80636352211e146101cf57806370a08231146101ef57806395d89b411461020f57600080fd5b8063095ea7b3116100bb578063095ea7b31461017157806318160ddd1461018657806323b872dd146101a957806342842e0e146101bc57600080fd5b806301ffc9a7146100e257806306fdde0314610117578063081812fc14610139575b600080fd5b3480156100ee57600080fd5b506101026100fd3660046109c6565b6102c0565b60405190151581526020015b60405180910390f35b34801561012357600080fd5b5061012c610312565b60405161010e9190610a33565b34801561014557600080fd5b50610159610154366004610a46565b6103a4565b6040516001600160a01b03909116815260200161010e565b61018461017f366004610a7b565b6103e8565b005b34801561019257600080fd5b50600154600054035b60405190815260200161010e565b6101846101b7366004610aa5565b610488565b6101846101ca366004610aa5565b610620565b3480156101db57600080fd5b506101596101ea366004610a46565b610640565b3480156101fb57600080fd5b5061019b61020a366004610ae1565b61064b565b34801561021b57600080fd5b5061012c61069a565b34801561023057600080fd5b5061018461023f366004610afc565b6106a9565b610184610252366004610b4e565b610715565b34801561026357600080fd5b5061012c610272366004610a46565b61075f565b34801561028357600080fd5b50610102610292366004610c2a565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b60006301ffc9a760e01b6001600160e01b0319831614806102f157506380ac58cd60e01b6001600160e01b03198316145b8061030c5750635b5e139f60e01b6001600160e01b03198316145b92915050565b60606002805461032190610c5d565b80601f016020809104026020016040519081016040528092919081815260200182805461034d90610c5d565b801561039a5780601f1061036f5761010080835404028352916020019161039a565b820191906000526020600020905b81548152906001019060200180831161037d57829003601f168201915b5050505050905090565b60006103af826107f0565b6103cc576040516333d1c03960e21b815260040160405180910390fd5b506000908152600660205260409020546001600160a01b031690565b60006103f382610640565b9050336001600160a01b0382161461042c5761040f8133610292565b61042c576040516367d9dca160e11b815260040160405180910390fd5b60008281526006602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b600061049382610817565b9050836001600160a01b0316816001600160a01b0316146104c65760405162a1148160e81b815260040160405180910390fd5b60008281526006602052604090208054338082146001600160a01b03881690911417610513576104f68633610292565b61051357604051632ce44b5f60e11b815260040160405180910390fd5b6001600160a01b03851661053a57604051633a954ecd60e21b815260040160405180910390fd5b801561054557600082555b6001600160a01b038681166000908152600560205260408082208054600019019055918716808252919020805460010190554260a01b17600160e11b17600085815260046020526040812091909155600160e11b841690036105d7576001840160008181526004602052604081205490036105d55760005481146105d55760008181526004602052604090208490555b505b83856001600160a01b0316876001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050505050565b61063b83838360405180602001604052806000815250610715565b505050565b600061030c82610817565b60006001600160a01b038216610674576040516323d3ad8160e21b815260040160405180910390fd5b506001600160a01b031660009081526005602052604090205467ffffffffffffffff1690565b60606003805461032190610c5d565b3360008181526007602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610720848484610488565b6001600160a01b0383163b156107595761073c8484848461087e565b610759576040516368d2bf6b60e11b815260040160405180910390fd5b50505050565b606061076a826107f0565b61078757604051630a14c4b560e41b815260040160405180910390fd5b600061079e60408051602081019091526000815290565b905080516000036107be57604051806020016040528060008152506107e9565b806107c884610969565b6040516020016107d9929190610c97565b6040516020818303038152906040525b9392505050565b600080548210801561030c575050600090815260046020526040902054600160e01b161590565b6000816000548110156108655760008181526004602052604081205490600160e01b82169003610863575b806000036107e9575060001901600081815260046020526040902054610842565b505b604051636f96cda160e11b815260040160405180910390fd5b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a02906108b3903390899088908890600401610cc6565b6020604051808303816000875af19250505080156108ee575060408051601f3d908101601f191682019092526108eb91810190610d03565b60015b61094c573d80801561091c576040519150601f19603f3d011682016040523d82523d6000602084013e610921565b606091505b508051600003610944576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050949350505050565b606060a06040510180604052602081039150506000815280825b600183039250600a81066030018353600a9004806109835750819003601f19909101908152919050565b6001600160e01b0319811681146109c357600080fd5b50565b6000602082840312156109d857600080fd5b81356107e9816109ad565b60005b838110156109fe5781810151838201526020016109e6565b50506000910152565b60008151808452610a1f8160208601602086016109e3565b601f01601f19169290920160200192915050565b6020815260006107e96020830184610a07565b600060208284031215610a5857600080fd5b5035919050565b80356001600160a01b0381168114610a7657600080fd5b919050565b60008060408385031215610a8e57600080fd5b610a9783610a5f565b946020939093013593505050565b600080600060608486031215610aba57600080fd5b610ac384610a5f565b9250610ad160208501610a5f565b9150604084013590509250925092565b600060208284031215610af357600080fd5b6107e982610a5f565b60008060408385031215610b0f57600080fd5b610b1883610a5f565b915060208301358015158114610b2d57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610b6457600080fd5b610b6d85610a5f565b9350610b7b60208601610a5f565b925060408501359150606085013567ffffffffffffffff80821115610b9f57600080fd5b818701915087601f830112610bb357600080fd5b813581811115610bc557610bc5610b38565b604051601f8201601f19908116603f01168101908382118183101715610bed57610bed610b38565b816040528281528a6020848701011115610c0657600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215610c3d57600080fd5b610c4683610a5f565b9150610c5460208401610a5f565b90509250929050565b600181811c90821680610c7157607f821691505b602082108103610c9157634e487b7160e01b600052602260045260246000fd5b50919050565b60008351610ca98184602088016109e3565b835190830190610cbd8183602088016109e3565b01949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090610cf990830184610a07565b9695505050505050565b600060208284031215610d1557600080fd5b81516107e9816109ad56fea264697066735822122034e6ff40276c3c53ad57530091ce6a881c5a48055451d5bc3ec0894be82c005464736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class ERC721A__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(name_, symbol_, overrides) {
        return super.deploy(name_, symbol_, overrides || {});
    }
    getDeployTransaction(name_, symbol_, overrides) {
        return super.getDeployTransaction(name_, symbol_, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ERC721A__factory = ERC721A__factory;
ERC721A__factory.bytecode = _bytecode;
ERC721A__factory.abi = _abi;
