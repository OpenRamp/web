import React from 'react';
import {WalletHeader} from '../wallet/WalletHeader';

export function Header() {
  return (
    <header className="px-5 py-4 d-flex align-items-center justify-content-between">
      <h1 className="fs-1 fw-bolder">OpenRamp</h1>
      <WalletHeader />
    </header>
  );
}
