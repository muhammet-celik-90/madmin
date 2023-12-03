"use client";

import * as React from "react";
import {
  Card,
  Grid,
  TextField,
  Stack,
  Paper,
  Box,
  Avatar,
} from "@mui/material";
import Header from "@/app/ui/dashboard/cardheader";
import SubmitButton from "@/app/ui/dashboard/submitbutton";
import { useFormState } from "react-dom";
import Snack from "@/app/ui/dashboard/snack";
import { getSingleUser } from "@/app/lib/data/getUsers";
import { updateUser } from "@/app/actions/updateUser";

export interface ISingleUserProps {
  params: { id: number}
}
type ImageProps = FileList | null;

const initialState = {
  message: " ",
  status: undefined,
};

export default async function SingleUser({params}: ISingleUserProps) {
  const [image, setImage] = React.useState<ImageProps>();
  const [state, formAction] = useFormState(updateUser, initialState);

  const user = await getSingleUser(params.id)


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let file = e.target.files;
    setImage(file);
  };

  return (
    <Card sx={{ px: 2, py: 1 }}>
      {state?.status && <Snack message={state.message} status={state.status} />}
      <Header>Edit User</Header>
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
                <input type="hidden" value={user?.id}/>
                <TextField label="Name" name="name" required fullWidth value={user?.name}/>
                <TextField label="Username" name="username" required fullWidth value={user?.username} />
                <TextField label="Email" name="email" type="email" fullWidth value={user?.email} />
                <TextField label="Phone" name="phone" fullWidth value={user?.phone} />
                <TextField label="Website" name="website" fullWidth value={user?.website}/>
              </Stack>
            </Paper>
            <SubmitButton sx={{ my: 1 }}>Upload</SubmitButton>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
}
