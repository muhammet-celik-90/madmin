import * as React from "react";
import { Stack } from "@mui/material";
import Announcement from "./announcement";

export interface IRightbarProps {}

export default function Rightbar(props: IRightbarProps) {
  return (
    <Stack spacing={2}>
      <Announcement />
    </Stack>
  );
}
