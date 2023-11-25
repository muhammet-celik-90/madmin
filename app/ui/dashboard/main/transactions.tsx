"use client";

import * as React from "react";
import {
  Card,
  Typography,
  useTheme,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Chip,
  TableContainer,
  Paper,
} from "@mui/material";

export interface ITransactionsProps {}

export default function Transactions(props: ITransactionsProps) {
  const theme = useTheme();
  const tableHeads: string[] = ["Name", "Status", "Date", "Amount"];
  const tableBodys = [
    ["John Doe", "pending", "14.02.2023", "$3.200"],
    ["Michael Doe", "done", "15.01.2023", "$4.500"],
    ["Lara Gibson", "cancelled", "09.03.2023", "$1.350"],
    ["Müller Right", "done", "28.01.2023", "$2.500"],
  ];

  return (
    <Card sx={{ p: 2}}>
      <Typography
        variant="h6"
        sx={{ color: theme.palette.text.secondary, mb: 1 }}
      >
        Latest Transactions
      </Typography>
      <TableContainer component={Paper} sx={{maxHeight: 400}}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {tableHeads.map((head) => (
                <TableCell key={head}>{head}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableBodys.map((row) => (
              <TableRow
                key={row[0]}
                sx={{
                  // hide last border
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
                hover
              >
                <TableCell>{row[0]}</TableCell>
                <TableCell>
                  <Chip
                    label={row[1]}
                    color={
                      row[1] === "done"
                        ? "success"
                        : row[1] === "pending"
                        ? "secondary"
                        : "error"
                    }
                    size="small"
                  />
                </TableCell>
                <TableCell>{row[2]}</TableCell>
                <TableCell>{row[3]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
