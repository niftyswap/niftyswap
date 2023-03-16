/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  WrapAndNiftyswap,
  WrapAndNiftyswapInterface,
} from "../../utils/WrapAndNiftyswap";

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
] as const;

const _bytecode =
  "0x6101206040523480156200001257600080fd5b50604051620016c4380380620016c48339810160408190526200003591620001f7565b6001600160a01b038416158015906200005657506001600160a01b03831615155b80156200006b57506001600160a01b03821615155b80156200008057506001600160a01b03811615155b620000d15760405162461bcd60e51b815260206004820152601c60248201527f494e56414c494420434f4e5354525543544f5220415247554d454e5400000000604482015260640160405180910390fd5b6001600160a01b03848116608081905284821660a05283821660c081905291831660e05260405163095ea7b360e01b81526004810191909152600019602482015263095ea7b3906044016020604051808303816000875af11580156200013b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200016191906200025f565b506040516318fe01c760e21b81526001600160a01b0383811660048301528516906363f8071c90602401602060405180830381865afa158015620001a9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001cf91906200028a565b6101005250620002a492505050565b6001600160a01b0381168114620001f457600080fd5b50565b600080600080608085870312156200020e57600080fd5b84516200021b81620001de565b60208601519094506200022e81620001de565b60408601519093506200024181620001de565b60608601519092506200025481620001de565b939692955090935050565b6000602082840312156200027257600080fd5b815180151581146200028357600080fd5b9392505050565b6000602082840312156200029d57600080fd5b5051919050565b60805160a05160c05160e051610100516113576200036d600039600081816104a90152818161052501526109bb0152600081816101720152818161069501526107600152600081816087015281816102e40152818161038a015281816105e001528181610a760152610b4401526000818161014b015281816104870152610939015260008181610124015281816103bf015281816104580152818161054e0152818161061701528181610720015281816109e401528181610aab0152610bdb01526113576000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063c5e3dfd81161005b578063c5e3dfd81461011f578063d2f7265a14610146578063d56022d71461016d578063f23a6e611461019457600080fd5b8063785e9e8614610082578063a874d5b6146100c6578063bc197c81146100db575b600080fd5b6100a97f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b6100d96100d4366004610cff565b6101a7565b005b6100ee6100e9366004610d9e565b610708565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016100bd565b6100a97f000000000000000000000000000000000000000000000000000000000000000081565b6100a97f000000000000000000000000000000000000000000000000000000000000000081565b6100a97f000000000000000000000000000000000000000000000000000000000000000081565b6100ee6101a2366004610e59565b610bce565b6101db604051806080016040528060006001600160a01b031681526020016060815260200160608152602001600081525090565b6101e782840184610ff4565b80519092506001600160a01b03161590508061020c575080516001600160a01b031630145b6102a95760405162461bcd60e51b815260206004820152604360248201527f57726170416e644e69667479737761702377726170416e64537761703a204f5260448201527f44455220524543495049454e54204d555354204245205448495320434f4e545260648201527f4143540000000000000000000000000000000000000000000000000000000000608482015260a4015b60405180910390fd5b6040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018690527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610335573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061035991906110b3565b506040517f8340f5490000000000000000000000000000000000000000000000000000000081526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152306024830152604482018790527f00000000000000000000000000000000000000000000000000000000000000001690638340f54990606401600060405180830381600087803b15801561040357600080fd5b505af1158015610417573d6000803e3d6000fd5b50506000805460ff1916600117905550506040517ff242432a0000000000000000000000000000000000000000000000000000000081526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063f242432a906104d79030907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000908b908a908a90600401611105565b600060405180830381600087803b1580156104f157600080fd5b505af1158015610505573d6000803e3d6000fd5b50506000805460ff19168155604051627eeac760e11b81523060048201527f000000000000000000000000000000000000000000000000000000000000000060248201529092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316915062fdd58e90604401602060405180830381865afa15801561059d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c1919061113e565b9050801561067457604051636ce5768960e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301528681166024830152604482018390527f0000000000000000000000000000000000000000000000000000000000000000169063d9caed1290606401600060405180830381600087803b15801561065b57600080fd5b505af115801561066f573d6000803e3d6000fd5b505050505b60208201516040808401519051631759616b60e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001692632eb2c2d6926106ce9230928b929091600401611192565b600060405180830381600087803b1580156106e857600080fd5b505af11580156106fc573d6000803e3d6000fd5b50505050505050505050565b6000805460ff16806107425750336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016145b15610755575063bc197c8160e01b610bc2565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146108195760405162461bcd60e51b815260206004820152604160248201527f57726170416e644e6966747973776170236f6e4552433131353542617463685260448201527f656365697665643a20494e56414c49445f455243313135355f5245434549564560648201527f4400000000000000000000000000000000000000000000000000000000000000608482015260a4016102a0565b610846604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b610852838501856111ed565b80519092506001600160a01b031615905080610877575080516001600160a01b031630145b61090f5760405162461bcd60e51b815260206004820152604e60248201527f57726170416e644e6966747973776170236f6e4552433131353542617463685260448201527f656365697665643a204f5244455220524543495049454e54204d55535420424560648201527f205448495320434f4e5452414354000000000000000000000000000000000000608482015260a4016102a0565b6000805460ff19166001179055604051631759616b60e11b81523390632eb2c2d69061096d9030907f0000000000000000000000000000000000000000000000000000000000000000908d908d908d908d908d908d906004016112bd565b600060405180830381600087803b15801561098757600080fd5b505af115801561099b573d6000803e3d6000fd5b50506000805460ff19168155604051627eeac760e11b81523060048201527f000000000000000000000000000000000000000000000000000000000000000060248201529092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316915062fdd58e90604401602060405180830381865afa158015610a33573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a57919061113e565b90508015610bb557604051636ce5768960e11b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152306024830152604482018390527f0000000000000000000000000000000000000000000000000000000000000000169063d9caed1290606401600060405180830381600087803b158015610aef57600080fd5b505af1158015610b03573d6000803e3d6000fd5b50506040517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b038d81166004830152602482018590527f000000000000000000000000000000000000000000000000000000000000000016925063a9059cbb91506044016020604051808303816000875af1158015610b8f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb391906110b3565b505b5063bc197c8160e01b9150505b98975050505050505050565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610c6e5760405162461bcd60e51b815260206004820152603c60248201527f57726170416e644e6966747973776170236f6e4552433131353552656365697660448201527f65643a20494e56414c49445f455243313135355f52454345495645440000000060648201526084016102a0565b507ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b80356001600160a01b0381168114610cb157600080fd5b919050565b60008083601f840112610cc857600080fd5b50813567ffffffffffffffff811115610ce057600080fd5b602083019150836020828501011115610cf857600080fd5b9250929050565b60008060008060608587031215610d1557600080fd5b84359350610d2560208601610c9a565b9250604085013567ffffffffffffffff811115610d4157600080fd5b610d4d87828801610cb6565b95989497509550505050565b60008083601f840112610d6b57600080fd5b50813567ffffffffffffffff811115610d8357600080fd5b6020830191508360208260051b8501011115610cf857600080fd5b60008060008060008060008060a0898b031215610dba57600080fd5b610dc389610c9a565b9750610dd160208a01610c9a565b9650604089013567ffffffffffffffff80821115610dee57600080fd5b610dfa8c838d01610d59565b909850965060608b0135915080821115610e1357600080fd5b610e1f8c838d01610d59565b909650945060808b0135915080821115610e3857600080fd5b50610e458b828c01610cb6565b999c989b5096995094979396929594505050565b60008060008060008060a08789031215610e7257600080fd5b610e7b87610c9a565b9550610e8960208801610c9a565b94506040870135935060608701359250608087013567ffffffffffffffff811115610eb357600080fd5b610ebf89828a01610cb6565b979a9699509497509295939492505050565b80357fffffffff0000000000000000000000000000000000000000000000000000000081168114610cb157600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715610f5357610f53610f01565b60405290565b600082601f830112610f6a57600080fd5b8135602067ffffffffffffffff80831115610f8757610f87610f01565b8260051b604051601f19603f83011681018181108482111715610fac57610fac610f01565b604052938452858101830193838101925087851115610fca57600080fd5b83870191505b84821015610fe957813583529183019190830190610fd0565b979650505050505050565b6000806040838503121561100757600080fd5b61101083610ed1565b9150602083013567ffffffffffffffff8082111561102d57600080fd5b908401906080828703121561104157600080fd5b611049610f30565b61105283610c9a565b815260208301358281111561106657600080fd5b61107288828601610f59565b60208301525060408301358281111561108a57600080fd5b61109688828601610f59565b604083015250606083013560608201528093505050509250929050565b6000602082840312156110c557600080fd5b815180151581146110d557600080fd5b9392505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60006001600160a01b03808916835280881660208401525085604083015284606083015260a06080830152610bc260a0830184866110dc565b60006020828403121561115057600080fd5b5051919050565b600081518084526020808501945080840160005b838110156111875781518752958201959082019060010161116b565b509495945050505050565b60006001600160a01b03808716835280861660208401525060a060408301526111be60a0830185611157565b82810360608401526111d08185611157565b838103608090940193909352505060008152602001949350505050565b600080828403608081121561120157600080fd5b61120a84610ed1565b92506060601f198201121561121e57600080fd5b506040516060810181811067ffffffffffffffff8211171561124257611242610f01565b60405261125160208501610c9a565b81526040840135602082015260608401356040820152809150509250929050565b81835260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8311156112a457600080fd5b8260051b80836020870137939093016020019392505050565b60006001600160a01b03808b168352808a1660208401525060a060408301526112ea60a08301888a611272565b82810360608401526112fd818789611272565b905082810360808401526113128185876110dc565b9b9a505050505050505050505056fea2646970667358221220a397647b17a9fe16e2c8adc22711a388410a06026b362845e1956c646b6afa6c64736f6c63430008100033";

type WrapAndNiftyswapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WrapAndNiftyswapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WrapAndNiftyswap__factory extends ContractFactory {
  constructor(...args: WrapAndNiftyswapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _tokenWrapper: PromiseOrValue<string>,
    _exchange: PromiseOrValue<string>,
    _erc20: PromiseOrValue<string>,
    _erc1155: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WrapAndNiftyswap> {
    return super.deploy(
      _tokenWrapper,
      _exchange,
      _erc20,
      _erc1155,
      overrides || {}
    ) as Promise<WrapAndNiftyswap>;
  }
  override getDeployTransaction(
    _tokenWrapper: PromiseOrValue<string>,
    _exchange: PromiseOrValue<string>,
    _erc20: PromiseOrValue<string>,
    _erc1155: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _tokenWrapper,
      _exchange,
      _erc20,
      _erc1155,
      overrides || {}
    );
  }
  override attach(address: string): WrapAndNiftyswap {
    return super.attach(address) as WrapAndNiftyswap;
  }
  override connect(signer: Signer): WrapAndNiftyswap__factory {
    return super.connect(signer) as WrapAndNiftyswap__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WrapAndNiftyswapInterface {
    return new utils.Interface(_abi) as WrapAndNiftyswapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WrapAndNiftyswap {
    return new Contract(address, _abi, signerOrProvider) as WrapAndNiftyswap;
  }
}
