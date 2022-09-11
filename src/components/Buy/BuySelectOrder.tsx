import React, {useState} from 'react';
import {Spacer} from '../kit';
import {OrderItem, OrderItemProps} from '../OrderItem';

const orders: Omit<OrderItemProps, 'index' | 'active' | 'onClick'>[] = [
  {
    method: 'Cash',
    ordersCount: 120,
    wallet: '0xd8ba23a5FBfDC54Acea3ccdf57a876af349A9702',
    price: 520,
  },
  {
    method: 'Cash',
    ordersCount: 87,
    wallet: '0xe3E94eEBC5c193B8CBc7245E5E6B9dE46CAa5673',
    price: 128,
  },
  {
    method: 'Cash',
    ordersCount: 100,
    wallet: '0xE3F0bd3Cb3Ff2Ec42D099763D6088dB74A09AFFF',
    price: 471,
  },
  {
    method: 'Cash',
    ordersCount: 1245,
    wallet: '0x7816548D17CA7Abb2d13AF79Af2809fe06AC5Af9',
    price: 978,
  },
];

export function BuySelectOrder() {
  const [selectedOrder, setSelectedOrder] = useState<number>(0);

  return (
    <div>
      <p className="fs-3 fw-medium text-center">Select an Order</p>
      <Spacer times={2} />
      {orders.map((order, index) => (
        <OrderItem
          key={index}
          index={index}
          active={index === selectedOrder}
          onClick={() => setSelectedOrder(index)}
          {...order}
        />
      ))}
      <Spacer />
      <p className="text-center text-gray fs-6 pointer">Load More</p>
    </div>
  );
}
