"use client";

import * as React from "react";
import {
  Card,
  Grid,
  TextField,
  Stack,
  Paper,
  Box,
} from "@mui/material";
import Header from "@/app/ui/dashboard/cardheader";
import SubmitButton from "@/app/ui/dashboard/submitbutton";
import { useFormState } from "react-dom";
import Snack from "@/app/ui/dashboard/snack";
import { updateUser } from "@/app/actions/users/updateUser";
import { User } from "./main";
import Image from "next/image";
import UploadPhoto from "../uploadphoto";

export interface ISingleUserProps {
  singleUser: User;
}

const initialState = {
  message: " ",
  status: undefined,
};

export default function SingleUser({ singleUser }: ISingleUserProps) {
  const [state, formAction] = useFormState(updateUser, initialState);

  const [user, setUser] = React.useState(singleUser);

  return (
    <Card sx={{ px: 2, py: 1 }}>
      {/* SNACK */}
      <div style={{ display: "none" }}>
        {state?.status && (
          <Snack message={state.message} status={state.status} />
        )}
      </div>
      <Header>Edit User</Header>
      <form action={formAction}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            {/* IMAGE */}
            <Paper elevation={2}>
              <UploadPhoto />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Stack spacing={1}>
                <input type="hidden" value={user?.id} />
                <TextField
                  label="Name"
                  name="name"
                  required
                  fullWidth
                  value={user?.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
                <TextField
                  label="Username"
                  name="username"
                  required
                  fullWidth
                  value={user.username}
                  onChange={(e) => setUser({ ...user, username: e.target.value })}
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  fullWidth
                  value={user?.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <TextField
                  label="Phone"
                  name="phone"
                  fullWidth
                  value={user?.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                />
                <TextField
                  label="Website"
                  name="website"
                  fullWidth
                  value={user?.website}
                  onChange={(e) => setUser({ ...user, website: e.target.value })}
                />
              </Stack>
            </Paper>
            <SubmitButton sx={{ my: 1 }}>Upload</SubmitButton>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
}
