/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface INiftyswapFactoryInterface extends utils.Interface {
  functions: {
    "createExchange(address,address,uint256)": FunctionFragment;
    "tokensToExchange(address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "createExchange" | "tokensToExchange"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createExchange",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "tokensToExchange",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
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

export interface NewExchangeEventObject {
  token: string;
  currency: string;
  currencyID: BigNumber;
  exchange: string;
}
export type NewExchangeEvent = TypedEvent<
  [string, string, BigNumber, string],
  NewExchangeEventObject
>;

export type NewExchangeEventFilter = TypedEventFilter<NewExchangeEvent>;

export interface INiftyswapFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: INiftyswapFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createExchange(
      _token: PromiseOrValue<string>,
      _currency: PromiseOrValue<string>,
      _currencyID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tokensToExchange(
      _token: PromiseOrValue<string>,
      _currency: PromiseOrValue<string>,
      _currencyID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  createExchange(
    _token: PromiseOrValue<string>,
    _currency: PromiseOrValue<string>,
    _currencyID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tokensToExchange(
    _token: PromiseOrValue<string>,
    _currency: PromiseOrValue<string>,
    _currencyID: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    createExchange(
      _token: PromiseOrValue<string>,
      _currency: PromiseOrValue<string>,
      _currencyID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    tokensToExchange(
      _token: PromiseOrValue<string>,
      _currency: PromiseOrValue<string>,
      _currencyID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "NewExchange(address,address,uint256,address)"(
      token?: PromiseOrValue<string> | null,
      currency?: PromiseOrValue<string> | null,
      currencyID?: PromiseOrValue<BigNumberish> | null,
      exchange?: null
    ): NewExchangeEventFilter;
    NewExchange(
      token?: PromiseOrValue<string> | null,
      currency?: PromiseOrValue<string> | null,
      currencyID?: PromiseOrValue<BigNumberish> | null,
      exchange?: null
    ): NewExchangeEventFilter;
  };

  estimateGas: {
    createExchange(
      _token: PromiseOrValue<string>,
      _currency: PromiseOrValue<string>,
      _currencyID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tokensToExchange(
      _token: PromiseOrValue<string>,
      _currency: PromiseOrValue<string>,
      _currencyID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createExchange(
      _token: PromiseOrValue<string>,
      _currency: PromiseOrValue<string>,
      _currencyID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tokensToExchange(
      _token: PromiseOrValue<string>,
      _currency: PromiseOrValue<string>,
      _currencyID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
