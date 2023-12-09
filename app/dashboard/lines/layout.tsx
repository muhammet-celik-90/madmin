import type { Metadata } from "next";
import * as React from "react";

export interface ILinesLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Line Chart",
  description: "Line Chart Page",
};

export default function LinesLayout({ children }: ILinesLayoutProps) {
  return <>{children}</>;
}
