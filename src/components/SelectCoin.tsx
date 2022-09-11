import React, {useMemo, useState} from 'react';
import {Spacer, TabItem, Tabs} from './kit';
import {config} from '../config';
import {useLocation, useNavigate} from 'react-router-dom';
import {SellForm} from './SellForm';
import {BuyForm} from './BuyForm';

export function SelectCoin() {
  const [selectedCoin, setSelectedCoin] = useState<string>('bitcoin');

  const navigate = useNavigate();
  const {pathname} = useLocation();

  const isSell = useMemo(() => pathname.includes('sell'), [pathname]);

  const tabs = useMemo<TabItem[]>(
    () => [
      {
        title: 'Buy',
        onClick: () => navigate('/buy/select-coin'),
      },
      {
        title: 'Sell',
        onClick: () => navigate('/sell/select-coin'),
      },
    ],
    [navigate],
  );

  return (
    <div>
      <p className="m-0 fs-3 fw-medium text-center">Select Coin</p>
      <Spacer times={2} />
      <div className="d-flex align-items-center justify-content-center">
        {config.coins.map(coin => (
          <img
            onClick={() => setSelectedCoin(coin)}
            key={coin}
            src={`/assets/images/${coin}.png`}
            alt={coin}
            className={`mx-3 pointer selecting-coin ${
              selectedCoin === coin ? 'selected-coin' : ''
            }`}
          />
        ))}
      </div>
      <Spacer times={5} />
      <Tabs tabs={tabs} activeIndex={Number(isSell)} />
      <Spacer />
      <div className="rounded-16 bg-white p-4">
        {isSell ? <SellForm /> : <BuyForm />}
      </div>
    </div>
  );
}
