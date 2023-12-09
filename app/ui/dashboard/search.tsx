import { InputAdornment, TextField } from "@mui/material";
import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";

export interface ISearchProps {
  state: any;
  setState: any;
}

export default function Search({ state, setState }: ISearchProps) {
  const searching = (arg: string) => {
    if(arg.length > 0) {
      const searchedItem = state.filter((item: any) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(arg.toLowerCase());
      });
      setState(searchedItem);
    }else {
      setState(state)
    }
  };

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
      onChange={(e) => searching(e.target.value)}
    />
  );
}
