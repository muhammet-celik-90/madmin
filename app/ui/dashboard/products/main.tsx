"use client";

import * as React from "react";
import Search from "@/app/ui/dashboard/search";
import {
  Rating,
  Card,
  Stack,
  Tooltip,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TablePagination,
  IconButton,
  Typography,
} from "@mui/material";
import AddButton from "@/app/ui/dashboard/addbutton";
import Image from "next/image";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/navigation";

export interface IProductsMainProps {
  products: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }[];
}

export default function ProductsMain({ products }: IProductsMainProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [productsState, setProductsState] = React.useState(products);
  const [searchedState,setSearchedState] = React.useState(products)
  const router = useRouter();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Card sx={{ px: 2, py: 3 }}>
      {/* HEAD */}
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", flexWrap: "wrap", rowGap: 1 }}
      >
        <Search state={productsState} setState={setSearchedState} />
        <AddButton route="/dashboard/products/add">Add Product</AddButton>
      </Stack>

      {/* TABLE */}
      <Stack sx={{ overflow: "auto", width: "100%", my: 1 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(searchedState ? searchedState : productsState)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <Image
                      src={product.image}
                      width={40}
                      height={40}
                      alt={product.title}
                    />
                  </TableCell>
                  <TableCell>{product.title}</TableCell>
                  <TableCell>
                    <Typography variant="subtitle1">
                      ${product.price}
                    </Typography>
                  </TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>
                    <Rating value={product.rating.rate} readOnly />
                  </TableCell>
                  <TableCell>
                    {
                      <Stack direction="row" spacing={1}>
                        <Tooltip title="View">
                          <IconButton
                            size="small"
                            onClick={() =>
                              router.push(`/dashboard/products/${product.id}`)
                            }
                          >
                            <VisibilityIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton size="small" color="error">
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </Stack>
                    }
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        {/* PAGINATION */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={productsState.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Stack>
    </Card>
  );
}
