import { InputAdornment, TextField } from '@mui/material';
import * as React from 'react';
import SearchIcon from "@mui/icons-material/Search";

export interface ISearchProps {
}

export default function Search (props: ISearchProps) {
  return (
    <TextField
          label="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          size="small"
          //sx={{ display: { xs: "none", sm: "block" } }}
        />
  );
}
