"use client";

import * as React from "react";
import { Button, Card, Grid, TextField, Typography, Stack } from "@mui/material";

export interface ILoginPageProps {}

export default function LoginPage(props: ILoginPageProps) {
  return (
    <Grid container sx={{ placeContent: "center", height: "100vh" }}>
      <Card
        sx={{
          width: "20rem",
          height: "20rem",
          py: 4,
          px:3
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Login
        </Typography>
        <Stack spacing={2} sx={{height: '100%', justifyContent: 'center'}}>
          <TextField fullWidth label="Email" name="email" type="email" />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
          />
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Stack>
      </Card>
    </Grid>
  );
}
