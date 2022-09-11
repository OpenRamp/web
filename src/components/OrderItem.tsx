import React from 'react';
import {Spacer} from './kit';
import {shortenedString} from '../utils/shortenedString';

export type OrderItemProps = {
  index: number;
  wallet: string;
  ordersCount: number;
  price: number;
  method: string;
  active: boolean;
  onClick: () => void;
};

export function OrderItem(props: OrderItemProps) {
  const {method, ordersCount, price, wallet, index, active, onClick} = props;

  return (
    <div
      className={`buy-order pointer p-4 bg-white rounded-16 d-flex mb-3 ${
        active ? 'active' : ''
      }`}
      onClick={onClick}
    >
      <div className="order-index d-flex align-items-center justify-content-center rounded-4">
        <p className="m-0 fs-2 fw-medium">{index + 1}</p>
      </div>
      <Spacer />
      <div className="d-flex flex-column justify-content-around flex-grow-1">
        <p className="fs-5 m-0">{shortenedString(wallet, 15, 3)}</p>
        <p className="fs-6 m-0 text-inactive">{ordersCount} orders</p>
      </div>
      <div className="d-flex flex-column align-items-end justify-content-around">
        <p className="fs-5 m-0">R${price}</p>
        <p className="fs-6 m-0 text-inactive">Method: {method}</p>
      </div>
    </div>
  );
}
