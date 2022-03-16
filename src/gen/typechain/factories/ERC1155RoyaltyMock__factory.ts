/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ERC1155RoyaltyMock } from "../ERC1155RoyaltyMock";

export class ERC1155RoyaltyMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155RoyaltyMock> {
    return super.deploy(overrides || {}) as Promise<ERC1155RoyaltyMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155RoyaltyMock {
    return super.attach(address) as ERC1155RoyaltyMock;
  }
  connect(signer: Signer): ERC1155RoyaltyMock__factory {
    return super.connect(signer) as ERC1155RoyaltyMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155RoyaltyMock {
    return new Contract(address, _abi, signerOrProvider) as ERC1155RoyaltyMock;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_approved",
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
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_uri",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
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
        internalType: "address[]",
        name: "_owners",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
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
  {
    inputs: [],
    name: "baseURI",
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
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]",
      },
    ],
    name: "batchBurnMock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "batchMintMock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "burnMock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "isOperator",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "mintMock",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "royaltyFee",
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
    inputs: [],
    name: "royaltyFee666",
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
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_salePrice",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "royaltyAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "royaltyRecipient",
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
    inputs: [],
    name: "royaltyRecipient666",
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
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
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
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "set666Fee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "set666FeeRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_approved",
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
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "setFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "setFeeRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceID",
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
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "uri",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252600b81526a546573744552433131353560a81b602080830191825283519081019093526000835281519192918391839162000059916003916200007a565b5080516200006f9060029060208401906200007a565b505050505062000126565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620000b25760008555620000fd565b82601f10620000cd57805160ff1916838001178555620000fd565b82800160010185558215620000fd579182015b82811115620000fd578251825591602001919060010190620000e0565b506200010b9291506200010f565b5090565b5b808211156200010b576000815560010162000110565b61227f80620001366000396000f3fe608060405234801561001057600080fd5b506004361061018c5760003560e01c806369fe0e2d116100e3578063b8997a971161008c578063e74b981b11610066578063e74b981b14610341578063e985e9c514610354578063f242432a146103675761018c565b8063b8997a9714610313578063bd7a6c411461031b578063d7a0ad901461032e5761018c565b80638932d586116100bd5780638932d586146102e5578063a22cb465146102ed578063a3f091f5146103005761018c565b806369fe0e2d146102b75780636bdb672c146102ca5780636c0360eb146102dd5761018c565b80632a55205a11610145578063437ecbe91161011f578063437ecbe91461027c5780634c00de821461028f5780634e1273f4146102975761018c565b80632a55205a146102335780632c132306146102545780632eb2c2d6146102695761018c565b806306fdde031161017657806306fdde03146101f65780630e89341c1461020b57806310e512ce1461021e5761018c565b8062fdd58e146101ad57806301ffc9a7146101d6575b60405162461bcd60e51b81526004016101a490611f7c565b60405180910390fd5b6101c06101bb366004611cdd565b61037a565b6040516101cd9190612010565b60405180910390f35b6101e96101e4366004611e4c565b6103a3565b6040516101cd9190611f1e565b6101fe6103d7565b6040516101cd9190611f29565b6101fe610219366004611e74565b610465565b61023161022c366004611e74565b61055e565b005b610246610241366004611e8c565b610584565b6040516101cd929190611ec1565b61025c610606565b6040516101cd9190611ead565b610231610277366004611a94565b610615565b61023161028a366004611d06565b6106d2565b61025c6106e2565b6102aa6102a5366004611d8b565b6106f1565b6040516101cd9190611eda565b6102316102c5366004611e74565b610809565b6102316102d8366004611a48565b61082f565b6101fe61085e565b6101c06108b6565b6102316102fb366004611ca3565b6108bc565b61023161030e366004611d38565b61092a565b6101c061093c565b610231610329366004611b9d565b610942565b61023161033c366004611c0e565b61094d565b61023161034f366004611a48565b610959565b6101e9610362366004611a62565b610988565b610231610375366004611b3a565b6109b6565b6001600160a01b0382166000908152602081815260408083208484529091529020545b92915050565b60006001600160e01b0319821663152a902d60e11b14156103c6575060016103d2565b6103cf82610a6c565b90505b919050565b6003805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561045d5780601f106104325761010080835404028352916020019161045d565b820191906000526020600020905b81548152906001019060200180831161044057829003601f168201915b505050505081565b6060600261047283610a77565b60405160200180838054600181600116156101000203166002900480156104d05780601f106104ae5761010080835404028352918201916104d0565b820191906000526020600020905b8154815290600101906020018083116104bc575b5050825160208401908083835b602083106104fc5780518252601f1990920191602091820191016104dd565b5181516020939093036101000a60001901801990911692169190911790527f2e6a736f6e00000000000000000000000000000000000000000000000000000092019182525060408051808303601a190181526005909201905295945050505050565b612710811061057f5760405162461bcd60e51b81526004016101a490611fd9565b600655565b6000808361029a14156105cb5760006105b46127106105ae60065487610b6990919063ffffffff16565b90610bdf565b6007546001600160a01b0316935091506105ff9050565b60006105e86127106105ae60045487610b6990919063ffffffff16565b6005546001600160a01b0316935091506105ff9050565b9250929050565b6007546001600160a01b031681565b336001600160a01b038616148061063157506106318533610988565b61066c5760405162461bcd60e51b815260040180806020018281038252602f815260200180612172602f913960400191505060405180910390fd5b6001600160a01b0384166106b15760405162461bcd60e51b81526004018080602001828103825260308152602001806120e66030913960400191505060405180910390fd5b6106bd85858585610c49565b6106cb858585855a86610ef4565b5050505050565b6106dd8383836110ec565b505050565b6005546001600160a01b031681565b606081518351146107335760405162461bcd60e51b815260040180806020018281038252602c815260200180612146602c913960400191505060405180910390fd5b6060835167ffffffffffffffff8111801561074d57600080fd5b50604051908082528060200260200182016040528015610777578160200160208202803683370190505b50905060005b84518110156108015760008086838151811061079557fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008583815181106107cb57fe5b60200260200101518152602001908152602001600020548282815181106107ee57fe5b602090810291909101015260010161077d565b509392505050565b612710811061082a5760405162461bcd60e51b81526004016101a490611fd9565b600455565b6007805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6002805460408051602060018416156101000260001901909316849004601f8101849004840282018401909252818152929183018282801561045d5780601f106104325761010080835404028352916020019161045d565b60065481565b3360008181526001602090815260408083206001600160a01b03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b6109368484848461117d565b50505050565b60045481565b6106dd838383611218565b610936848484846113e3565b6005805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b336001600160a01b03861614806109d257506109d28533610988565b610a0d5760405162461bcd60e51b815260040180806020018281038252602a815260200180612087602a913960400191505060405180910390fd5b6001600160a01b038416610a525760405162461bcd60e51b815260040180806020018281038252602b81526020018061205c602b913960400191505060405180910390fd5b610a5e858585856115b8565b6106cb858585855a86611694565b60006103cf82611806565b606081610a9c57506040805180820190915260018152600360fc1b60208201526103d2565b818060005b8215610ab557600101600a83049250610aa1565b60608167ffffffffffffffff81118015610ace57600080fd5b506040519080825280601f01601f191660200182016040528015610af9576020820181803683370190505b50905060001982015b8315610b5f57600a840660300160f81b82828060019003935081518110610b2557fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a84049350610b02565b5095945050505050565b600082610b785750600061039d565b82820282848281610b8557fe5b0414610bd8576040805162461bcd60e51b815260206004820152601660248201527f536166654d617468236d756c3a204f564552464c4f5700000000000000000000604482015290519081900360640190fd5b9392505050565b6000808211610c35576040805162461bcd60e51b815260206004820152601e60248201527f536166654d617468236469763a204449564953494f4e5f42595f5a45524f0000604482015290519081900360640190fd5b6000828481610c4057fe5b04949350505050565b8051825114610c895760405162461bcd60e51b81526004018080602001828103825260358152602001806120b16035913960400191505060405180910390fd5b815160005b81811015610e1357610d04838281518110610ca557fe5b6020026020010151600080896001600160a01b03166001600160a01b031681526020019081526020016000206000878581518110610cdf57fe5b602002602001015181526020019081526020016000205461183290919063ffffffff16565b600080886001600160a01b03166001600160a01b031681526020019081526020016000206000868481518110610d3657fe5b6020026020010151815260200190815260200160002081905550610dbe838281518110610d5f57fe5b6020026020010151600080886001600160a01b03166001600160a01b031681526020019081526020016000206000878581518110610d9957fe5b602002602001015181526020019081526020016000205461188f90919063ffffffff16565b600080876001600160a01b03166001600160a01b031681526020019081526020016000206000868481518110610df057fe5b602090810291909101810151825281019190915260400160002055600101610c8e565b50836001600160a01b0316856001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610e99578181015183820152602001610e81565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610ed8578181015183820152602001610ec0565b5050505090500194505050505060405180910390a45050505050565b610f06856001600160a01b03166118e9565b156110e4576000856001600160a01b031663bc197c8184338a8989886040518763ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b83811015610f97578181015183820152602001610f7f565b50505050905001848103835286818151815260200191508051906020019060200280838360005b83811015610fd6578181015183820152602001610fbe565b50505050905001848103825285818151815260200191508051906020019080838360005b83811015611012578181015183820152602001610ffa565b50505050905090810190601f16801561103f5780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600088803b15801561106457600080fd5b5087f1158015611078573d6000803e3d6000fd5b50505050506040513d602081101561108f57600080fd5b505190506001600160e01b0319811663bc197c8160e01b146110e25760405162461bcd60e51b815260040180806020018281038252603f8152602001806121d1603f913960400191505060405180910390fd5b505b505050505050565b6001600160a01b0383166000908152602081815260408083208584529091529020546111189082611832565b6001600160a01b03841660008181526020818152604080832087845282528083209490945583518681529081018590528351919333927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629281900390910190a4505050565b6001600160a01b0384166000908152602081815260408083208684529091529020546111a9908361188f565b6001600160a01b038516600081815260208181526040808320888452825280832094909455835187815290810186905283519293919233927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62928290030190a461093660008585855a86611694565b8151815181146112595760405162461bcd60e51b81526004018080602001828103825260308152602001806121166030913960400191505060405180910390fd5b60005b81811015611302576112ad83828151811061127357fe5b6020026020010151600080886001600160a01b03166001600160a01b031681526020019081526020016000206000878581518110610cdf57fe5b600080876001600160a01b03166001600160a01b0316815260200190815260200160002060008684815181106112df57fe5b60209081029190910181015182528101919091526040016000205560010161125c565b5060006001600160a01b0316846001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015611389578181015183820152602001611371565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156113c85781810151838201526020016113b0565b5050505090500194505050505060405180910390a450505050565b81518351146114235760405162461bcd60e51b81526004018080602001828103825260308152602001806121a16030913960400191505060405180910390fd5b825160005b818110156114ce5761147984828151811061143f57fe5b6020026020010151600080896001600160a01b03166001600160a01b031681526020019081526020016000206000888581518110610d9957fe5b600080886001600160a01b03166001600160a01b0316815260200190815260200160002060008784815181106114ab57fe5b602090810291909101810151825281019190915260400160002055600101611428565b50846001600160a01b031660006001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561155557818101518382015260200161153d565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561159457818101518382015260200161157c565b5050505090500194505050505060405180910390a46106cb60008686865a87610ef4565b6001600160a01b0384166000908152602081815260408083208584529091529020546115e49082611832565b6001600160a01b0380861660009081526020818152604080832087845282528083209490945591861681528082528281208582529091522054611627908261188f565b6001600160a01b03808516600081815260208181526040808320888452825291829020949094558051868152938401859052805191939288169233927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62929181900390910190a450505050565b6116a6856001600160a01b03166118e9565b156110e4576000856001600160a01b031663f23a6e6184338a8989886040518763ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611738578181015183820152602001611720565b50505050905090810190601f1680156117655780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600088803b15801561178857600080fd5b5087f115801561179c573d6000803e3d6000fd5b50505050506040513d60208110156117b357600080fd5b505190506001600160e01b0319811663f23a6e6160e01b146110e25760405162461bcd60e51b815260040180806020018281038252603a815260200180612210603a913960400191505060405180910390fd5b60006001600160e01b031982166303a24d0760e21b1415611829575060016103d2565b6103cf82611920565b600082821115611889576040805162461bcd60e51b815260206004820152601760248201527f536166654d617468237375623a20554e444552464c4f57000000000000000000604482015290519081900360640190fd5b50900390565b600082820183811015610bd8576040805162461bcd60e51b815260206004820152601660248201527f536166654d617468236164643a204f564552464c4f5700000000000000000000604482015290519081900360640190fd5b6000813f8015801590610bd857507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470141592915050565b60006001600160e01b03198216636cdb3d1360e11b1415611943575060016103d2565b6301ffc9a760e01b6001600160e01b03198316146103cf565b80356001600160a01b03811681146103d257600080fd5b600082601f830112611983578081fd5b81356119966119918261203d565b612019565b8181529150602080830190848101818402860182018710156119b757600080fd5b60005b848110156119d6578135845292820192908201906001016119ba565b505050505092915050565b600082601f8301126119f1578081fd5b813567ffffffffffffffff811115611a0557fe5b611a18601f8201601f1916602001612019565b9150808252836020828501011115611a2f57600080fd5b8060208401602084013760009082016020015292915050565b600060208284031215611a59578081fd5b610bd88261195c565b60008060408385031215611a74578081fd5b611a7d8361195c565b9150611a8b6020840161195c565b90509250929050565b600080600080600060a08688031215611aab578081fd5b611ab48661195c565b9450611ac26020870161195c565b9350604086013567ffffffffffffffff80821115611ade578283fd5b611aea89838a01611973565b94506060880135915080821115611aff578283fd5b611b0b89838a01611973565b93506080880135915080821115611b20578283fd5b50611b2d888289016119e1565b9150509295509295909350565b600080600080600060a08688031215611b51578081fd5b611b5a8661195c565b9450611b686020870161195c565b93506040860135925060608601359150608086013567ffffffffffffffff811115611b91578182fd5b611b2d888289016119e1565b600080600060608486031215611bb1578283fd5b611bba8461195c565b9250602084013567ffffffffffffffff80821115611bd6578384fd5b611be287838801611973565b93506040860135915080821115611bf7578283fd5b50611c0486828701611973565b9150509250925092565b60008060008060808587031215611c23578384fd5b611c2c8561195c565b9350602085013567ffffffffffffffff80821115611c48578485fd5b611c5488838901611973565b94506040870135915080821115611c69578384fd5b611c7588838901611973565b93506060870135915080821115611c8a578283fd5b50611c97878288016119e1565b91505092959194509250565b60008060408385031215611cb5578182fd5b611cbe8361195c565b915060208301358015158114611cd2578182fd5b809150509250929050565b60008060408385031215611cef578182fd5b611cf88361195c565b946020939093013593505050565b600080600060608486031215611d1a578283fd5b611d238461195c565b95602085013595506040909401359392505050565b60008060008060808587031215611d4d578384fd5b611d568561195c565b93506020850135925060408501359150606085013567ffffffffffffffff811115611d7f578182fd5b611c97878288016119e1565b60008060408385031215611d9d578182fd5b823567ffffffffffffffff80821115611db4578384fd5b818501915085601f830112611dc7578384fd5b8135611dd56119918261203d565b80828252602080830192508086018a828387028901011115611df5578889fd5b8896505b84871015611e1e57611e0a8161195c565b845260019690960195928101928101611df9565b509096508701359350505080821115611e35578283fd5b50611e4285828601611973565b9150509250929050565b600060208284031215611e5d578081fd5b81356001600160e01b031981168114610bd8578182fd5b600060208284031215611e85578081fd5b5035919050565b60008060408385031215611e9e578182fd5b50508035926020909101359150565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6020808252825182820181905260009190848201906040850190845b81811015611f1257835183529284019291840191600101611ef6565b50909695505050505050565b901515815260200190565b6000602080835283518082850152825b81811015611f5557858101830151858201604001528201611f39565b81811115611f665783604083870101525b50601f01601f1916929092016040019392505050565b60208082526027908201527f455243313135354d6574614d696e744275726e4d6f636b3a20494e56414c494460408201527f5f4d4554484f4400000000000000000000000000000000000000000000000000606082015260800190565b6020808252600f908201527f46454520495320544f4f20484947480000000000000000000000000000000000604082015260600190565b90815260200190565b60405181810167ffffffffffffffff8111828210171561203557fe5b604052919050565b600067ffffffffffffffff82111561205157fe5b506020908102019056fe4552433131353523736166655472616e7366657246726f6d3a20494e56414c49445f524543495049454e544552433131353523736166655472616e7366657246726f6d3a20494e56414c49445f4f50455241544f5245524331313535235f7361666542617463685472616e7366657246726f6d3a20494e56414c49445f4152524159535f4c454e47544845524331313535237361666542617463685472616e7366657246726f6d3a20494e56414c49445f524543495049454e54455243313135354d696e744275726e2362617463684275726e3a20494e56414c49445f4152524159535f4c454e475448455243313135352362616c616e63654f6642617463683a20494e56414c49445f41525241595f4c454e47544845524331313535237361666542617463685472616e7366657246726f6d3a20494e56414c49445f4f50455241544f52455243313135354d696e744275726e2362617463684d696e743a20494e56414c49445f4152524159535f4c454e47544845524331313535235f63616c6c6f6e45524331313535426174636852656365697665643a20494e56414c49445f4f4e5f524543454956455f4d45535341474545524331313535235f63616c6c6f6e4552433131353552656365697665643a20494e56414c49445f4f4e5f524543454956455f4d455353414745a26469706673582212201ee1b5eb1fbc7a07c1e72185c8f961a357d9c91949391910cb77d2ba19bca17064736f6c63430007040033";
