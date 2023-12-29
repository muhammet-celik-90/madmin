"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        display: "center",
        alignItems: "center",
      }}
    >
      <Link href="/dashboard">
        <Typography variant="h1">Go to Dashboard</Typography>
      </Link>
    </Box>
  );
}
