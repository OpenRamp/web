import React from 'react';
import {RootRouter} from './router/rootRouter';
import {BrowserRouter} from 'react-router-dom';
import {MetaMaskProvider} from './hooks/useMetaMask';
import {ToastContainer} from 'react-toastify';

function App() {
  return (
    <MetaMaskProvider>
      <BrowserRouter>
        <RootRouter />
        <ToastContainer />
      </BrowserRouter>
    </MetaMaskProvider>
  );
}

export default App;
