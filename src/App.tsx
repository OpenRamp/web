import React from 'react';
import {RootRouter} from './router/rootRouter';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <RootRouter />
    </BrowserRouter>
  );
}

export default App;
