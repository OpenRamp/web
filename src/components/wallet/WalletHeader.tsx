import React from 'react';
import {shortenedString} from '../../utils/shortenedString';
import {Spacer} from '../kit';

export function WalletHeader() {
  return (
    <div className="rounded-5 border border-2 border-light px-3 py-1 text-gray bg-eee d-flex align-items-center">
      <div className="fs-6 fw-bold">
        {shortenedString('0xd8ba23a5FBfDC54Acea3ccdf57a876af349A9702', 12, 3)}
      </div>
      <Spacer />
      <div className="position-absolute wallet-avatar">
        <img
          src="/assets/images/wallet-avatar.png"
          width="48px"
          height="48px"
        />
      </div>
    </div>
  );
}
