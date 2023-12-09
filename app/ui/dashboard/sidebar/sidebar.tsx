"use client";

import * as React from "react";
import {
  Stack,
  Button,
  Drawer,
  Box,
  Typography,
  Avatar,
  useTheme,
  IconButton,
  Divider,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CategoryIcon from "@mui/icons-material/Category";
import TimelineIcon from '@mui/icons-material/Timeline';
import WorkIcon from "@mui/icons-material/Work";
import BarChartIcon from "@mui/icons-material/BarChart";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MenuLink from "./menuLink";
import { useRouter } from "next/navigation";
import PieChartIcon from '@mui/icons-material/PieChart';
import LogoutIcon from "@mui/icons-material/Logout";

export interface ISidebarProps {
  onClose: any;
}

export default function Sidebar({ onClose }: ISidebarProps) {
  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <SpaceDashboardIcon />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <PeopleAltIcon />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <CategoryIcon />,
        },
      ],
    },
    {
      title: "Charts",
      list: [
        {
          title: "Bars",
          path: "/dashboard/bars",
          icon: <BarChartIcon />,
        },
        {
          title: "Lines",
          path: "/dashboard/lines",
          icon: <TimelineIcon />,
        },
        {
          title: "Pies",
          path: "/dashboard/pies",
          icon: <PieChartIcon />,
        },
      ],
    },
    {
      title: "Actions",
      list: [],
    },
  ];
  const theme = useTheme();
  const route = useRouter();

  return (
    <Drawer
      sx={{
        width: "inherit",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "inherit",
          boxSizing: "border-box",
        },
        backgroundColor: "crimson",
        transition: "all 300ms linear",
        position: "sticky",
      }}
      variant="persistent"
      anchor="left"
      open={true}
    >
      {/* CLOSE BUTTON */}
      <Stack sx={{ p: 1, height: "inherit" }}>
        <IconButton
          onClick={onClose}
          sx={{
            marginLeft: "auto",
            flexDirection: "row",
            justifyContent: "flex-end",
            display: { xs: "flex", sm: "none" },
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        {/* AVATAR */}
        <Stack
          direction="row"
          spacing={2}
          sx={{
            px: 1,
            py: 3,
            height: 50,
            alignItems: "center",
            cursor: "pointer",
            "&:hover": { backgroundColor: theme.palette.action.hover },
            borderRadius: "0.5rem",
            mt: { xs: 2, sm: "none" },
          }}
          onClick={() => route.push("/dashboard")}
        >
          <Avatar
            src="/images/avatar.png"
            alt="avatar-photo"
            sx={{ width: 40, height: 40 }}
          />
          <Stack>
            <Typography variant="subtitle1" sx={{ fontWeight: "700" }}>
              John Doe
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: theme.palette.text.secondary }}
            >
              johndoe@mail.com
            </Typography>
          </Stack>
        </Stack>

        {/* MENU LIST */}
        <Box component="ul" sx={{ display: "flex", flexDirection: "column" }}>
          {menuItems &&
            menuItems.map((cat) => (
              <Box
                component="li"
                key={cat.title}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "600", fontSize: "13px", my: 2 }}
                >
                  {cat.title}
                </Typography>
                {cat.list.map((item) => (
                  <MenuLink item={item} key={item.title} />
                ))}
              </Box>
            ))}
        </Box>
        <Button
          sx={{
            textTransform: "capitalize",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            ml: 0.5,
            color: theme.palette.text.secondary,
            '&:hover': {
              color: theme.palette.error.light
            }
          }}
        >
          <LogoutIcon sx={{ mr: 1 }} />
          Logout
        </Button>
      </Stack>
    </Drawer>
  );
}
