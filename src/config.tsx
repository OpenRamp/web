import React from 'react';
import {SelectCoin} from './components/SelectCoin';
import {BuySelectOrder} from './components/Buy/BuySelectOrder';
import {SellSelectMerchant} from './components/Sell/SellSelectMerchant';

export type TStepItem = {
  key: string;
  title: string;
  details: string;
  component: React.ReactNode;
  buttonTitle: string;
};

export type AppConfig = {
  coins: string[];
  buySteps: TStepItem[];
  sellSteps: TStepItem[];
};

export const config: AppConfig = {
  coins: ['bitcoin', 'ether', 'tether', 'dai'],
  buySteps: [
    {
      key: 'select-coin',
      title: 'Post an Ad',
      details: 'Let buyers find you',
      component: <SelectCoin />,
      buttonTitle: 'Post Ad',
    },
    {
      key: 'accept-order',
      title: 'Accept an Order',
      details: 'Start selling your fiat',
      component: <BuySelectOrder />,
      buttonTitle: 'Accept',
    },
    {
      key: 'pay-order',
      title: 'Pay them',
      details: 'Declare payment',
      component: <div>3</div>,
      buttonTitle: 'I Paid Theme',
    },
    {
      key: 'payment-status',
      title: 'Get Your Coins',
      details: 'Wait until they see your transfer receipt',
      component: <div>4</div>,
      buttonTitle: 'Start Again',
    },
  ],
  sellSteps: [
    {
      key: 'select-coin',
      title: 'Add Order',
      details: 'Choose coin and currency',
      component: <SelectCoin />,
      buttonTitle: 'Find a Merchant',
    },
    {
      key: 'select-merchant',
      title: 'Find a Merchant',
      details: 'Select the best offer',
      component: <SellSelectMerchant />,
      buttonTitle: 'Continue',
    },
    {
      key: 'add-payment-information',
      title: 'Pay',
      details: 'Start the transaction',
      component: <div>3</div>,
      buttonTitle: 'Approve Payment',
    },
    {
      key: 'payment-status',
      title: 'Release Money',
      details: 'Confirm the transfer',
      component: <div>4</div>,
      buttonTitle: 'I Got the Money',
    },
  ],
};
