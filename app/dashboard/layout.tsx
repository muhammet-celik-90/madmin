"use client";

import * as React from "react";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";
import { Grid, Stack, useMediaQuery, useTheme, IconButton } from "@mui/material";
import Breadcrumb from "../ui/dashboard/breadcrumbs";
import { usePathname } from "next/navigation";
import Footer from "../ui/dashboard/footer";
import { SnackbarProvider, closeSnackbar } from "notistack";
import CloseIcon from '@mui/icons-material/Close';

export interface ILayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [sidebarWidth, setSidebarWidth] = React.useState<number>(220);
  const closeSidebar = () => {
    setSidebarWidth(sidebarWidth === 220 ? 0 : 220);
  };
  const pathname = usePathname();
  const pathnames = pathname.split("/");

  React.useEffect(() => {
    setSidebarWidth(isMobile ? 0 : 220);
  }, [isMobile]);

  return (
    <SnackbarProvider
      autoHideDuration={3000}
      preventDuplicate={true}
      action={(snackbarId) => (
        <IconButton onClick={() => closeSnackbar(snackbarId)}>
          <CloseIcon />
        </IconButton>
      )}
    >
      <Grid container sx={{ width: "100%" }}>
        {/* SIDEBAR */}
        <Grid item sx={{ width: `${sidebarWidth}px` }}>
          <Sidebar onClose={closeSidebar} />
        </Grid>

        {/* MAIN */}
        <Grid
          item
          sx={{
            width: "100%",
            marginLeft: `${sidebarWidth}px`,
            p: 1,
            transition: "all 300ms linear",
          }}
        >
          <Navbar onClose={closeSidebar} sideWidth={sidebarWidth} />
          <Breadcrumb pathnames={pathnames} />
          <Stack sx={{ px: 1 }}>{children}</Stack>
          <Footer />
        </Grid>
      </Grid>
    </SnackbarProvider>
  );
}
