"use client";

import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useMode } from "./theme";
import { ColorModeContext } from "./theme";

export interface IThemeLayoutProps {
  children?: React.ReactNode;
}

export default function ThemeLayout({ children }: IThemeLayoutProps) {
  const { theme, colorMode } = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
