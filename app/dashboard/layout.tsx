"use client";

import * as React from "react";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Breadcrumb from "../ui/dashboard/breadcrumbs";
import { usePathname } from "next/navigation";
import Footer from "../ui/dashboard/footer";

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
        {children}
        <Footer />
      </Grid>
    </Grid>
  );
}
