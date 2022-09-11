import {numberToHex} from './utils/web3';

export enum Network {
  fantom = 'fantom',
  rinkeby = 'rinkeby',
  mumbai = 'mumbai',
}

export enum NetworkType {
  main = 'main',
  test = 'test',
}

export type NetworkChainInfo = {
  chainId: string; // A 0x-prefixed hexadecimal string
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string; // 2-6 characters long
    decimals: 18;
  };
  rpcUrls: string[];
  blockExplorerUrls?: string[];
  iconUrls?: string[]; // Currently ignored.
};

export type NetworkInfo = {
  [key in NetworkType]: NetworkChainInfo;
};

export type Networks = {
  [key in Network]: NetworkInfo;
};

export const networks: Networks = {
  [Network.fantom]: {
    main: {
      chainId: numberToHex(250),
      chainName: 'Fantom Main',
      nativeCurrency: {
        name: 'Fantom Opera',
        symbol: 'FTM',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.ankr.com/fantom/'],
    },
    test: {
      chainId: '0xfa2',
      chainName: 'Fantom Testnet',
      nativeCurrency: {
        name: 'Fantom Testnet',
        symbol: 'FTM',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.testnet.fantom.network/'],
    },
  },
  [Network.rinkeby]: {
    main: {
      chainId: numberToHex(4),
      chainName: 'Rinkeby Test Network',
      nativeCurrency: {
        name: 'Rinkeby Test Network',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://rinkeby.infura.io/v3/'],
      blockExplorerUrls: ['https://rinkeby.etherscan.io'],
    },
    test: {
      chainId: numberToHex(4),
      chainName: 'Rinkeby Test Network',
      nativeCurrency: {
        name: 'Rinkeby Test Network',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://rinkeby.infura.io/v3/'],
      blockExplorerUrls: ['https://rinkeby.etherscan.io'],
    },
  },
  [Network.mumbai]: {
    main: {
      chainId: numberToHex(80001),
      chainName: 'Mumbai Test',
      nativeCurrency: {
        name: 'Mumbai Test',
        symbol: 'MATIC',
        decimals: 18,
      },
      rpcUrls: ['https://matic-mumbai.chainstacklabs.com/'],
      blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
    },
    test: {
      chainId: numberToHex(4),
      chainName: 'Rinkeby Test Network',
      nativeCurrency: {
        name: 'Rinkeby Test Network',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://rinkeby.infura.io/v3/'],
      blockExplorerUrls: ['https://rinkeby.etherscan.io'],
    },
  },
};

export const defaultNetwork: NetworkChainInfo = networks.mumbai.main;
