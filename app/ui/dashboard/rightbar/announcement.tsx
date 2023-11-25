"use client";

import * as React from "react";
import {
  Card,
  Stack,
  Typography,
  useTheme,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Image from "next/image";

export interface IAnnouncementProps {}

export default function Announcement(props: IAnnouncementProps) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        p: 2,
      }}
    >
      <Box sx={{position: 'relative', zIndex: 1}}>
        <Stack direction="row">
          <Typography
            variant="subtitle1"
            sx={{ color: theme.palette.text.secondary }}
          >
            <IconButton
              sx={{
                pointer: "none",
                "&:hover": { background: "none" },
                cursor: "default",
              }}
            >
              <LocalFireDepartmentIcon />
            </IconButton>
            Available Now
          </Typography>
        </Stack>
        <Typography variant="subtitle1" sx={{ fontWeight: "600", my: 1 }}>
          How to use the new version of the admin dashboard?
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: theme.palette.text.secondary, my: 1, fontWeight: "600" }}
        >
          Takes 4 minutes to learn
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: theme.palette.text.secondary, my: 1 }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<PlayCircleIcon />}
        >
          Watch
        </Button>
      </Box>
      <Image
        src="/images/rocket3d.png"
        width={120}
        height={120}
        alt="rocket-3d"
        style={{marginTop: '-8rem', float: 'right', marginRight: '1rem', opacity: '0.3'}}
      />
    </Card>
  );
}
