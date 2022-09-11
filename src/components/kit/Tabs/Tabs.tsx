import React from 'react';
import {TabButton} from './TabButton';
import {Spacer} from '../Spacer';

export type TabItem = {
  title: string;
  onClick: (selectedIndex: number) => void;
};

export type TabsProps = {
  tabs: TabItem[];
  activeIndex: number;
};

export function Tabs(props: TabsProps) {
  const {tabs, activeIndex} = props;

  return (
    <div className="tabs-container d-flex">
      {tabs.map((tab, index) => (
        <React.Fragment key={tab.title}>
          <TabButton
            title={tab.title}
            onClick={() => tab.onClick(index)}
            active={index === activeIndex}
          />
          {index + 1 !== tabs.length ? <Spacer /> : null}
        </React.Fragment>
      ))}
    </div>
  );
}
