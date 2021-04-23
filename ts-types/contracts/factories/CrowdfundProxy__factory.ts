/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { CrowdfundProxy } from "../CrowdfundProxy";

export class CrowdfundProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<CrowdfundProxy> {
    return super.deploy(overrides || {}) as Promise<CrowdfundProxy>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CrowdfundProxy {
    return super.attach(address) as CrowdfundProxy;
  }
  connect(signer: Signer): CrowdfundProxy__factory {
    return super.connect(signer) as CrowdfundProxy__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrowdfundProxy {
    return new Contract(address, _abi, signerOrProvider) as CrowdfundProxy;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
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
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fundingCap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "logic",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "operator",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "operatorPercent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "status",
    outputs: [
      {
        internalType: "enum CrowdfundStorage.Status",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50336001600160a01b031663d7dfa0dd6040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156200004e57600080fd5b505af115801562000063573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000089919062000307565b600b60006101000a8154816001600160a01b0302191690836001600160a01b03160217905550336001600160a01b031663890357306040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620000eb57600080fd5b505af115801562000100573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200012a91908101906200032d565b600080600160006002600060046000600360008a919050908051906020019062000156929190620001ae565b505088516200016b919060208b0190620001ae565b5050969096559590955580546001600160a01b039687166101009690960a95860296909502199094169490941790925550506005805460ff19169055506200042a565b828054620001bc90620003be565b90600052602060002090601f016020900481019282620001e057600085556200022b565b82601f10620001fb57805160ff19168380011785556200022b565b828001600101855582156200022b579182015b828111156200022b5782518255916020019190600101906200020e565b50620002399291506200023d565b5090565b5b808211156200023957600081556001016200023e565b600082601f83011262000265578081fd5b81516001600160401b0380821115620002825762000282620003fb565b604051601f8301601f19908116603f01168101908282118183101715620002ad57620002ad620003fb565b81604052838152602092508683858801011115620002c9578485fd5b8491505b83821015620002ec5785820183015181830184015290820190620002cd565b83821115620002fd57848385830101525b9695505050505050565b60006020828403121562000319578081fd5b8151620003268162000411565b9392505050565b600080600080600060a0868803121562000345578081fd5b8551620003528162000411565b60208701516040880151606089015192975090955093506001600160401b03808211156200037e578283fd5b6200038c89838a0162000254565b93506080880151915080821115620003a2578283fd5b50620003b18882890162000254565b9150509295509295909350565b600181811c90821680620003d357607f821691505b60208210811415620003f557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146200042757600080fd5b50565b610555806200043a6000396000f3fe6080604052600436106100cb5760003560e01c80637b4044a011610074578063d7dfa0dd1161004e578063d7dfa0dd14610287578063dd62ed3e146102b4578063e3b2594f146102ec576100d2565b80637b4044a01461022f5780637ecebe001461024557806395d89b4114610272576100d2565b8063313ce567116100a5578063313ce56714610189578063570ca735146101b057806370a0823114610202576100d2565b806306fdde031461011357806318160ddd1461013e578063200d2ed214610162576100d2565b366100d257005b600b5460405173ffffffffffffffffffffffffffffffffffffffff9091169036600082376000803683855af43d806000843e81801561010f578184f35b8184fd5b34801561011f57600080fd5b50610128610302565b604051610135919061045a565b60405180910390f35b34801561014a57600080fd5b5061015460075481565b604051908152602001610135565b34801561016e57600080fd5b5060055461017c9060ff1681565b6040516101359190610419565b34801561019557600080fd5b5061019e601281565b60405160ff9091168152602001610135565b3480156101bc57600080fd5b506000546101dd9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610135565b34801561020e57600080fd5b5061015461021d3660046103c6565b60086020526000908152604090205481565b34801561023b57600080fd5b5061015460025481565b34801561025157600080fd5b506101546102603660046103c6565b600a6020526000908152604090205481565b34801561027e57600080fd5b50610128610390565b34801561029357600080fd5b50600b546101dd9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102c057600080fd5b506101546102cf3660046103e7565b600960209081526000928352604080842090915290825290205481565b3480156102f857600080fd5b5061015460015481565b6004805461030f906104cb565b80601f016020809104026020016040519081016040528092919081815260200182805461033b906104cb565b80156103885780601f1061035d57610100808354040283529160200191610388565b820191906000526020600020905b81548152906001019060200180831161036b57829003601f168201915b505050505081565b6003805461030f906104cb565b803573ffffffffffffffffffffffffffffffffffffffff811681146103c157600080fd5b919050565b6000602082840312156103d7578081fd5b6103e08261039d565b9392505050565b600080604083850312156103f9578081fd5b6104028361039d565b91506104106020840161039d565b90509250929050565b6020810160028310610454577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b6000602080835283518082850152825b818110156104865785810183015185820160400152820161046a565b818111156104975783604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600181811c908216806104df57607f821691505b60208210811415610519577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b5091905056fea264697066735822122013d7ac40642437f121f5f9c6c81253f49bfda5dc64a2e11a62ed94cf5799509464736f6c63430008040033";
