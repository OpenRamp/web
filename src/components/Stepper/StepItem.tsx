import React from 'react';
import {Spacer} from '../kit';
import {TStepItem} from './Stepper';

export type StepItemProps = TStepItem & {
  index: number;
  active: boolean;
  divider: boolean;
};

export function StepItem(props: StepItemProps) {
  const {active, index, title, details, divider} = props;

  const activeClass = active ? 'active' : '';

  return (
    <div className="step-item d-flex">
      <div className="d-flex flex-column align-items-center">
        <div
          className={`step-index ${activeClass} d-flex align-items-center justify-content-center`}
        >
          <p className="m-0 text-light fs-5">{index + 1}</p>
        </div>
        {divider ? <div className={`step-divider ${activeClass}`} /> : null}
      </div>
      <Spacer />
      <div>
        <p className="m-0 fs-5 fw-medium m-0">{title}</p>
        <p className="m-0 fs-5 fw-light text-inactive">{details}</p>
      </div>
    </div>
  );
}
