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
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface INiftyswapFactory20Interface extends ethers.utils.Interface {
  functions: {
    "createExchange(address,address)": FunctionFragment;
    "tokensToExchange(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createExchange",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "tokensToExchange",
    values: [string, string]
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
    "NewExchange(address,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewExchange"): EventFragment;
}

export class INiftyswapFactory20 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: INiftyswapFactory20Interface;

  functions: {
    createExchange(
      _token: string,
      _currency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "createExchange(address,address)"(
      _token: string,
      _currency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokensToExchange(
      _token: string,
      _currency: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "tokensToExchange(address,address)"(
      _token: string,
      _currency: string,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  createExchange(
    _token: string,
    _currency: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "createExchange(address,address)"(
    _token: string,
    _currency: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokensToExchange(
    _token: string,
    _currency: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "tokensToExchange(address,address)"(
    _token: string,
    _currency: string,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    createExchange(
      _token: string,
      _currency: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "createExchange(address,address)"(
      _token: string,
      _currency: string,
      overrides?: CallOverrides
    ): Promise<void>;

    tokensToExchange(
      _token: string,
      _currency: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "tokensToExchange(address,address)"(
      _token: string,
      _currency: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    NewExchange(
      token: string | null,
      currency: string | null,
      exchange: null
    ): TypedEventFilter<
      [string, string, string],
      { token: string; currency: string; exchange: string }
    >;
  };

  estimateGas: {
    createExchange(
      _token: string,
      _currency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "createExchange(address,address)"(
      _token: string,
      _currency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokensToExchange(
      _token: string,
      _currency: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokensToExchange(address,address)"(
      _token: string,
      _currency: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createExchange(
      _token: string,
      _currency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "createExchange(address,address)"(
      _token: string,
      _currency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokensToExchange(
      _token: string,
      _currency: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokensToExchange(address,address)"(
      _token: string,
      _currency: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
