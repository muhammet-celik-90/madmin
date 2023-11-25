import * as React from "react";
import { Grid } from "@mui/material";
import Cards from "../ui/dashboard/main/cards";
import Transactions from "../ui/dashboard/main/transactions";
import Charts from "../ui/dashboard/main/charts";
import Rightbar from "../ui/dashboard/rightbar/rightbar";

export interface IDashboardPageProps {}

export default function DashboardPage(props: IDashboardPageProps) {
  return (
    <Grid container sx={{ px: 1 }}>
      {/* LEFT SIDE */}
      <Grid container xs={12} md={8} spacing={1}>
        <Grid item sx={{width: '100%'}}>
          <Cards />
        </Grid>
        <Grid item sx={{width: '100%'}}>
          <Transactions/>
        </Grid>
        <Grid item sx={{width: '100%'}}>
          <Charts/>
        </Grid>
      </Grid>

      {/* RIGHT BAR */}
      <Grid container xs={12} md={4}>
        <Grid item sx={{px:1, position: 'fixed'}}>
          <Rightbar/>
        </Grid>
      </Grid>
    </Grid>
  );
}
