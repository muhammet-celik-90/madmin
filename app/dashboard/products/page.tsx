"use client";

import * as React from "react";
import Search from "@/app/ui/dashboard/search";
import {
  Typography,
  Card,
  Stack,
  Button,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Avatar,
  TablePagination,
} from "@mui/material";
import AddButton from "@/app/ui/dashboard/addbutton";

export interface IPageProps {}

export default function Page(props: IPageProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
        <Search />
        <AddButton route="/dashboard/products/add">Add Product</AddButton>
      </Stack>

      {/* TABLE */}
      <Stack sx={{ overflow: "auto", width: "100%" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Created at</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Stack
                  direction="row"
                  sx={{ alignItems: "center" }}
                  spacing={1}
                >
                  <Avatar />
                  <Typography>John Aldo</Typography>
                </Stack>
              </TableCell>
              <TableCell>jony@email.com</TableCell>
              <TableCell>12/05/2023</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>Passive</TableCell>
              <TableCell>
                {
                  <Stack direction="row" spacing={1}>
                    <Button size="small" variant="contained">
                      View
                    </Button>
                    <Button size="small" variant="contained" color="error">
                      Delete
                    </Button>
                  </Stack>
                }
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        {/* PAGINATION */}
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={10}
          rowsPerPage={10}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Stack>
    </Card>
  );
}
