import * as React from "react";
import { Card, Grid, TextField, MenuItem, } from "@mui/material";
import Header from "@/app/ui/dashboard/cardheader";
import SubmitButton from "@/app/ui/dashboard/submitbutton";

export interface IAddProductProps {}

export default function AddProduct(props: IAddProductProps) {
  return (
    <Card sx={{ px: 2, py: 1 }}>
      <Header>Add Product</Header>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="Title" name="title" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Choose Category" name="category" select fullWidth>
            <MenuItem key={0} value="Category 1">
              Category 1
            </MenuItem>
            <MenuItem key={1} value="Category 2">
              Category 2
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Price" name="price" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Stock" name="stock" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Color" name="color" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Size" name="size" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Description"
            name="description"
            multiline
            rows={5}
            fullWidth
          />
          <SubmitButton sx={{ my: 1 }}>Save</SubmitButton>
        </Grid>
      </Grid>
    </Card>
  );
}
