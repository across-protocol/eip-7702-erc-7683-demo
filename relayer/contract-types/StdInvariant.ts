import type { FunctionFragment, Result } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'
import type {
  OnEvent,
  TypedEvent,
  TypedEventFilter,
  TypedListener,
} from './common'

export declare namespace StdInvariant {
  export type FuzzSelectorStruct = { addr: string; selectors: BytesLike[] }

  export type FuzzSelectorStructOutput = [string, string[]] & {
    addr: string
    selectors: string[]
  }

  export type FuzzArtifactSelectorStruct = {
    artifact: string
    selectors: BytesLike[]
  }

  export type FuzzArtifactSelectorStructOutput = [string, string[]] & {
    artifact: string
    selectors: string[]
  }

  export type FuzzInterfaceStruct = { addr: string; artifacts: string[] }

  export type FuzzInterfaceStructOutput = [string, string[]] & {
    addr: string
    artifacts: string[]
  }
}

export interface StdInvariantInterface extends utils.Interface {
  functions: {
    'excludeArtifacts()': FunctionFragment
    'excludeContracts()': FunctionFragment
    'excludeSelectors()': FunctionFragment
    'excludeSenders()': FunctionFragment
    'targetArtifactSelectors()': FunctionFragment
    'targetArtifacts()': FunctionFragment
    'targetContracts()': FunctionFragment
    'targetInterfaces()': FunctionFragment
    'targetSelectors()': FunctionFragment
    'targetSenders()': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'excludeArtifacts'
      | 'excludeContracts'
      | 'excludeSelectors'
      | 'excludeSenders'
      | 'targetArtifactSelectors'
      | 'targetArtifacts'
      | 'targetContracts'
      | 'targetInterfaces'
      | 'targetSelectors'
      | 'targetSenders',
  ): FunctionFragment

  encodeFunctionData(
    functionFragment: 'excludeArtifacts',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'excludeContracts',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'excludeSelectors',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'excludeSenders',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'targetArtifactSelectors',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'targetArtifacts',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'targetContracts',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'targetInterfaces',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'targetSelectors',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'targetSenders',
    values?: undefined,
  ): string

  decodeFunctionResult(
    functionFragment: 'excludeArtifacts',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'excludeContracts',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'excludeSelectors',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'excludeSenders',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'targetArtifactSelectors',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'targetArtifacts',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'targetContracts',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'targetInterfaces',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'targetSelectors',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'targetSenders',
    data: BytesLike,
  ): Result

  events: {}
}

