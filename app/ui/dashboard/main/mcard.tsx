"use client";

import * as React from "react";
import { Card, Typography, Stack, useTheme } from "@mui/material";
import Groups3Icon from "@mui/icons-material/Groups3";
import { tokens } from "@/app/theme";

export interface IMCardProps {
  title: string;
  total: number;
  text: string;
}

export default function MCard({ title, total, text }: IMCardProps) {
  const theme = useTheme();
  const color = tokens(theme.palette.mode)

  return (
    <Card
      sx={{
        width: "100%",
        p: 1,
        alignItems: "center",
        boxShadow: theme.shadows[3],
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.palette.action.hover
        },
        transition: 'all 300ms linear'
      }}
    >
      <Stack direction="row" spacing={1}>
        <Groups3Icon />
        <Stack>
          <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
            {title}
          </Typography>
          <Typography variant="h6">{total}</Typography>
          <Typography variant="caption">{text}</Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
