import React from 'react';
import {StepItem} from './StepItem';
import {Button} from 'react-bootstrap';
import {Spacer} from '../kit';

export type TStepItem = {
  title: string;
  details: string;
};

export function Stepper() {
  const stepperItems: TStepItem[] = [
    {
      title: 'Add Order',
      details: 'Choose coin and currency',
    },
    {
      title: 'Find a Merchant',
      details: 'Select the best offer',
    },
    {
      title: 'Pay',
      details: 'Start the transaction',
    },
    {
      title: 'Release Money',
      details: 'Confirm the transfer',
    },
  ];

  return (
    <div className="stepper-container d-flex flex-column">
      {stepperItems.map((item, i) => (
        <StepItem
          key={item.title}
          {...item}
          index={i}
          active={i < 2}
          divider={stepperItems.length !== i + 1}
        />
      ))}
      <Spacer times={5} />
      <Button className="rounded-16">
        <p className="text-center m-0 fs-4 fw-bold">Approve Payment</p>
      </Button>
    </div>
  );
}
