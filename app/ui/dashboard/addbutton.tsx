import { Button } from "@mui/material";
import * as React from "react";
import { useRouter } from "next/navigation";
import AddIcon from "@mui/icons-material/Add";

export interface IAddButtonProps {
    children?: React.ReactNode;
    route: string;
}

export default function AddButton({children, route}: IAddButtonProps) {
    const router = useRouter();
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => router.push(route)}
      startIcon={<AddIcon />}
    >
      {children}
    </Button>
  );
}
