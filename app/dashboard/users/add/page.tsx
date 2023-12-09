"use client";

import * as React from "react";
import {
  Card,
  Grid,
  TextField,
  MenuItem,
  Stack,
  Paper,
  Box,
  Avatar,
} from "@mui/material";
import Header from "@/app/ui/dashboard/cardheader";
import SubmitButton from "@/app/ui/dashboard/submitbutton";
import { useFormState } from "react-dom";
import Snack from "@/app/ui/dashboard/snack";
import { addUser } from "@/app/actions/users/adduser";
import UploadPhoto from "@/app/ui/dashboard/uploadphoto";

export interface IAddUserProps {}

const initialState = {
  message: " ",
  status: undefined,
};

export default function AddUser(props: IAddUserProps) {
  const [state, formAction] = useFormState(addUser, initialState);

  return (
    <Card sx={{ px: 2, py: 1 }}>
      {/* SNACK */}
      <div style={{ display: "none" }}>
        {state.status && (
          <Snack message={state.message} status={state.status} />
        )}
      </div>
      <Header>Add User</Header>
      <form action={formAction}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Paper elevation={2}>
              {/* IMAGE */}
              <UploadPhoto />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Stack spacing={1}>
                <TextField
                  label="Username"
                  name="username"
                  required
                  fullWidth
                />
                <TextField label="Email" name="email" type="email" fullWidth />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  fullWidth
                />
                <TextField label="Phone" name="phone" fullWidth />
                <TextField label="Is Admin" name="isadmin" select fullWidth>
                  <MenuItem key={0} value="no">
                    No
                  </MenuItem>
                  <MenuItem key={1} value="yes">
                    Yes
                  </MenuItem>
                </TextField>
                <TextField label="Is Aktive" name="isactive" select fullWidth>
                  <MenuItem key={0} value="no">
                    No
                  </MenuItem>
                  <MenuItem key={1} value="yes">
                    Yes
                  </MenuItem>
                </TextField>
                <TextField
                  label="Adress"
                  name="adress"
                  multiline
                  rows={3}
                  fullWidth
                />
              </Stack>
            </Paper>
            <SubmitButton sx={{ my: 1 }}>Save</SubmitButton>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
}
