"use client";

import { Box, Divider, Drawer, Stack, Typography } from "@mui/material";
import * as React from "react";
import NotificationTabs from "./tabs";
import NotificationContent from "./content";
import { Notifications } from "../navbar";

export interface INotificationsMainProps {
  setOpenNotification: React.Dispatch<React.SetStateAction<boolean>>;
  notifications: Notifications[];
  setNotifications: React.Dispatch<React.SetStateAction<Notifications[]>>;
  handleClick: any;
}

export default function NotificationsMain(props: INotificationsMainProps) {
  const [tabValue, setTabValue] = React.useState(0);
  return (
    <Drawer
      sx={{
        width: { xs: "80%", md: "350px" },
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "inherit",
          boxSizing: "border-box",
        },
      }}
      onClose={(_, reason) =>
        reason === "backdropClick" && props.setOpenNotification(false)
      }
      anchor="right"
      open={true}
    >
      {/* HEADER */}
      <Stack sx={{ p: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: "600" }}>
          Notifications
        </Typography>
      </Stack>
      <Divider />
      {/* TABS */}
      <NotificationTabs setTabValue={setTabValue} notifications={props.notifications} />
      <Divider />
      {/* TAB */}
      <Box>
        <Stack sx={{ display: tabValue === 0 ? "flex" : "none", overflow: 'auto' }}>
          <NotificationContent
            tabValue={tabValue}
            notifications={props.notifications}
            setNotifications={props.setNotifications}
            handleClick={props.handleClick}
          />
        </Stack>
        <Stack sx={{ display: tabValue === 1 ? "flex" : "none", overflow: 'auto' }}>
          <NotificationContent
            tabValue={tabValue}
            notifications={props.notifications}
            setNotifications={props.setNotifications}
            handleClick={props.handleClick}
          />
        </Stack>
      </Box>
    </Drawer>
  );
}
