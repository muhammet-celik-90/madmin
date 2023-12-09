import * as React from 'react';
import type { Metadata } from 'next';

export interface IBarsLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "Bars Chart",
    description: "Bars Chart Page"
}

export default function BarsLayout ({children}: IBarsLayoutProps) {
  return (
    <>
    {children}
    </>
  );
}
