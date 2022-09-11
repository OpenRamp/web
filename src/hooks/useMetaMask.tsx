import {
  createContext,
  Dispatch,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {defaultNetwork, NetworkChainInfo} from '../networks';

export type MetaMaskContextState = {
  connected: boolean;
  isCorrectNetwork: boolean;
  accounts: string[];
  balance: string;
  primaryAccount: string;
  setConnected: Dispatch<boolean>;
  setAccounts: Dispatch<string[]>;
  isMetaMaskInstalled: boolean;
  loading: boolean;
  error: string;
  chainId: string;
  handleConnect: () => void;
  handleSwitchNetwork: (network?: NetworkChainInfo) => void;
  handleAddNetwork: (network?: NetworkChainInfo) => void;
  handleDisconnect: () => void;
};

export const metaMaskContextInitialState: MetaMaskContextState = {
  connected: false,
  isCorrectNetwork: false,
  accounts: [],
  balance: '',
  primaryAccount: '',
  setConnected: () => {},
  setAccounts: () => {},
  isMetaMaskInstalled: false,
  loading: false,
  error: '',
  chainId: '',
  handleConnect: () => {},
  handleSwitchNetwork: () => {},
  handleAddNetwork: () => {},
  handleDisconnect: () => {},
};

export const MetaMaskContext = createContext<MetaMaskContextState>(
  metaMaskContextInitialState,
);

export type MetaMaskProviderProps = {
  children: any;
};

export function MetaMaskProvider(props: MetaMaskProviderProps) {
  const {children} = props;

  const [isMetaMaskInstalled, setIsMetaMaskInstalled] =
    useState<MetaMaskContextState['isMetaMaskInstalled']>(false);
  const [isCorrectNetwork, setIsCorrectNetwork] =
    useState<MetaMaskContextState['isCorrectNetwork']>(false);
  const [loading, setLoading] =
    useState<MetaMaskContextState['loading']>(false);
  const [error, setError] = useState<MetaMaskContextState['error']>('');
  const [connected, setConnected] =
    useState<MetaMaskContextState['connected']>(false);
  const [accounts, setAccounts] = useState<MetaMaskContextState['accounts']>(
    [],
  );
  const [balance, setBalance] = useState<MetaMaskContextState['balance']>('');
  const [chainId, setChainId] = useState<MetaMaskContextState['chainId']>('');

  useEffect(() => {
    const chainId = window?.ethereum?.chainId;
    if (chainId) {
      setIsCorrectNetwork(chainId === defaultNetwork.chainId);
    }
  }, []);

  useEffect(() => {
    const handleAccountChange = (changes: any) => {
      const isConnected = !!changes.length;
      const chainId = window?.ethereum?.chainId;

      setConnected(isConnected);
      setAccounts(changes);

      if (chainId) {
        setChainId(chainId);
      }

      localStorage.setItem(
        'metamask_state',
        JSON.stringify({
          accounts: changes,
          connected: isConnected,
        }),
      );

      if (!isConnected) {
        handleDisconnect();
      }
    };

    const handleChainChange = (chainId: any) => {
      setIsCorrectNetwork(chainId === defaultNetwork.chainId);
    };

    window?.ethereum?.on('accountsChanged', handleAccountChange);
    window?.ethereum?.on('chainChanged', handleChainChange);

    return () => {
      window?.ethereum?.removeListener('accountsChanged', handleAccountChange);
      window?.ethereum?.removeListener('chainChanged', handleChainChange);
    };
  }, []);

  useEffect(() => {
    setIsMetaMaskInstalled(typeof window?.ethereum !== 'undefined');
    const storage = localStorage.getItem('metamask_state');
    try {
      if (storage) {
        const persistedStorage = JSON.parse(storage);
        if (
          persistedStorage?.accounts?.length &&
          persistedStorage.connected &&
          window?.ethereum?.isConnected()
        ) {
          setConnected(true);
          setAccounts(persistedStorage.accounts);
          handleGetBalance(persistedStorage.accounts[0]);
        }
      }
    } catch (e) {}
  }, []);

  const handleGetBalance = useCallback(async (account: string) => {
    try {
      const balance = await window?.ethereum.request<string>({
        method: 'eth_getBalance',
        params: [account, 'latest'],
      });
      if (balance) {
        setBalance(balance);
      }
    } catch (e) {
      console.log(e, 'e inside handleGetBalance');
    }
  }, []);

  const handleConnect = useCallback(async () => {
    if (!isMetaMaskInstalled) {
      setError('Metamask is not installed!');
      return;
    }
    setLoading(true);
    try {
      const accounts = (await window?.ethereum?.request({
        method: 'eth_requestAccounts',
      })) as unknown as string[];
      if (accounts) {
        const account = accounts[0];
        setAccounts(accounts);
        setConnected(true);
        setError('');
        localStorage.setItem(
          'metamask_state',
          JSON.stringify({
            accounts,
            connected: true,
          }),
        );
        await handleGetBalance(account);
      }
    } catch (e: any) {
      console.log(e, 'e is here');
      setError(e?.message || 'Unknown error metamask');
    } finally {
      setLoading(false);
    }
  }, [isMetaMaskInstalled]);

  const handleSwitchNetwork = useCallback(
    async (network: NetworkChainInfo = defaultNetwork) => {
      try {
        await window?.ethereum?.request({
          method: 'wallet_switchEthereumChain',
          params: [{chainId: network.chainId}],
        });
      } catch (e: any) {
        if (e.code === 4902) {
          await handleAddNetwork(network);
        }
        console.log(e, 'e inside switch network');
      }
    },
    [],
  );

  const handleAddNetwork = useCallback(
    async (network: NetworkChainInfo = defaultNetwork) => {
      try {
        await window?.ethereum?.request({
          method: 'wallet_addEthereumChain',
          params: [network],
        });
      } catch (e) {
        console.log(e, 'e inside handleAddNetwork');
      }
    },
    [],
  );

  const handleDisconnect = useCallback(() => {
    setChainId(metaMaskContextInitialState.chainId);
    setBalance(metaMaskContextInitialState.balance);
    setAccounts(metaMaskContextInitialState.accounts);
    setConnected(metaMaskContextInitialState.connected);
    setError(metaMaskContextInitialState.error);
    setLoading(metaMaskContextInitialState.loading);
  }, []);

  const context = useMemo<MetaMaskContextState>(
    () => ({
      connected,
      setConnected,
      accounts,
      setAccounts,
      isMetaMaskInstalled,
      error,
      loading,
      primaryAccount: accounts[0],
      handleConnect,
      balance,
      handleSwitchNetwork,
      chainId,
      handleAddNetwork,
      isCorrectNetwork,
      handleDisconnect,
    }),
    [
      connected,
      accounts,
      isMetaMaskInstalled,
      handleConnect,
      error,
      loading,
      balance,
      handleSwitchNetwork,
      chainId,
      handleAddNetwork,
      isCorrectNetwork,
      handleDisconnect,
    ],
  );

  return (
    <MetaMaskContext.Provider value={context}>
      {children}
    </MetaMaskContext.Provider>
  );
}

export function useMetaMask() {
  return useContext(MetaMaskContext);
}
