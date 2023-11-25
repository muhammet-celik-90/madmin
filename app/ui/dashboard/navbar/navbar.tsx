"use client";

import * as React from "react";
import {
  Stack,
  AppBar,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PublicIcon from "@mui/icons-material/Public";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ColorModeContext } from "@/app/theme";
import { useTheme } from "@mui/material/styles";

export interface INavbarProps {
  onClose: any;
  sideWidth: number;
}

export default function Navbar({ onClose, sideWidth }: INavbarProps) {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <AppBar
      position="static"
      sx={{
        height: 60,
        borderRadius: "0.5rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        pr: 2,
        py: 1,
        backgroundColor: theme.palette.mode === 'light' ? theme.palette.background.paper : ''
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          ml: 1,
          display: { xs: sideWidth === 0 ? "flex" : "none", sm: "flex" },
        }}
      >
        {sideWidth > 0 ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
      </IconButton>

      {/* SEARCH AND NOTIFICATIONS */}
      <Stack direction="row" sx={{ marginLeft: "auto" }}>
        <TextField
          label="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          size="small"
          sx={{ display: { xs: "none", sm: "block" } }}
        />
        <IconButton
          sx={{
            marginLeft: "auto",
          }}
          onClick={colorMode.toggleColorMode}
        >
          {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <PublicIcon />
        </IconButton>
      </Stack>
    </AppBar>
  );
}
