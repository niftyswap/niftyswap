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
exports.Ownable__factory = void 0;
var ethers_1 = require("ethers");
var Ownable__factory = /** @class */ (function (_super) {
    __extends(Ownable__factory, _super);
    function Ownable__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    Ownable__factory.prototype.deploy = function (_firstOwner, overrides) {
        return _super.prototype.deploy.call(this, _firstOwner, overrides || {});
    };
    Ownable__factory.prototype.getDeployTransaction = function (_firstOwner, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _firstOwner, overrides || {});
    };
    Ownable__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Ownable__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Ownable__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return Ownable__factory;
}(ethers_1.ContractFactory));
exports.Ownable__factory = Ownable__factory;
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_firstOwner",
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
];
var _bytecode = "0x608060405234801561001057600080fd5b506040516103aa3803806103aa83398101604081905261002f9161007d565b600080546001600160a01b0319166001600160a01b03831690811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506100ab565b60006020828403121561008e578081fd5b81516001600160a01b03811681146100a4578182fd5b9392505050565b6102f0806100ba6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063893d20e81461003b578063f2fde38b14610059575b600080fd5b61004361006e565b60405161005091906101df565b60405180910390f35b61006c6100673660046101a4565b61008a565b005b60005473ffffffffffffffffffffffffffffffffffffffff1690565b60005473ffffffffffffffffffffffffffffffffffffffff1633146100e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100db9061025d565b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610131576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100db90610200565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691821780845560405192939116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a350565b6000602082840312156101b5578081fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146101d8578182fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b6020808252602a908201527f4f776e61626c65237472616e736665724f776e6572736869703a20494e56414c60408201527f49445f4144445245535300000000000000000000000000000000000000000000606082015260800190565b60208082526026908201527f4f776e61626c65236f6e6c794f776e65723a2053454e4445525f49535f4e4f5460408201527f5f4f574e4552000000000000000000000000000000000000000000000000000060608201526080019056fea2646970667358221220deda972f062b9e45d7d07c2d3a89c4d34a969bfe437590593e7274b7f089c83e64736f6c63430007040033";
