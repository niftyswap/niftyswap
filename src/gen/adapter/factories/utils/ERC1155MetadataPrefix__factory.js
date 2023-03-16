"use strict";
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
exports.ERC1155MetadataPrefix__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "_prefix",
                type: "string"
            },
            {
                internalType: "bool",
                name: "_includeAddress",
                type: "bool"
            },
            {
                internalType: "address",
                name: "_admin",
                type: "address"
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            },
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "_uriPrefix",
                type: "string"
            },
        ],
        name: "URIPrefixChanged",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
        ],
        name: "_addressToString",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            },
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            },
        ],
        name: "_bytesToString",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            },
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [],
        name: "getOwner",
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
                internalType: "string",
                name: "_uriPrefix",
                type: "string"
            },
        ],
        name: "setUriPrefix",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_newOwner",
                type: "address"
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256"
            },
        ],
        name: "uri",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "uriPrefix",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
];
var _bytecode = "0x60a06040523480156200001157600080fd5b50604051620011fe380380620011fe83398101604081905262000034916200013c565b600080546001600160a01b0319166001600160a01b03831690811782556040518392907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3507f532d3d5cdc662ef49a0347b14c41825ddd3fff96e47013e8602735db8ca7b90483604051620000ae91906200021b565b60405180910390a16001620000c48482620002df565b5050151560805250620003ab565b634e487b7160e01b600052604160045260246000fd5b60005b8381101562000105578181015183820152602001620000eb565b50506000910152565b805180151581146200011f57600080fd5b919050565b80516001600160a01b03811681146200011f57600080fd5b6000806000606084860312156200015257600080fd5b83516001600160401b03808211156200016a57600080fd5b818601915086601f8301126200017f57600080fd5b815181811115620001945762000194620000d2565b604051601f8201601f19908116603f01168101908382118183101715620001bf57620001bf620000d2565b81604052828152896020848701011115620001d957600080fd5b620001ec836020830160208801620000e8565b809750505050505062000202602085016200010e565b9150620002126040850162000124565b90509250925092565b60208152600082518060208401526200023c816040850160208701620000e8565b601f01601f19169190910160400192915050565b600181811c908216806200026557607f821691505b6020821081036200028657634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002da57600081815260208120601f850160051c81016020861015620002b55750805b601f850160051c820191505b81811015620002d657828155600101620002c1565b5050505b505050565b81516001600160401b03811115620002fb57620002fb620000d2565b62000313816200030c845462000250565b846200028c565b602080601f8311600181146200034b5760008415620003325750858301515b600019600386901b1c1916600185901b178555620002d6565b600085815260208120601f198616915b828110156200037c578886015182559484019460019091019084016200035b565b50858210156200039b5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b608051610e37620003c7600039600061013a0152610e376000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806388e9a48a1161005b57806388e9a48a146100c8578063893d20e8146100db578063ca8bf2f714610103578063f2fde38b1461011657600080fd5b80630e89341c1461008257806362b99ad4146100ab5780637ec4a659146100b3575b600080fd5b6100956100903660046108fc565b610129565b6040516100a29190610939565b60405180910390f35b6100956101b6565b6100c66100c136600461096c565b610244565b005b6100956100d63660046109de565b610321565b60005460405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100a2565b610095610111366004610a31565b610372565b6100c66101243660046109de565b610618565b606060006101368361079e565b90507f00000000000000000000000000000000000000000000000000000000000000001561018b578061016833610321565b604051602001610179929190610ae2565b60405160208183030381529060405290505b60018160405160200161019f929190610b74565b604051602081830303815290604052915050919050565b600180546101c390610b3a565b80601f01602080910402602001604051908101604052809291908181526020018280546101ef90610b3a565b801561023c5780601f106102115761010080835404028352916020019161023c565b820191906000526020600020905b81548152906001019060200180831161021f57829003601f168201915b505050505081565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102d65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c65236f6e6c794f776e65723a2053454e4445525f49535f4e4f5460448201527f5f4f574e4552000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b7f532d3d5cdc662ef49a0347b14c41825ddd3fff96e47013e8602735db8ca7b9048282604051610307929190610bfb565b60405180910390a1600161031c828483610c78565b505050565b604051606082811b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001660208301529061036c90603401604051602081830303815290604052610372565b92915050565b60408051808201909152601081527f303132333435363738396162636465660000000000000000000000000000000060208201528151606091906000906103ba906002610d4f565b6103c5906002610d6e565b67ffffffffffffffff8111156103dd576103dd610a1b565b6040519080825280601f01601f191660200182016040528015610407576020820181803683370190505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061043e5761043e610d81565b60200101906001600160f81b031916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061048957610489610d81565b60200101906001600160f81b031916908160001a90535060005b8451811015610610578260048683815181106104c1576104c1610d81565b016020015182517fff0000000000000000000000000000000000000000000000000000000000000090911690911c60f81c90811061050157610501610d81565b01602001517fff000000000000000000000000000000000000000000000000000000000000001682610534836002610d4f565b61053f906002610d6e565b8151811061054f5761054f610d81565b60200101906001600160f81b031916908160001a9053508285828151811061057957610579610d81565b602091010151815160f89190911c600f1690811061059957610599610d81565b01602001517fff0000000000000000000000000000000000000000000000000000000000000016826105cc836002610d4f565b6105d7906003610d6e565b815181106105e7576105e7610d81565b60200101906001600160f81b031916908160001a9053508061060881610d97565b9150506104a3565b509392505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106a55760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c65236f6e6c794f776e65723a2053454e4445525f49535f4e4f5460448201527f5f4f574e4552000000000000000000000000000000000000000000000000000060648201526084016102cd565b73ffffffffffffffffffffffffffffffffffffffff811661072e5760405162461bcd60e51b815260206004820152602a60248201527f4f776e61626c65237472616e736665724f776e6572736869703a20494e56414c60448201527f49445f414444524553530000000000000000000000000000000000000000000060648201526084016102cd565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081178255604051909182917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a350565b60408051604e80825260808201909252606091600091906020820181803683370190505090508260005b81156108325760006107db600a84610dc6565b90506107e8600a84610dda565b92506107f5816030610d6e565b60f81b848361080381610d97565b94508151811061081557610815610d81565b60200101906001600160f81b031916908160001a905350506107c8565b60008167ffffffffffffffff81111561084d5761084d610a1b565b6040519080825280601f01601f191660200182016040528015610877576020820181803683370190505b50905060005b828110156108f2578481610892600186610dee565b61089c9190610dee565b815181106108ac576108ac610d81565b602001015160f81c60f81b8282815181106108c9576108c9610d81565b60200101906001600160f81b031916908160001a905350806108ea81610d97565b91505061087d565b5095945050505050565b60006020828403121561090e57600080fd5b5035919050565b60005b83811015610930578181015183820152602001610918565b50506000910152565b6020815260008251806020840152610958816040850160208701610915565b601f01601f19169190910160400192915050565b6000806020838503121561097f57600080fd5b823567ffffffffffffffff8082111561099757600080fd5b818501915085601f8301126109ab57600080fd5b8135818111156109ba57600080fd5b8660208285010111156109cc57600080fd5b60209290920196919550909350505050565b6000602082840312156109f057600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610a1457600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215610a4357600080fd5b813567ffffffffffffffff80821115610a5b57600080fd5b818401915084601f830112610a6f57600080fd5b813581811115610a8157610a81610a1b565b604051601f8201601f19908116603f01168101908382118183101715610aa957610aa9610a1b565b81604052828152876020848701011115610ac257600080fd5b826020860160208301376000928101602001929092525095945050505050565b60008351610af4818460208801610915565b7f40000000000000000000000000000000000000000000000000000000000000009083019081528351610b2e816001840160208801610915565b01600101949350505050565b600181811c90821680610b4e57607f821691505b602082108103610b6e57634e487b7160e01b600052602260045260246000fd5b50919050565b6000808454610b8281610b3a565b60018281168015610b9a5760018114610baf57610bde565b60ff1984168752821515830287019450610bde565b8860005260208060002060005b85811015610bd55781548a820152908401908201610bbc565b50505082870194505b505050508351610bf2818360208801610915565b01949350505050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b601f82111561031c57600081815260208120601f850160051c81016020861015610c515750805b601f850160051c820191505b81811015610c7057828155600101610c5d565b505050505050565b67ffffffffffffffff831115610c9057610c90610a1b565b610ca483610c9e8354610b3a565b83610c2a565b6000601f841160018114610cd85760008515610cc05750838201355b600019600387901b1c1916600186901b178355610d32565b600083815260209020601f19861690835b82811015610d095786850135825560209485019460019092019101610ce9565b5086821015610d265760001960f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610d6957610d69610d39565b500290565b8082018082111561036c5761036c610d39565b634e487b7160e01b600052603260045260246000fd5b600060018201610da957610da9610d39565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082610dd557610dd5610db0565b500690565b600082610de957610de9610db0565b500490565b8181038181111561036c5761036c610d3956fea26469706673582212208341129f32980c50da17d08406fbadc3e9d78371b652bdc9e17aa3274b3d200864736f6c63430008100033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var ERC1155MetadataPrefix__factory = /** @class */ (function (_super) {
    __extends(ERC1155MetadataPrefix__factory, _super);
    function ERC1155MetadataPrefix__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    ERC1155MetadataPrefix__factory.prototype.deploy = function (_prefix, _includeAddress, _admin, overrides) {
        return _super.prototype.deploy.call(this, _prefix, _includeAddress, _admin, overrides || {});
    };
    ERC1155MetadataPrefix__factory.prototype.getDeployTransaction = function (_prefix, _includeAddress, _admin, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _prefix, _includeAddress, _admin, overrides || {});
    };
    ERC1155MetadataPrefix__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ERC1155MetadataPrefix__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ERC1155MetadataPrefix__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ERC1155MetadataPrefix__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ERC1155MetadataPrefix__factory.bytecode = _bytecode;
    ERC1155MetadataPrefix__factory.abi = _abi;
    return ERC1155MetadataPrefix__factory;
}(ethers_1.ContractFactory));
exports.ERC1155MetadataPrefix__factory = ERC1155MetadataPrefix__factory;
