import * as React from 'react';
import { useSnackbar } from "notistack";

export interface ISnackProps {
    message: string;
    status: "success" | "default" | "error" | "warning" | "info" | undefined;
}

export default function Snack ({message, status}: ISnackProps) {
    const { enqueueSnackbar } = useSnackbar();
  return (
    enqueueSnackbar(message, {variant: status, autoHideDuration: status === 'error' ? 6000 : 3000})
  );
}
