import React from 'react';
import {RootRouter} from './router/rootRouter';
import {BrowserRouter} from 'react-router-dom';
import {MetaMaskProvider} from './hooks/useMetaMask';

function App() {
  return (
    <MetaMaskProvider>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </MetaMaskProvider>
  );
}

export default App;
