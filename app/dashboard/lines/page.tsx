"use client";

import Header from "@/app/ui/dashboard/cardheader";
import * as React from "react";
import { Card, Stack } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

export interface ILinesPageProps {}

export default function LinesPage(props: ILinesPageProps) {
  return (
    <Card sx={{ p: 1, overflow: "auto" }}>
      <Header>Line Chart</Header>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        width={1000}
        height={400}
      />
    </Card>
  );
}
