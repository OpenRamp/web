import React from 'react';
import {Header} from './Header';

export type LayoutProps = {
  children: React.ReactNode;
};

export function Layout(props: LayoutProps) {
  const {children} = props;

  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
