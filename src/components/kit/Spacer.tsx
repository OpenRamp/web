import React from 'react';

export type SpacerProps = {
  times?: number;
};

export function Spacer(props: SpacerProps) {
  const {times = 1} = props;
  return <div style={{padding: times * 8}} />;
}
