import React from 'react';
import {Header} from './Header';
import {Spacer} from "../kit";

export type LayoutProps = {
  children: React.ReactNode;
};

export function Layout(props: LayoutProps) {
  const {children} = props;

  return (
    <main>
      <Header />
      <Spacer times={5} />
      {children}
    </main>
  );
}