export interface StdInvariant extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: StdInvariantInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    excludeArtifacts(
      overrides?: CallOverrides,
    ): Promise<[string[]] & { excludedArtifacts_: string[] }>

    excludeContracts(
      overrides?: CallOverrides,
    ): Promise<[string[]] & { excludedContracts_: string[] }>

    excludeSelectors(overrides?: CallOverrides): Promise<
      [StdInvariant.FuzzSelectorStructOutput[]] & {
        excludedSelectors_: StdInvariant.FuzzSelectorStructOutput[]
      }
    >

    excludeSenders(
      overrides?: CallOverrides,
    ): Promise<[string[]] & { excludedSenders_: string[] }>

    targetArtifactSelectors(overrides?: CallOverrides): Promise<
      [StdInvariant.FuzzArtifactSelectorStructOutput[]] & {
        targetedArtifactSelectors_: StdInvariant.FuzzArtifactSelectorStructOutput[]
      }
    >

    targetArtifacts(
      overrides?: CallOverrides,
    ): Promise<[string[]] & { targetedArtifacts_: string[] }>

    targetContracts(
      overrides?: CallOverrides,
    ): Promise<[string[]] & { targetedContracts_: string[] }>

    targetInterfaces(overrides?: CallOverrides): Promise<
      [StdInvariant.FuzzInterfaceStructOutput[]] & {
        targetedInterfaces_: StdInvariant.FuzzInterfaceStructOutput[]
      }
    >

    targetSelectors(overrides?: CallOverrides): Promise<
      [StdInvariant.FuzzSelectorStructOutput[]] & {
        targetedSelectors_: StdInvariant.FuzzSelectorStructOutput[]
      }
    >

    targetSenders(
      overrides?: CallOverrides,
    ): Promise<[string[]] & { targetedSenders_: string[] }>
  }

  excludeArtifacts(overrides?: CallOverrides): Promise<string[]>

  excludeContracts(overrides?: CallOverrides): Promise<string[]>

  excludeSelectors(
    overrides?: CallOverrides,
  ): Promise<StdInvariant.FuzzSelectorStructOutput[]>

  excludeSenders(overrides?: CallOverrides): Promise<string[]>

  targetArtifactSelectors(
    overrides?: CallOverrides,
  ): Promise<StdInvariant.FuzzArtifactSelectorStructOutput[]>

  targetArtifacts(overrides?: CallOverrides): Promise<string[]>

  targetContracts(overrides?: CallOverrides): Promise<string[]>

  targetInterfaces(
    overrides?: CallOverrides,
  ): Promise<StdInvariant.FuzzInterfaceStructOutput[]>

  targetSelectors(
    overrides?: CallOverrides,
  ): Promise<StdInvariant.FuzzSelectorStructOutput[]>

  targetSenders(overrides?: CallOverrides): Promise<string[]>

  callStatic: {
    excludeArtifacts(overrides?: CallOverrides): Promise<string[]>

    excludeContracts(overrides?: CallOverrides): Promise<string[]>

    excludeSelectors(
      overrides?: CallOverrides,
    ): Promise<StdInvariant.FuzzSelectorStructOutput[]>

    excludeSenders(overrides?: CallOverrides): Promise<string[]>

    targetArtifactSelectors(
      overrides?: CallOverrides,
    ): Promise<StdInvariant.FuzzArtifactSelectorStructOutput[]>

    targetArtifacts(overrides?: CallOverrides): Promise<string[]>

    targetContracts(overrides?: CallOverrides): Promise<string[]>

    targetInterfaces(
      overrides?: CallOverrides,
    ): Promise<StdInvariant.FuzzInterfaceStructOutput[]>

    targetSelectors(
      overrides?: CallOverrides,
    ): Promise<StdInvariant.FuzzSelectorStructOutput[]>

    targetSenders(overrides?: CallOverrides): Promise<string[]>
  }

  filters: {}

  estimateGas: {
    excludeArtifacts(overrides?: CallOverrides): Promise<BigNumber>

    excludeContracts(overrides?: CallOverrides): Promise<BigNumber>

    excludeSelectors(overrides?: CallOverrides): Promise<BigNumber>

    excludeSenders(overrides?: CallOverrides): Promise<BigNumber>

    targetArtifactSelectors(overrides?: CallOverrides): Promise<BigNumber>

    targetArtifacts(overrides?: CallOverrides): Promise<BigNumber>

    targetContracts(overrides?: CallOverrides): Promise<BigNumber>

    targetInterfaces(overrides?: CallOverrides): Promise<BigNumber>

    targetSelectors(overrides?: CallOverrides): Promise<BigNumber>

    targetSenders(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    excludeArtifacts(overrides?: CallOverrides): Promise<PopulatedTransaction>

    excludeContracts(overrides?: CallOverrides): Promise<PopulatedTransaction>

    excludeSelectors(overrides?: CallOverrides): Promise<PopulatedTransaction>

    excludeSenders(overrides?: CallOverrides): Promise<PopulatedTransaction>

    targetArtifactSelectors(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    targetArtifacts(overrides?: CallOverrides): Promise<PopulatedTransaction>

    targetContracts(overrides?: CallOverrides): Promise<PopulatedTransaction>

    targetInterfaces(overrides?: CallOverrides): Promise<PopulatedTransaction>

    targetSelectors(overrides?: CallOverrides): Promise<PopulatedTransaction>

    targetSenders(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
