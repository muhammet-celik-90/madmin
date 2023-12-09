"use client";

import * as React from "react";
import { Stack, AppBar, IconButton, Badge } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ColorModeContext } from "@/app/theme";
import { useTheme } from "@mui/material/styles";
import NotificationsMain from "./notifications/main";

export interface INavbarProps {
  onClose: any;
  sideWidth: number;
}

export interface Notifications {
  id: string;
  title: string;
  description: string;
  date: string;
  isRead: boolean;
}

export default function Navbar({ onClose, sideWidth }: INavbarProps) {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const [openNotification, setOpenNotification] = React.useState(true);
  const [notifications, setNotifications] = React.useState<Notifications[]>([
    {
      id: "1",
      title: "New User",
      description: "New User is registered",
      date: "28 minutes ago",
      isRead: false,
    },
    {
      id: "2",
      title: "Payment",
      description: "New Payment is took",
      date: "Yesterday",
      isRead: false,
    },
    {
      id: "3",
      title: "Order is shipped",
      description: "Your order is shipped",
      date: "2 days ago",
      isRead: true,
    },
    {
      id: "4",
      title: "New Message",
      description: "You have new message",
      date: "3 days ago",
      isRead: true,
    },
    {
      id: "5",
      title: "New Email",
      description: "You have new email",
      date: "7 days ago",
      isRead: false,
    },
  ]);

  const handleClick = (arg: string) => {
    const func = notifications.map((noti) => {
      if (noti.id === arg) {
        return {
          ...noti,
          isRead: true,
        };
      } else {
        return noti;
      }
    });

    setNotifications(func);
  };

  const unread = notifications.filter((item) => item.isRead === false);
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
        backgroundColor:
          theme.palette.mode === "light" ? theme.palette.background.paper : "",
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

      {/* NOTIFICATIONS */}
      <Stack direction="row" sx={{ marginLeft: "auto" }}>
        <IconButton
          sx={{
            marginLeft: "auto",
          }}
          onClick={colorMode.toggleColorMode}
        >
          {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        <IconButton onClick={() => setOpenNotification(true)}>
          <Badge
            variant="dot"
            color={unread.length > 0 ? 'error' : 'default'}
          >
            <NotificationsIcon />
          </Badge>
        </IconButton>
        {/* NOTIFICATION DRAWER */}
        {openNotification && (
          <NotificationsMain
            setOpenNotification={setOpenNotification}
            notifications={notifications}
            setNotifications={setNotifications}
            handleClick={handleClick}
          />
        )}
      </Stack>
    </AppBar>
  );
}
