import * as React from "react";
import { Notifications } from "../navbar";
import { Badge, Divider, Stack, Typography, useTheme } from "@mui/material";

export interface INotificationContentProps {
  tabValue: number;
  notifications: Notifications[];
  setNotifications: React.Dispatch<React.SetStateAction<Notifications[]>>;
  handleClick: any;
}

export default function NotificationContent(props: INotificationContentProps) {
  const theme = useTheme();
  const unread = props.notifications.filter((item) => item.isRead === false);

  if (props.tabValue === 1) {
    return unread.map((notify) => (
      <>
        <Stack direction="row" sx={{ px: 3, py: 1 }}>
          <Stack>
            <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
              {notify.title}
            </Typography>
            <Typography variant="subtitle2">{notify.description}</Typography>
            <Typography variant="caption">{notify.date}</Typography>
            <Typography
              variant="caption"
              color="primary"
              sx={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => props.handleClick(notify.id)}
            >
              Marked as read
            </Typography>
          </Stack>
        </Stack>
        <Divider />
      </>
    ));
  } else {
    return props.notifications.map((notify) => (
      <>
        <Stack
          direction="row"
          sx={{
            backgroundColor:
              notify.isRead === false ? theme.palette.action.hover : "",
            p: 1,
          }}
        >
          <Stack sx={{ justifyContent: "center", m: 2 }}>
            {notify.isRead === false && <Badge variant="dot" color="primary" />}
          </Stack>
          <Stack>
            <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
              {notify.title}
            </Typography>
            <Typography variant="subtitle2">{notify.description}</Typography>
            <Typography variant="caption">{notify.date}</Typography>
            {notify.isRead === false && (
              <Typography
                variant="caption"
                color="primary"
                sx={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={() => props.handleClick(notify.id)}
              >
                Marked as read
              </Typography>
            )}
          </Stack>
        </Stack>
        <Divider />
      </>
    ));
  }

  return;
}
