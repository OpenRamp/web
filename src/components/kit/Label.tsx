import React, {InputHTMLAttributes} from 'react';
import {Spacer} from './Spacer';

export type LabelProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  onChange?: InputHTMLAttributes<any>['onChange'];
  value?: InputHTMLAttributes<any>['value'];
};

export function Label(props: LabelProps) {
  const {label, name, type = 'text', placeholder, onChange, value} = props;

  return (
    <div className="d-flex flex-column">
      <label htmlFor={name} className="fs-5 fw-medium text-dark-gray">
        {label}
      </label>
      <Spacer times={0.5} />
      <input
        type={type}
        placeholder={placeholder}
        className="app-input"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
