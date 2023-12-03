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
import { addUser } from "@/app/actions/adduser";
import Snack, { ISnackProps } from "@/app/ui/dashboard/snack";
import { SharedProps, useSnackbar } from "notistack";

export interface IAddUserProps {}
type ImageProps = FileList | null;

const initialState = {
  message: " ",
  status: undefined,
};

export default function AddUser(props: IAddUserProps) {
  const [image, setImage] = React.useState<ImageProps>();
  const [state, formAction] = useFormState(addUser, initialState);
  const { enqueueSnackbar } = useSnackbar();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let file = e.target.files;
    setImage(file);
  };

  return (
    <Card sx={{ px: 2, py: 1 }}>
      {state.status && <Snack message={state.message} status={state.status} />}
      <Header>Add User</Header>
      <form action={formAction}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Paper elevation={2}>
              <Box
                component="label"
                htmlFor="upload"
                sx={{ "&:hover": { opacity: "0.6", cursor: "pointer" } }}
              >
                <Avatar
                  src={
                    image
                      ? URL.createObjectURL(image?.[0])
                      : "/images/avatar.png"
                  }
                  alt="avatar"
                  variant="rounded"
                  sx={{ width: "100%", height: "auto", maxHeight: "300px" }}
                />
                <input
                  type="file"
                  id="upload"
                  name="upload"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Stack spacing={1}>
                <TextField label="Username" name="username" required fullWidth />
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
