"use client";

import * as React from "react";
import { Tabs, Tab, Chip } from "@mui/material";
import { Notifications } from "../navbar";

export interface INotificationTabsProps {
    setTabValue: React.Dispatch<React.SetStateAction<number>>;
    notifications: Notifications[]
}

export default function NotificationTabs(props: INotificationTabsProps) {
  const [value, setValue] = React.useState(0);

  let allLength = props.notifications.length;
  let unreadLength = props.notifications.filter(item => item.isRead === false).length

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    props.setTabValue(newValue)
  };
  return (
    <Tabs
      value={value}
      onChange={handleChange}
    >
      <Tab
        label="All"
        icon={<Chip label={allLength} size="small" color="default"/>}
        iconPosition="end"
        sx={{ textTransform: "capitalize" }}
      />
      <Tab
        label="Unread"
        icon={<Chip label={unreadLength} size="small" color="primary" />}
        iconPosition="end"
        sx={{ textTransform: "capitalize" }}
      />
    </Tabs>
  );
}
