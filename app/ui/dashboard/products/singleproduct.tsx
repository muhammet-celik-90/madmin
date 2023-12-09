"use client";

import * as React from "react";
import { Box, Card, Grid, Stack, TextField } from "@mui/material";
import Header from "../cardheader";
import SubmitButton from "../submitbutton";
import UploadPhoto from "../uploadphoto";

export interface ISingleProductProps {
  product: {
    id: number;
    title: string;
    price: number | string;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
}

export default function SingleProduct({ product }: ISingleProductProps) {
  const [productState, setProductState] = React.useState(product);

  return (
    <Card sx={{ p: 1 }}>
      <Header>Single Product</Header>
      <Grid container>
        {/* IMAGE */}
        <Grid
          item
          xs={12}
          lg={4}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            mb: 2,
          }}
        >
          <UploadPhoto source={productState.image} />
        </Grid>
        {/* DETAILS */}
        <Grid item xs={12} lg={8}>
          <Stack spacing={2}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productState.title}
              onChange={(e) =>
                setProductState({ ...productState, title: e.target.value })
              }
            />
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productState.price}
              onChange={(e) =>
                setProductState({ ...productState, price: e.target.value })
              }
            />
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={productState.description}
              onChange={(e) =>
                setProductState({ ...productState, description: e.target.value })
              }
            />
            <TextField
              fullWidth
              label="Category"
              name="category"
              value={productState.category}
              onChange={(e) =>
                setProductState({ ...productState, category: e.target.value })
              }
            />
            <Stack
              sx={{
                flexDirection: { xs: "column", md: "row" },
                columnGap: { xs: 0, md: 1 },
                rowGap: { xs: 1, md: 0 },
              }}
            >
              <TextField
                fullWidth
                label="Rate"
                name="rate"
                value={productState.rating.rate}
                disabled
              />
              <TextField
                fullWidth
                label="Count"
                name="count"
                value={productState.rating.count}
                disabled
              />
            </Stack>
            <Stack sx={{ width: { xs: "100%", lg: "15%" } }}>
              <SubmitButton>Update</SubmitButton>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}
