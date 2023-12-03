'use client'

import { Button, SxProps, Theme, CircularProgress } from "@mui/material";
import * as React from "react";
import SendIcon from "@mui/icons-material/Send";
import { useFormStatus } from "react-dom";

export interface ISubmitButtonProps {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

export default function SubmitButton({ children, sx }: ISubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <>
    <Button
      type="submit"
      variant="contained"
      startIcon={pending ? <CircularProgress color="warning"/> : <SendIcon />}
      sx={sx}
      aria-disabled={pending}
      //disabled={pending === true ? true : false}
    >
      {children}
    </Button>
    </>
  );
}
