"use client";

import * as React from "react";
import { Card, useTheme, Typography, Box } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

export interface IChartsProps {}

export default function Charts(props: IChartsProps) {
  const theme = useTheme();
  const datas = [
    {
      name: "Sun",
      visit: 4000,
      click: 2400,
    },
    {
      name: "Mon",
      visit: 3000,
      click: 1398,
    },
    {
      name: "Tue",
      visit: 2000,
      click: 3800,
    },
    {
      name: "Wed",
      visit: 2780,
      click: 3908,
    },
    {
      name: "Thu",
      visit: 1890,
      click: 4800,
    },
    {
      name: "Fri",
      visit: 2390,
      click: 3800,
    },
    {
      name: "Sat",
      visit: 3490,
      click: 4300,
    },
  ];

  return (
    <Card sx={{ p: 2 }}>
      <Typography
        variant="h6"
        sx={{ color: theme.palette.text.secondary, mb: 1 }}
      >
        Weekly Recap
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <BarChart
          dataset={datas}
          xAxis={[{ scaleType: "band", dataKey: "name" }]}
          series={[
            { dataKey: "visit", label: "Visit" },
            { dataKey: "click", label: "Click" },
          ]}
          width={600}
          height={300}
        />
      </Box>
    </Card>
  );
}
