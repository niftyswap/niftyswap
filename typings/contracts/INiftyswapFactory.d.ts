/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface INiftyswapFactoryInterface extends ethers.utils.Interface {
  functions: {
    "createExchange(address,address,uint256)": FunctionFragment;
    "tokensToExchange(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createExchange",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokensToExchange",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "createExchange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokensToExchange",
    data: BytesLike
  ): Result;

  events: {
    "NewExchange(address,address,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewExchange"): EventFragment;
}

export class INiftyswapFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: INiftyswapFactoryInterface;

  functions: {
    createExchange(
      _token: string,
      _currency: string,
      _currencyID: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createExchange(address,address,uint256)"(
      _token: string,
      _currency: string,
      _currencyID: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    tokensToExchange(
      _token: string,
      _currency: string,
      _currencyID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "tokensToExchange(address,address,uint256)"(
      _token: string,
      _currency: string,
      _currencyID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  createExchange(
    _token: string,
    _currency: string,
    _currencyID: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createExchange(address,address,uint256)"(
    _token: string,
    _currency: string,
    _currencyID: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  tokensToExchange(
    _token: string,
    _currency: string,
    _currencyID: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "tokensToExchange(address,address,uint256)"(
    _token: string,
    _currency: string,
    _currencyID: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    createExchange(
      _token: string,
      _currency: string,
      _currencyID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "createExchange(address,address,uint256)"(
      _token: string,
      _currency: string,
      _currencyID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    tokensToExchange(
      _token: string,
      _currency: string,
      _currencyID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "tokensToExchange(address,address,uint256)"(
      _token: string,
      _currency: string,
      _currencyID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    NewExchange(
      token: string | null,
      currency: string | null,
      currencyID: BigNumberish | null,
      exchange: null
    ): EventFilter;
  };

  estimateGas: {
    createExchange(
      _token: string,
      _currency: string,
      _currencyID: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createExchange(address,address,uint256)"(
      _token: string,
      _currency: string,
      _currencyID: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    tokensToExchange(
      _token: string,
      _currency: string,
      _currencyID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokensToExchange(address,address,uint256)"(
      _token: string,
      _currency: string,
      _currencyID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createExchange(
      _token: string,
      _currency: string,
      _currencyID: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createExchange(address,address,uint256)"(
      _token: string,
      _currency: string,
      _currencyID: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    tokensToExchange(
      _token: string,
      _currency: string,
      _currencyID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokensToExchange(address,address,uint256)"(
      _token: string,
      _currency: string,
      _currencyID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
