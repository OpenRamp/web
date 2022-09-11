import React from 'react';

export type TabButtonProps = {
  title: string;
  active: boolean;
  onClick: () => void;
};

export function TabButton(props: TabButtonProps) {
  const {title, active, onClick} = props;

  const activeClass = active ? 'active' : '';

  return (
    <div
      className={`btn tab-button d-flex align-items-center justify-content-center ${activeClass}`}
      onClick={onClick}
    >
      <p className="m-0 fs-4">{title}</p>
    </div>
  );
}
