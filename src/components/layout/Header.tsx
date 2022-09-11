import React from 'react';
import {WalletHeader} from '../wallet/WalletHeader';
import {Link} from 'react-router-dom';

export function Header() {
  return (
    <header className="px-5 py-4 d-flex align-items-center justify-content-between">
      <Link to="/" className="text-decoration-none text-dark">
        <h1 className="fs-1 fw-bolder">OpenRamp</h1>
      </Link>
      <WalletHeader />
    </header>
  );
}
