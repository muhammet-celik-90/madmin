"use client";

import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import * as React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  const theme = useTheme();
  return (
    <Stack direction="row" sx={{ p: 2, justifyContent: "flex-end", alignItems: 'center' }}>
      <Typography
        variant="caption"
        sx={{ color: theme.palette.text.secondary }}
      >
        <IconButton
          sx={{
            cursor: "default",
            "&:hover": { background: "none" },
            color: theme.palette.text.secondary,
            mr: -0.5
          }}
        >
          <CopyrightIcon sx={{fontSize: '18px'}} />
        </IconButton>
        All rights reserved
      </Typography>
    </Stack>
  );
}
