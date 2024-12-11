/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  XAccount,
  XAccountInterface,
} from "../../ExperimentalDelegation.sol/XAccount";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_destinationSettler",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "DESTINATION_SETTLER",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "xExecute",
    inputs: [
      {
        name: "userCalls",
        type: "tuple",
        internalType: "struct CallByUser",
        components: [
          {
            name: "user",
            type: "address",
            internalType: "address",
          },
          {
            name: "nonce",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "asset",
            type: "tuple",
            internalType: "struct Asset",
            components: [
              {
                name: "token",
                type: "address",
                internalType: "address",
              },
              {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
              },
            ],
          },
          {
            name: "chainId",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "signature",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "calls",
            type: "tuple[]",
            internalType: "struct Call[]",
            components: [
              {
                name: "target",
                type: "address",
                internalType: "address",
              },
              {
                name: "callData",
                type: "bytes",
                internalType: "bytes",
              },
              {
                name: "value",
                type: "uint256",
                internalType: "uint256",
              },
            ],
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "error",
    name: "CallReverted",
    inputs: [
      {
        name: "index",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "calls",
        type: "tuple[]",
        internalType: "struct Call[]",
        components: [
          {
            name: "target",
            type: "address",
            internalType: "address",
          },
          {
            name: "callData",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "value",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
  },
  {
    type: "error",
    name: "InvalidCall",
    inputs: [
      {
        name: "index",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "calls",
        type: "tuple[]",
        internalType: "struct Call[]",
        components: [
          {
            name: "target",
            type: "address",
            internalType: "address",
          },
          {
            name: "callData",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "value",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
  },
  {
    type: "error",
    name: "NotCalledByDestinationSettler",
    inputs: [],
  },
  {
    type: "error",
    name: "ReentrancyGuardReentrantCall",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x60a034607057601f61059c38819003918201601f19168301916001600160401b03831184841017607457808492602094604052833981010312607057516001600160a01b038116810360705760015f5560805260405161051390816100898239608051818181604a01526101cc0152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe608060409080825260049081361015610016575f80fd5b5f3560e01c918263145a3fc21461007d575050635a2e7a5514610037575f80fd5b34610079575f36600319011261007957517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5f80fd5b83346100795760031990602036830181136100795767ffffffffffffffff9484358681116100795760e0813603958601126100795760c08201828110888211176103775784526100ce8187016103c4565b825260249687820135848401528460449660431901126100795784519585870187811083821117610365578652610107604484016103c4565b875260649660648401358682015286850152608483013592828416840361007957606093606086015260a48101358381116100795761014b908a36918401016103f4565b608086015260c481013590838211610079570192366023850112156100795788840135978389116103535760059a8960051b93818961018b81880161038a565b809d815201958801019636881161007957828101955b8887106102d1578e8e8e8e8e60a08f0192835260025f54146102c15760025f556001600160a01b03927f0000000000000000000000000000000000000000000000000000000000000000841633036102b15751925f5b84518110156102ab578281881b860101518381019081515115158061029f575b610285575f91818786859451169101519151918783519301915af13d15610280573d61024a610245826103d8565b61038a565b9081525f853d92013e5b15610261576001016101f7565b8561027c8686519384936303918b1160e61b85528401610430565b0390fd5b610254565b855163388ddcc360e21b81528061027c8986838d01610430565b50838151163b15610217565b60015f55005b825163c9c82d7560e01b81528590fd5b8151633ee5aeb560e01b81528490fd5b863588811161007957820190866023198336030112610079578c51908782018281108b82111761033f578e526103088684016103c4565b825284830135918a8311610079578e888f9561032a87968b36918401016103f4565b868501520135908201528152019601956101a1565b508f60418791634e487b7160e01b5f52525ffd5b8a60418b634e487b7160e01b5f52525ffd5b8960418a634e487b7160e01b5f52525ffd5b604187634e487b7160e01b5f525260245ffd5b6040519190601f01601f1916820167ffffffffffffffff8111838210176103b057604052565b634e487b7160e01b5f52604160045260245ffd5b35906001600160a01b038216820361007957565b67ffffffffffffffff81116103b057601f01601f191660200190565b81601f820112156100795780359061040e610245836103d8565b928284526020838301011161007957815f926020809301838601378301015290565b9060409160408101918152602090604082820152845180935260609360608201908360608660051b8501019701955f935b86851061047357505050505050505090565b90919293949596978680600192605f198582030188528b5190848060a01b0382511681528282015191878483015288835191828a8501528286608096018686015e5f848401860152015189830152601f01601f191601019a0198979691909101940192919061046156fea2646970667358221220703587cd11adf7813884fb3bc2d2271027b1f5a47198bac7db69f445a057e4ac64736f6c63430008190033";

type XAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: XAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class XAccount__factory extends ContractFactory {
  constructor(...args: XAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _destinationSettler: string,
    overrides?: Overrides & { from?: string }
  ): Promise<XAccount> {
    return super.deploy(
      _destinationSettler,
      overrides || {}
    ) as Promise<XAccount>;
  }
  override getDeployTransaction(
    _destinationSettler: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(_destinationSettler, overrides || {});
  }
  override attach(address: string): XAccount {
    return super.attach(address) as XAccount;
  }
  override connect(signer: Signer): XAccount__factory {
    return super.connect(signer) as XAccount__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): XAccountInterface {
    return new utils.Interface(_abi) as XAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): XAccount {
    return new Contract(address, _abi, signerOrProvider) as XAccount;
  }
}
