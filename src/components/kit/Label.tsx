import React from 'react';
import {Spacer} from './Spacer';

export type LabelProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
};

export function Label(props: LabelProps) {
  const {label, name, type = 'text', placeholder} = props;

  return (
    <div className="d-flex flex-column">
      <label htmlFor={name} className="fs-5 fw-medium text-dark-gray">
        {label}
      </label>
      <Spacer times={0.5} />
      <input type={type} placeholder={placeholder} className="app-input" />
    </div>
  );
}
