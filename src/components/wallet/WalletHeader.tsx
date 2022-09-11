import React from 'react';
import {shortenedString} from '../../utils/shortenedString';
import {useMetaMask} from '../../hooks/useMetaMask';
import {defaultNetwork} from '../../networks';

export function WalletHeader() {
  const metaMask = useMetaMask();

  console.log(metaMask, '<=== metamsl');

  const {
    handleConnect,
    loading,
    error,
    connected,
    primaryAccount,
    balance,
    handleSwitchNetwork,
    isCorrectNetwork,
    handleDisconnect,
  } = metaMask;

  console.log(primaryAccount, 'primaryAccount');

  if (primaryAccount) {
    return (
      <div className="d-flex align-items-center">
        <div className="rounded-5 border border-2 border-light px-3 py-1 text-gray bg-eee d-flex align-items-center">
          <div className="fs-6 fw-bold">
            {primaryAccount ? shortenedString(primaryAccount, 12, 3) : null}
          </div>
        </div>
        {!isCorrectNetwork ? (
          <div
            className="btn btn-primary pointer"
            style={{height: 'unset'}}
            onClick={() => handleSwitchNetwork(defaultNetwork)}
          >
            <p className="m-0">Switch to Mumbai Network</p>
          </div>
        ) : null}
      </div>
    );
  } else {
    return (
      <div
        className="btn btn-dark rounded-5 border border-2 border-light px-3 py-1 text-gray d-flex align-items-center pointer"
        style={{height: 'unset'}}
        onClick={handleConnect}
      >
        <p className="m-0 text-white">Connect to Metamask</p>
      </div>
    );
  }
}
