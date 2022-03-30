"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.WrapAndNiftyswap__factory = void 0;
var ethers_1 = require("ethers");
var WrapAndNiftyswap__factory = /** @class */ (function (_super) {
    __extends(WrapAndNiftyswap__factory, _super);
    function WrapAndNiftyswap__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    WrapAndNiftyswap__factory.prototype.deploy = function (_tokenWrapper, _exchange, _erc20, _erc1155, overrides) {
        return _super.prototype.deploy.call(this, _tokenWrapper, _exchange, _erc20, _erc1155, overrides || {});
    };
    WrapAndNiftyswap__factory.prototype.getDeployTransaction = function (_tokenWrapper, _exchange, _erc20, _erc1155, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _tokenWrapper, _exchange, _erc20, _erc1155, overrides || {});
    };
    WrapAndNiftyswap__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    WrapAndNiftyswap__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    WrapAndNiftyswap__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return WrapAndNiftyswap__factory;
}(ethers_1.ContractFactory));
exports.WrapAndNiftyswap__factory = WrapAndNiftyswap__factory;
var _abi = [
    {
        inputs: [
            {
                internalType: "address payable",
                name: "_tokenWrapper",
                type: "address"
            },
            {
                internalType: "address",
                name: "_exchange",
                type: "address"
            },
            {
                internalType: "address",
                name: "_erc20",
                type: "address"
            },
            {
                internalType: "address",
                name: "_erc1155",
                type: "address"
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [],
        name: "erc1155",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "erc20",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "exchange",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "address",
                name: "_from",
                type: "address"
            },
            {
                internalType: "uint256[]",
                name: "_ids",
                type: "uint256[]"
            },
            {
                internalType: "uint256[]",
                name: "_amounts",
                type: "uint256[]"
            },
            {
                internalType: "bytes",
                name: "_niftyswapOrder",
                type: "bytes"
            },
        ],
        name: "onERC1155BatchReceived",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4"
            },
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            },
        ],
        name: "onERC1155Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4"
            },
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "tokenWrapper",
        outputs: [
            {
                internalType: "contract IERC20Wrapper",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_maxAmount",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "_recipient",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "_niftyswapOrder",
                type: "bytes"
            },
        ],
        name: "wrapAndSwap",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
];
var _bytecode = "0x6101206040523480156200001257600080fd5b5060405162001674380380620016748339810160408190526200003591620001ec565b6001600160a01b038416158015906200005657506001600160a01b03831615155b80156200006b57506001600160a01b03821615155b80156200008057506001600160a01b03811615155b620000a85760405162461bcd60e51b81526004016200009f90620002c2565b60405180910390fd5b6001600160601b0319606085811b821660805284811b821660a05283811b821660c05282901b1660e05260405163095ea7b360e01b81526001600160a01b0383169063095ea7b3906200010490879060001990600401620002a9565b602060405180830381600087803b1580156200011f57600080fd5b505af115801562000134573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200015a919062000253565b506040516318fe01c760e21b81526001600160a01b038516906363f8071c906200018990859060040162000295565b60206040518083038186803b158015620001a257600080fd5b505afa158015620001b7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001dd91906200027c565b61010052506200031292505050565b6000806000806080858703121562000202578384fd5b84516200020f81620002f9565b60208601519094506200022281620002f9565b60408601519093506200023581620002f9565b60608601519092506200024881620002f9565b939692955090935050565b60006020828403121562000265578081fd5b8151801515811462000275578182fd5b9392505050565b6000602082840312156200028e578081fd5b5051919050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6020808252601c908201527f494e56414c494420434f4e5354525543544f5220415247554d454e5400000000604082015260600190565b6001600160a01b03811681146200030f57600080fd5b50565b60805160601c60a05160601c60c05160601c60e05160601c610100516112b7620003bd6000398061033c52806103ec528061076d52508061053052806105fb52806109945250806101025280610199528061026952806104b0528061083152806108a452508061031a52806106b7528061097052508061023c52806102eb52806103bd528061048352806105bb528061073e5280610804528061094c52806109c352506112b76000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063c5e3dfd81161005b578063c5e3dfd8146100d5578063d2f7265a146100dd578063d56022d7146100e5578063f23a6e61146100ed5761007d565b8063785e9e8614610082578063a874d5b6146100a0578063bc197c81146100b5575b600080fd5b61008a610100565b6040516100979190610f76565b60405180910390f35b6100b36100ae366004610e6d565b610124565b005b6100c86100c3366004610bba565b6105a3565b60405161009791906110bc565b61008a61094a565b61008a61096e565b61008a610992565b6100c86100fb366004610c71565b6109b6565b7f000000000000000000000000000000000000000000000000000000000000000081565b61012c610a13565b61013882840184610d0e565b80519092506001600160a01b03161590508061015d575080516001600160a01b031630145b6101825760405162461bcd60e51b815260040161017990611218565b60405180910390fd5b6040516323b872dd60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906323b872dd906101d290339030908a90600401610f8a565b602060405180830381600087803b1580156101ec57600080fd5b505af1158015610200573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102249190610ce7565b50604051638340f54960e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690638340f54990610295907f00000000000000000000000000000000000000000000000000000000000000009030908a90600401610f8a565b600060405180830381600087803b1580156102af57600080fd5b505af11580156102c3573d6000803e3d6000fd5b50506000805460ff191660011790555050604051637921219560e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063f242432a9061036a9030907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000908b908a908a9060040161106a565b600060405180830381600087803b15801561038457600080fd5b505af1158015610398573d6000803e3d6000fd5b50506000805460ff19168155604051627eeac760e11b81529092506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016915062fdd58e906104149030907f0000000000000000000000000000000000000000000000000000000000000000906004016110a3565b60206040518083038186803b15801561042c57600080fd5b505afa158015610440573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104649190610e55565b9050801561050f57604051636ce5768960e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063d9caed12906104dc907f00000000000000000000000000000000000000000000000000000000000000009089908690600401610f8a565b600060405180830381600087803b1580156104f657600080fd5b505af115801561050a573d6000803e3d6000fd5b505050505b60208201516040808401519051631759616b60e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001692632eb2c2d6926105699230928b929091600401611012565b600060405180830381600087803b15801561058357600080fd5b505af1158015610597573d6000803e3d6000fd5b50505050505050505050565b6000805460ff16806105dd5750336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016145b156105f0575063bc197c8160e01b61093e565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106385760405162461bcd60e51b8152600401610179906111b1565b610640610a44565b61064c83850185610dd8565b80519092506001600160a01b031615905080610671575080516001600160a01b031630145b61068d5760405162461bcd60e51b8152600401610179906110d1565b6000805460ff19166001179055604051631759616b60e11b81523390632eb2c2d6906106eb9030907f0000000000000000000000000000000000000000000000000000000000000000908d908d908d908d908d908d90600401610fae565b600060405180830381600087803b15801561070557600080fd5b505af1158015610719573d6000803e3d6000fd5b50506000805460ff19168155604051627eeac760e11b81529092506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016915062fdd58e906107959030907f0000000000000000000000000000000000000000000000000000000000000000906004016110a3565b60206040518083038186803b1580156107ad57600080fd5b505afa1580156107c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e59190610e55565b9050801561093157604051636ce5768960e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063d9caed129061085d907f00000000000000000000000000000000000000000000000000000000000000009030908690600401610f8a565b600060405180830381600087803b15801561087757600080fd5b505af115801561088b573d6000803e3d6000fd5b505060405163a9059cbb60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016925063a9059cbb91506108dd908d9085906004016110a3565b602060405180830381600087803b1580156108f757600080fd5b505af115801561090b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092f9190610ce7565b505b5063bc197c8160e01b9150505b98975050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610a005760405162461bcd60e51b815260040161017990611154565b5063f23a6e6160e01b9695505050505050565b604051806080016040528060006001600160a01b031681526020016060815260200160608152602001600081525090565b604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b80356001600160a01b0381168114610a8557600080fd5b919050565b60008083601f840112610a9b578182fd5b50813567ffffffffffffffff811115610ab2578182fd5b6020830191508360208083028501011115610acc57600080fd5b9250929050565b600082601f830112610ae3578081fd5b813567ffffffffffffffff80821115610af857fe5b602080830260405182828201018181108582111715610b1357fe5b604052848152945081850192508582018187018301881015610b3457600080fd5b600091505b84821015610b57578035845292820192600191909101908201610b39565b505050505092915050565b80356001600160e01b031981168114610a8557600080fd5b60008083601f840112610b8b578182fd5b50813567ffffffffffffffff811115610ba2578182fd5b602083019150836020828501011115610acc57600080fd5b60008060008060008060008060a0898b031215610bd5578384fd5b610bde89610a6e565b9750610bec60208a01610a6e565b9650604089013567ffffffffffffffff80821115610c08578586fd5b610c148c838d01610a8a565b909850965060608b0135915080821115610c2c578586fd5b610c388c838d01610a8a565b909650945060808b0135915080821115610c50578384fd5b50610c5d8b828c01610b7a565b999c989b5096995094979396929594505050565b60008060008060008060a08789031215610c89578182fd5b610c9287610a6e565b9550610ca060208801610a6e565b94506040870135935060608701359250608087013567ffffffffffffffff811115610cc9578283fd5b610cd589828a01610b7a565b979a9699509497509295939492505050565b600060208284031215610cf8578081fd5b81518015158114610d07578182fd5b9392505050565b60008060408385031215610d20578182fd5b610d2983610b62565b9150602083013567ffffffffffffffff80821115610d45578283fd5b9084019060808287031215610d58578283fd5b604051608081018181108382111715610d6d57fe5b604052610d7983610a6e565b8152602083013582811115610d8c578485fd5b610d9888828601610ad3565b602083015250604083013582811115610daf578485fd5b610dbb88828601610ad3565b604083015250606083013560608201528093505050509250929050565b6000808284036080811215610deb578283fd5b610df484610b62565b92506060601f1982011215610e07578182fd5b506040516060810181811067ffffffffffffffff82111715610e2557fe5b604052610e3460208501610a6e565b81526040840135602082015260608401356040820152809150509250929050565b600060208284031215610e66578081fd5b5051919050565b60008060008060608587031215610e82578384fd5b84359350610e9260208601610a6e565b9250604085013567ffffffffffffffff811115610ead578283fd5b610eb987828801610b7a565b95989497509550505050565b60008284527f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831115610ef6578081fd5b6020830280836020870137939093016020019283525090919050565b6000815180845260208085019450808401835b83811015610f4157815187529582019590820190600101610f25565b509495945050505050565b60008284528282602086013780602084860101526020601f19601f85011685010190509392505050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60006001600160a01b03808b168352808a1660208401525060a06040830152610fdb60a08301888a610ec5565b8281036060840152610fee818789610ec5565b90508281036080840152611003818587610f4c565b9b9a5050505050505050505050565b60006001600160a01b03808716835280861660208401525060a0604083015261103e60a0830185610f12565b82810360608401526110508185610f12565b838103608090940193909352508152602001949350505050565b60006001600160a01b03808916835280881660208401525085604083015284606083015260a0608083015261093e60a083018486610f4c565b6001600160a01b03929092168252602082015260400190565b6001600160e01b031991909116815260200190565b6020808252604e908201527f57726170416e644e6966747973776170236f6e4552433131353542617463685260408201527f656365697665643a204f5244455220524543495049454e54204d55535420424560608201527f205448495320434f4e5452414354000000000000000000000000000000000000608082015260a00190565b6020808252603c908201527f57726170416e644e6966747973776170236f6e4552433131353552656365697660408201527f65643a20494e56414c49445f455243313135355f524543454956454400000000606082015260800190565b60208082526041908201527f57726170416e644e6966747973776170236f6e4552433131353542617463685260408201527f656365697665643a20494e56414c49445f455243313135355f524543454956456060820152601160fa1b608082015260a00190565b60208082526043908201527f57726170416e644e69667479737761702377726170416e64537761703a204f5260408201527f44455220524543495049454e54204d555354204245205448495320434f4e54526060820152621050d560ea1b608082015260a0019056fea2646970667358221220963842758e904d7a5fbbbe83b8c3e59602f61d635caee321f588febfb1a456a964736f6c63430007040033";
