/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ERC1155Mock } from "../ERC1155Mock";

export class ERC1155Mock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155Mock> {
    return super.deploy(overrides || {}) as Promise<ERC1155Mock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155Mock {
    return super.attach(address) as ERC1155Mock;
  }
  connect(signer: Signer): ERC1155Mock__factory {
    return super.connect(signer) as ERC1155Mock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC1155Mock;
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
  "0x60806040523480156200001157600080fd5b50604080518082018252600b81526a546573744552433131353560a81b602080830191825283519081019093526000835281519192918391839162000059916003916200007a565b5080516200006f9060029060208401906200007a565b505050505062000126565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620000b25760008555620000fd565b82601f10620000cd57805160ff1916838001178555620000fd565b82800160010185558215620000fd579182015b82811115620000fd578251825591602001919060010190620000e0565b506200010b9291506200010f565b5090565b5b808211156200010b576000815560010162000110565b611e2080620001366000396000f3fe608060405234801561001057600080fd5b50600436106100e95760003560e01c80636c0360eb1161008c578063bd7a6c4111610066578063bd7a6c41146101f1578063d7a0ad9014610204578063e985e9c514610217578063f242432a1461022a576100e9565b80636c0360eb146101c3578063a22cb465146101cb578063a3f091f5146101de576100e9565b80630e89341c116100c85780630e89341c146101685780632eb2c2d61461017b578063437ecbe9146101905780634e1273f4146101a3576100e9565b8062fdd58e1461010a57806301ffc9a71461013357806306fdde0314610153575b60405162461bcd60e51b815260040161010190611b6a565b60405180910390fd5b61011d610118366004611919565b61023d565b60405161012a9190611bb1565b60405180910390f35b610146610141366004611a88565b610263565b60405161012a9190611b0c565b61015b610276565b60405161012a9190611b17565b61015b610176366004611ab0565b610304565b61018e6101893660046116d0565b6103e5565b005b61018e61019e366004611942565b6104a2565b6101b66101b13660046119c7565b6104b2565b60405161012a9190611ac8565b61015b6105ca565b61018e6101d93660046118df565b610622565b61018e6101ec366004611974565b610690565b61018e6101ff3660046117d9565b6106a2565b61018e61021236600461184a565b6106ad565b61014661022536600461169e565b6106b9565b61018e610238366004611776565b6106e7565b6001600160a01b0391909116600090815260208181526040808320938352929052205490565b600061026e8261079d565b90505b919050565b6003805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156102fc5780601f106102d1576101008083540402835291602001916102fc565b820191906000526020600020905b8154815290600101906020018083116102df57829003601f168201915b505050505081565b60606002610311836107c9565b604051602001808380546001816001161561010002031660029004801561036f5780601f1061034d57610100808354040283529182019161036f565b820191906000526020600020905b81548152906001019060200180831161035b575b5050825160208401908083835b6020831061039b5780518252601f19909201916020918201910161037c565b5181516020939093036101000a600019018019909116921691909117905264173539b7b760d91b92019182525060408051808303601a190181526005909201905295945050505050565b336001600160a01b0386161480610401575061040185336106b9565b61043c5760405162461bcd60e51b815260040180806020018281038252602f815260200180611d13602f913960400191505060405180910390fd5b6001600160a01b0384166104815760405162461bcd60e51b8152600401808060200182810382526030815260200180611c876030913960400191505060405180910390fd5b61048d858585856108bb565b61049b858585855a86610b66565b5050505050565b6104ad838383610d5e565b505050565b606081518351146104f45760405162461bcd60e51b815260040180806020018281038252602c815260200180611ce7602c913960400191505060405180910390fd5b6060835167ffffffffffffffff8111801561050e57600080fd5b50604051908082528060200260200182016040528015610538578160200160208202803683370190505b50905060005b84518110156105c25760008086838151811061055657fe5b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020600085838151811061058c57fe5b60200260200101518152602001908152602001600020548282815181106105af57fe5b602090810291909101015260010161053e565b509392505050565b6002805460408051602060018416156101000260001901909316849004601f810184900484028201840190925281815292918301828280156102fc5780601f106102d1576101008083540402835291602001916102fc565b3360008181526001602090815260408083206001600160a01b03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b61069c84848484610def565b50505050565b6104ad838383610e8a565b61069c84848484611055565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b336001600160a01b0386161480610703575061070385336106b9565b61073e5760405162461bcd60e51b815260040180806020018281038252602a815260200180611c28602a913960400191505060405180910390fd5b6001600160a01b0384166107835760405162461bcd60e51b815260040180806020018281038252602b815260200180611bfd602b913960400191505060405180910390fd5b61078f8585858561122a565b61049b858585855a86611306565b60006001600160e01b031982166303a24d0760e21b14156107c057506001610271565b61026e82611478565b6060816107ee57506040805180820190915260018152600360fc1b6020820152610271565b818060005b821561080757600101600a830492506107f3565b60608167ffffffffffffffff8111801561082057600080fd5b506040519080825280601f01601f19166020018201604052801561084b576020820181803683370190505b50905060001982015b83156108b157600a840660300160f81b8282806001900393508151811061087757fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a84049350610854565b5095945050505050565b80518251146108fb5760405162461bcd60e51b8152600401808060200182810382526035815260200180611c526035913960400191505060405180910390fd5b815160005b81811015610a855761097683828151811061091757fe5b6020026020010151600080896001600160a01b03166001600160a01b03168152602001908152602001600020600087858151811061095157fe5b60200260200101518152602001908152602001600020546114a490919063ffffffff16565b600080886001600160a01b03166001600160a01b0316815260200190815260200160002060008684815181106109a857fe5b6020026020010151815260200190815260200160002081905550610a308382815181106109d157fe5b6020026020010151600080886001600160a01b03166001600160a01b031681526020019081526020016000206000878581518110610a0b57fe5b602002602001015181526020019081526020016000205461150190919063ffffffff16565b600080876001600160a01b03166001600160a01b031681526020019081526020016000206000868481518110610a6257fe5b602090810291909101810151825281019190915260400160002055600101610900565b50836001600160a01b0316856001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610b0b578181015183820152602001610af3565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610b4a578181015183820152602001610b32565b5050505090500194505050505060405180910390a45050505050565b610b78856001600160a01b0316611562565b15610d56576000856001600160a01b031663bc197c8184338a8989886040518763ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b83811015610c09578181015183820152602001610bf1565b50505050905001848103835286818151815260200191508051906020019060200280838360005b83811015610c48578181015183820152602001610c30565b50505050905001848103825285818151815260200191508051906020019080838360005b83811015610c84578181015183820152602001610c6c565b50505050905090810190601f168015610cb15780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600088803b158015610cd657600080fd5b5087f1158015610cea573d6000803e3d6000fd5b50505050506040513d6020811015610d0157600080fd5b505190506001600160e01b0319811663bc197c8160e01b14610d545760405162461bcd60e51b815260040180806020018281038252603f815260200180611d72603f913960400191505060405180910390fd5b505b505050505050565b6001600160a01b038316600090815260208181526040808320858452909152902054610d8a90826114a4565b6001600160a01b03841660008181526020818152604080832087845282528083209490945583518681529081018590528351919333927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629281900390910190a4505050565b6001600160a01b038416600090815260208181526040808320868452909152902054610e1b9083611501565b6001600160a01b038516600081815260208181526040808320888452825280832094909455835187815290810186905283519293919233927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62928290030190a461069c60008585855a86611306565b815181518114610ecb5760405162461bcd60e51b8152600401808060200182810382526030815260200180611cb76030913960400191505060405180910390fd5b60005b81811015610f7457610f1f838281518110610ee557fe5b6020026020010151600080886001600160a01b03166001600160a01b03168152602001908152602001600020600087858151811061095157fe5b600080876001600160a01b03166001600160a01b031681526020019081526020016000206000868481518110610f5157fe5b602090810291909101810151825281019190915260400160002055600101610ece565b5060006001600160a01b0316846001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610ffb578181015183820152602001610fe3565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561103a578181015183820152602001611022565b5050505090500194505050505060405180910390a450505050565b81518351146110955760405162461bcd60e51b8152600401808060200182810382526030815260200180611d426030913960400191505060405180910390fd5b825160005b81811015611140576110eb8482815181106110b157fe5b6020026020010151600080896001600160a01b03166001600160a01b031681526020019081526020016000206000888581518110610a0b57fe5b600080886001600160a01b03166001600160a01b03168152602001908152602001600020600087848151811061111d57fe5b60209081029190910181015182528101919091526040016000205560010161109a565b50846001600160a01b031660006001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156111c75781810151838201526020016111af565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156112065781810151838201526020016111ee565b5050505090500194505050505060405180910390a461049b60008686865a87610b66565b6001600160a01b03841660009081526020818152604080832085845290915290205461125690826114a4565b6001600160a01b03808616600090815260208181526040808320878452825280832094909455918616815280825282812085825290915220546112999082611501565b6001600160a01b03808516600081815260208181526040808320888452825291829020949094558051868152938401859052805191939288169233927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62929181900390910190a450505050565b611318856001600160a01b0316611562565b15610d56576000856001600160a01b031663f23a6e6184338a8989886040518763ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156113aa578181015183820152602001611392565b50505050905090810190601f1680156113d75780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600088803b1580156113fa57600080fd5b5087f115801561140e573d6000803e3d6000fd5b50505050506040513d602081101561142557600080fd5b505190506001600160e01b0319811663f23a6e6160e01b14610d545760405162461bcd60e51b815260040180806020018281038252603a815260200180611db1603a913960400191505060405180910390fd5b60006001600160e01b03198216636cdb3d1360e11b141561149b57506001610271565b61026e82611599565b6000828211156114fb576040805162461bcd60e51b815260206004820152601760248201527f536166654d617468237375623a20554e444552464c4f57000000000000000000604482015290519081900360640190fd5b50900390565b60008282018381101561155b576040805162461bcd60e51b815260206004820152601660248201527f536166654d617468236164643a204f564552464c4f5700000000000000000000604482015290519081900360640190fd5b9392505050565b6000813f801580159061155b57507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470141592915050565b6001600160e01b031981166301ffc9a760e01b14919050565b80356001600160a01b038116811461027157600080fd5b600082601f8301126115d9578081fd5b81356115ec6115e782611bde565b611bba565b81815291506020808301908481018184028601820187101561160d57600080fd5b60005b8481101561162c57813584529282019290820190600101611610565b505050505092915050565b600082601f830112611647578081fd5b813567ffffffffffffffff81111561165b57fe5b61166e601f8201601f1916602001611bba565b915080825283602082850101111561168557600080fd5b8060208401602084013760009082016020015292915050565b600080604083850312156116b0578182fd5b6116b9836115b2565b91506116c7602084016115b2565b90509250929050565b600080600080600060a086880312156116e7578081fd5b6116f0866115b2565b94506116fe602087016115b2565b9350604086013567ffffffffffffffff8082111561171a578283fd5b61172689838a016115c9565b9450606088013591508082111561173b578283fd5b61174789838a016115c9565b9350608088013591508082111561175c578283fd5b5061176988828901611637565b9150509295509295909350565b600080600080600060a0868803121561178d578081fd5b611796866115b2565b94506117a4602087016115b2565b93506040860135925060608601359150608086013567ffffffffffffffff8111156117cd578182fd5b61176988828901611637565b6000806000606084860312156117ed578283fd5b6117f6846115b2565b9250602084013567ffffffffffffffff80821115611812578384fd5b61181e878388016115c9565b93506040860135915080821115611833578283fd5b50611840868287016115c9565b9150509250925092565b6000806000806080858703121561185f578384fd5b611868856115b2565b9350602085013567ffffffffffffffff80821115611884578485fd5b611890888389016115c9565b945060408701359150808211156118a5578384fd5b6118b1888389016115c9565b935060608701359150808211156118c6578283fd5b506118d387828801611637565b91505092959194509250565b600080604083850312156118f1578182fd5b6118fa836115b2565b91506020830135801515811461190e578182fd5b809150509250929050565b6000806040838503121561192b578182fd5b611934836115b2565b946020939093013593505050565b600080600060608486031215611956578283fd5b61195f846115b2565b95602085013595506040909401359392505050565b60008060008060808587031215611989578384fd5b611992856115b2565b93506020850135925060408501359150606085013567ffffffffffffffff8111156119bb578182fd5b6118d387828801611637565b600080604083850312156119d9578081fd5b823567ffffffffffffffff808211156119f0578283fd5b818501915085601f830112611a03578283fd5b8135611a116115e782611bde565b80828252602080830192508086018a828387028901011115611a31578788fd5b8796505b84871015611a5a57611a46816115b2565b845260019690960195928101928101611a35565b509096508701359350505080821115611a71578283fd5b50611a7e858286016115c9565b9150509250929050565b600060208284031215611a99578081fd5b81356001600160e01b03198116811461155b578182fd5b600060208284031215611ac1578081fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b81811015611b0057835183529284019291840191600101611ae4565b50909695505050505050565b901515815260200190565b6000602080835283518082850152825b81811015611b4357858101830151858201604001528201611b27565b81811115611b545783604083870101525b50601f01601f1916929092016040019392505050565b60208082526027908201527f455243313135354d6574614d696e744275726e4d6f636b3a20494e56414c494460408201526617d351551213d160ca1b606082015260800190565b90815260200190565b60405181810167ffffffffffffffff81118282101715611bd657fe5b604052919050565b600067ffffffffffffffff821115611bf257fe5b506020908102019056fe4552433131353523736166655472616e7366657246726f6d3a20494e56414c49445f524543495049454e544552433131353523736166655472616e7366657246726f6d3a20494e56414c49445f4f50455241544f5245524331313535235f7361666542617463685472616e7366657246726f6d3a20494e56414c49445f4152524159535f4c454e47544845524331313535237361666542617463685472616e7366657246726f6d3a20494e56414c49445f524543495049454e54455243313135354d696e744275726e2362617463684275726e3a20494e56414c49445f4152524159535f4c454e475448455243313135352362616c616e63654f6642617463683a20494e56414c49445f41525241595f4c454e47544845524331313535237361666542617463685472616e7366657246726f6d3a20494e56414c49445f4f50455241544f52455243313135354d696e744275726e2362617463684d696e743a20494e56414c49445f4152524159535f4c454e47544845524331313535235f63616c6c6f6e45524331313535426174636852656365697665643a20494e56414c49445f4f4e5f524543454956455f4d45535341474545524331313535235f63616c6c6f6e4552433131353552656365697665643a20494e56414c49445f4f4e5f524543454956455f4d455353414745a26469706673582212200f62c76da2c33902593e33f7361bd70aec841e79e1810d45c65bd9ad760c212f64736f6c63430007040033";
