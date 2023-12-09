import { Metadata } from 'next';
import * as React from 'react';

export interface IPieLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'Pie Chart',
    description: 'Pie Chart Page Description'
}

export default function PieLayout (props: IPieLayoutProps) {
  return (
    <>
     {props.children} 
    </>
  );
}
