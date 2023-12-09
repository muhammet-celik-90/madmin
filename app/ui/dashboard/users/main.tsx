"use client";

import AddButton from "@/app/ui/dashboard/addbutton";
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
import { useRouter } from "next/navigation";

import * as React from "react";

export interface IUserMainProps {
    fetchedUsers: User[]
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default function UserMain({fetchedUsers}: IUserMainProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const router = useRouter();

  const [users, setUsers] = React.useState(fetchedUsers);
  const [searchedState,setSearchedState] = React.useState(fetchedUsers)

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
    <>
      <Card sx={{ px: 2, py: 3 }}>
        {/* HEAD */}
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", flexWrap: "wrap", rowGap: 1 }}
        >
          <Search state={users} setState={setSearchedState} />
          <AddButton route="/dashboard/users/add">Add User</AddButton>
        </Stack>

        {/* TABLE */}
        <Stack sx={{ overflow: "auto", width: "100%" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Website</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(searchedState ? searchedState : users)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <Stack
                        direction="row"
                        sx={{ alignItems: "center" }}
                        spacing={1}
                      >
                        <Avatar />
                        <Typography>{user.name}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.website}</TableCell>
                    <TableCell>
                      {
                        <Stack direction="row" spacing={1}>
                          <Button
                            size="small"
                            variant="contained"
                            onClick={() =>
                              router.push(`/dashboard/users/${user.id}`)
                            }
                          >
                            View
                          </Button>
                          <Button
                            size="small"
                            variant="contained"
                            color="error"
                          >
                            Delete
                          </Button>
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
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Stack>
      </Card>
    </>
  );
}
