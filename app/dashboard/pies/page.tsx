'use client'

import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Card } from "@mui/material";
import Header from "@/app/ui/dashboard/cardheader";

export interface IPiePageProps {}

export default function PiePage(props: IPiePageProps) {
  return (
    <Card sx={{ p: 1, overflow: "auto" }}>
      <Header>Pie Chart</Header>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "series A" },
              { id: 1, value: 15, label: "series B" },
              { id: 2, value: 20, label: "series C" },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    </Card>
  );
}
