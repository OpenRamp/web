import React from 'react';
import {StepItem} from './StepItem';
import {Button} from 'react-bootstrap';
import {Spacer} from '../kit';
import {TStepItem} from '../../config';

export type StepperProps = {
  steps: TStepItem[];
  activeStep: number;
  onButtonClick: () => void;
};

export function Stepper(props: StepperProps) {
  const {steps, activeStep, onButtonClick} = props;

  return (
    <div className="stepper-container d-flex flex-column">
      {steps.map((item, i) => (
        <StepItem
          {...item}
          index={i}
          active={i < activeStep}
          divider={steps.length !== i + 1}
        />
      ))}
      <Spacer times={5} />
      <Button className="rounded-16" onClick={onButtonClick}>
        <p className="text-center m-0 fs-4 fw-bold">{steps[activeStep].buttonTitle}</p>
      </Button>
    </div>
  );
}
