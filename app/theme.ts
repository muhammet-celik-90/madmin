import { PaletteMode } from "@mui/material";
import { gilroy } from "./lib/fonts/gilroy/gilroy";
import { createTheme } from "@mui/material/styles";
import React from "react";

enum colors {
  bg = "#11151c",
  bgSoft = "#19212e",
  hookersGreen = "#52796F",
  cambridgeBlue = "#84A98C",
  ashGray = "#CAD2C5",
}

// color tokens
export const tokens = (mode: PaletteMode) => ({
  ...(mode === "light"
    ? {
        darkBlue: {
          100: "#cfd0d2",
          200: "#a0a1a4",
          300: "#707377",
          400: "#414449",
          500: "#11151c",
          600: "#0e1116",
          700: "#0a0d11",
          800: "#07080b",
          900: "#030406",
        },
      }
    : {
        darkBlue: {
          100: "#030406",
          200: "#07080b",
          300: "#0a0d11",
          400: "#0e1116",
          500: "#11151c",
          600: "#414449",
          700: "#707377",
          800: "#a0a1a4",
          900: "#cfd0d2",
        },
      }),
});

// mui theme options
const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          background: {
            default: '#e9ecef',
            paper: '#f8f9fa'
          }
        }
      : {
          // palette values for dark mode
          background: {
            default: colors.bg,
            paper: colors.bgSoft,
          },
        }),
  },
  typography: {
    fontFamily: `${gilroy}`,
    h1: {
      fontSize: "3.2rem",
    },
    h2: {
      fontSize: "2.7rem",
    },
    h3: {
      fontSize: "2.4rem",
    },
    h4: {
      fontSize: "2.1rem",
    },
    h5: {
      fontSize: "1.75rem",
    },
    h6: {
      fontSize: "1.5rem",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = React.useState<PaletteMode>("dark");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return { theme, colorMode };
};
