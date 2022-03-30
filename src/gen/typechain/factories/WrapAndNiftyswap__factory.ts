/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { WrapAndNiftyswap } from "../WrapAndNiftyswap";

export class WrapAndNiftyswap__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _tokenWrapper: string,
    _exchange: string,
    _erc20: string,
    _erc1155: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WrapAndNiftyswap> {
    return super.deploy(
      _tokenWrapper,
      _exchange,
      _erc20,
      _erc1155,
      overrides || {}
    ) as Promise<WrapAndNiftyswap>;
  }
  getDeployTransaction(
    _tokenWrapper: string,
    _exchange: string,
    _erc20: string,
    _erc1155: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _tokenWrapper,
      _exchange,
      _erc20,
      _erc1155,
      overrides || {}
    );
  }
  attach(address: string): WrapAndNiftyswap {
    return super.attach(address) as WrapAndNiftyswap;
  }
  connect(signer: Signer): WrapAndNiftyswap__factory {
    return super.connect(signer) as WrapAndNiftyswap__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WrapAndNiftyswap {
    return new Contract(address, _abi, signerOrProvider) as WrapAndNiftyswap;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_tokenWrapper",
        type: "address",
      },
      {
        internalType: "address",
        name: "_exchange",
        type: "address",
      },
      {
        internalType: "address",
        name: "_erc20",
        type: "address",
      },
      {
        internalType: "address",
        name: "_erc1155",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "erc1155",
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
    name: "erc20",
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
    name: "exchange",
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
        name: "",
        type: "address",
      },
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
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "_niftyswapOrder",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenWrapper",
    outputs: [
      {
        internalType: "contract IERC20Wrapper",
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
        internalType: "uint256",
        name: "_maxAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_niftyswapOrder",
        type: "bytes",
      },
    ],
    name: "wrapAndSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101206040523480156200001257600080fd5b5060405162001630380380620016308339810160408190526200003591620001ec565b6001600160a01b038416158015906200005657506001600160a01b03831615155b80156200006b57506001600160a01b03821615155b80156200008057506001600160a01b03811615155b620000a85760405162461bcd60e51b81526004016200009f90620002c2565b60405180910390fd5b6001600160601b0319606085811b821660805284811b821660a05283811b821660c05282901b1660e05260405163095ea7b360e01b81526001600160a01b0383169063095ea7b3906200010490879060001990600401620002a9565b602060405180830381600087803b1580156200011f57600080fd5b505af115801562000134573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200015a919062000253565b506040516318fe01c760e21b81526001600160a01b038516906363f8071c906200018990859060040162000295565b60206040518083038186803b158015620001a257600080fd5b505afa158015620001b7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001dd91906200027c565b61010052506200031292505050565b6000806000806080858703121562000202578384fd5b84516200020f81620002f9565b60208601519094506200022281620002f9565b60408601519093506200023581620002f9565b60608601519092506200024881620002f9565b939692955090935050565b60006020828403121562000265578081fd5b8151801515811462000275578182fd5b9392505050565b6000602082840312156200028e578081fd5b5051919050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6020808252601c908201527f494e56414c494420434f4e5354525543544f5220415247554d454e5400000000604082015260600190565b6001600160a01b03811681146200030f57600080fd5b50565b60805160601c60a05160601c60c05160601c60e05160601c61010051611274620003bc6000398061032c52806103dc528061075d52508061052052806105eb528061098452508060f25280610189528061025952806104a05280610821528061089452508061030a52806106a7528061096052508061022c52806102db52806103ad528061047352806105ab528061072e52806107f4528061093c52806109b352506112746000f3fe608060405234801561001057600080fd5b506004361061006d5760003560e01c8063785e9e8614610072578063a874d5b614610090578063bc197c81146100a5578063c5e3dfd8146100c5578063d2f7265a146100cd578063d56022d7146100d5578063f23a6e61146100dd575b600080fd5b61007a6100f0565b6040516100879190610f45565b60405180910390f35b6100a361009e366004610e56565b610114565b005b6100b86100b3366004610ba7565b610593565b604051610087919061108d565b61007a61093a565b61007a61095e565b61007a610982565b6100b86100eb366004610c5d565b6109a6565b7f000000000000000000000000000000000000000000000000000000000000000081565b61011c610a03565b61012882840184610cf9565b80519092506001600160a01b03161590508061014d575080516001600160a01b031630145b6101725760405162461bcd60e51b8152600401610169906111b5565b60405180910390fd5b6040516323b872dd60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906323b872dd906101c290339030908a90600401610f59565b602060405180830381600087803b1580156101dc57600080fd5b505af11580156101f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102149190610cd2565b50604051638340f54960e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690638340f54990610285907f00000000000000000000000000000000000000000000000000000000000000009030908a90600401610f59565b600060405180830381600087803b15801561029f57600080fd5b505af11580156102b3573d6000803e3d6000fd5b50506000805460ff191660011790555050604051637921219560e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063f242432a9061035a9030907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000908b908a908a90600401611039565b600060405180830381600087803b15801561037457600080fd5b505af1158015610388573d6000803e3d6000fd5b50506000805460ff19168155604051627eeac760e11b81529092506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016915062fdd58e906104049030907f000000000000000000000000000000000000000000000000000000000000000090600401611074565b60206040518083038186803b15801561041c57600080fd5b505afa158015610430573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104549190610e3e565b905080156104ff57604051636ce5768960e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063d9caed12906104cc907f00000000000000000000000000000000000000000000000000000000000000009089908690600401610f59565b600060405180830381600087803b1580156104e657600080fd5b505af11580156104fa573d6000803e3d6000fd5b505050505b60208201516040808401519051631759616b60e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001692632eb2c2d6926105599230928b929091600401610fe1565b600060405180830381600087803b15801561057357600080fd5b505af1158015610587573d6000803e3d6000fd5b50505050505050505050565b6000805460ff16806105cd5750336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016145b156105e0575063bc197c8160e01b61092e565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106285760405162461bcd60e51b815260040161016990611160565b610630610a34565b61063c83850185610dc2565b80519092506001600160a01b031615905080610661575080516001600160a01b031630145b61067d5760405162461bcd60e51b8152600401610169906110a2565b6000805460ff19166001179055604051631759616b60e11b81523390632eb2c2d6906106db9030907f0000000000000000000000000000000000000000000000000000000000000000908d908d908d908d908d908d90600401610f7d565b600060405180830381600087803b1580156106f557600080fd5b505af1158015610709573d6000803e3d6000fd5b50506000805460ff19168155604051627eeac760e11b81529092506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016915062fdd58e906107859030907f000000000000000000000000000000000000000000000000000000000000000090600401611074565b60206040518083038186803b15801561079d57600080fd5b505afa1580156107b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107d59190610e3e565b9050801561092157604051636ce5768960e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063d9caed129061084d907f00000000000000000000000000000000000000000000000000000000000000009030908690600401610f59565b600060405180830381600087803b15801561086757600080fd5b505af115801561087b573d6000803e3d6000fd5b505060405163a9059cbb60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016925063a9059cbb91506108cd908d908590600401611074565b602060405180830381600087803b1580156108e757600080fd5b505af11580156108fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091f9190610cd2565b505b5063bc197c8160e01b9150505b98975050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146109f05760405162461bcd60e51b815260040161016990611104565b5063f23a6e6160e01b9695505050505050565b604051806080016040528060006001600160a01b031681526020016060815260200160608152602001600081525090565b604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b80356001600160a01b0381168114610a7557600080fd5b919050565b60008083601f840112610a8b578182fd5b5081356001600160401b03811115610aa1578182fd5b6020830191508360208083028501011115610abb57600080fd5b9250929050565b600082601f830112610ad2578081fd5b81356001600160401b0380821115610ae657fe5b602080830260405182828201018181108582111715610b0157fe5b604052848152945081850192508582018187018301881015610b2257600080fd5b600091505b84821015610b45578035845292820192600191909101908201610b27565b505050505092915050565b80356001600160e01b031981168114610a7557600080fd5b60008083601f840112610b79578182fd5b5081356001600160401b03811115610b8f578182fd5b602083019150836020828501011115610abb57600080fd5b60008060008060008060008060a0898b031215610bc2578384fd5b610bcb89610a5e565b9750610bd960208a01610a5e565b965060408901356001600160401b0380821115610bf4578586fd5b610c008c838d01610a7a565b909850965060608b0135915080821115610c18578586fd5b610c248c838d01610a7a565b909650945060808b0135915080821115610c3c578384fd5b50610c498b828c01610b68565b999c989b5096995094979396929594505050565b60008060008060008060a08789031215610c75578182fd5b610c7e87610a5e565b9550610c8c60208801610a5e565b9450604087013593506060870135925060808701356001600160401b03811115610cb4578283fd5b610cc089828a01610b68565b979a9699509497509295939492505050565b600060208284031215610ce3578081fd5b81518015158114610cf2578182fd5b9392505050565b60008060408385031215610d0b578182fd5b610d1483610b50565b915060208301356001600160401b0380821115610d2f578283fd5b9084019060808287031215610d42578283fd5b604051608081018181108382111715610d5757fe5b604052610d6383610a5e565b8152602083013582811115610d76578485fd5b610d8288828601610ac2565b602083015250604083013582811115610d99578485fd5b610da588828601610ac2565b604083015250606083013560608201528093505050509250929050565b6000808284036080811215610dd5578283fd5b610dde84610b50565b92506060601f1982011215610df1578182fd5b50604051606081016001600160401b0381118282101715610e0e57fe5b604052610e1d60208501610a5e565b81526040840135602082015260608401356040820152809150509250929050565b600060208284031215610e4f578081fd5b5051919050565b60008060008060608587031215610e6b578384fd5b84359350610e7b60208601610a5e565b925060408501356001600160401b03811115610e95578283fd5b610ea187828801610b68565b95989497509550505050565b81835260006001600160fb1b03831115610ec5578081fd5b6020830280836020870137939093016020019283525090919050565b6000815180845260208085019450808401835b83811015610f1057815187529582019590820190600101610ef4565b509495945050505050565b60008284528282602086013780602084860101526020601f19601f85011685010190509392505050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b0389811682528816602082015260a060408201819052600090610faa908301888a610ead565b8281036060840152610fbd818789610ead565b90508281036080840152610fd2818587610f1b565b9b9a5050505050505050505050565b6001600160a01b0385811682528416602082015260a06040820181905260009061100d90830185610ee1565b828103606084015261101f8185610ee1565b838103608090940193909352508152602001949350505050565b6001600160a01b03878116825286166020820152604081018590526060810184905260a06080820181905260009061092e9083018486610f1b565b6001600160a01b03929092168252602082015260400190565b6001600160e01b031991909116815260200190565b6020808252604e9082015260008051602061121f83398151915260408201527f656365697665643a204f5244455220524543495049454e54204d55535420424560608201526d0815121254c810d3d395149050d560921b608082015260a00190565b6020808252603c908201527f57726170416e644e6966747973776170236f6e4552433131353552656365697660408201527b19590e881253959053125117d15490cc4c4d4d57d49150d15255915160221b606082015260800190565b602080825260419082015260008051602061121f83398151915260408201527f656365697665643a20494e56414c49445f455243313135355f524543454956456060820152601160fa1b608082015260a00190565b60208082526043908201527f57726170416e644e69667479737761702377726170416e64537761703a204f5260408201527f44455220524543495049454e54204d555354204245205448495320434f4e54526060820152621050d560ea1b608082015260a0019056fe57726170416e644e6966747973776170236f6e45524331313535426174636852a2646970667358221220f40558a3f4ce8242ab466d7f2f482a6770bc602c2b74e839d2efba39f685152e64736f6c63430007040033";
