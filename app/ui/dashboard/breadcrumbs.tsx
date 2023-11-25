"use client";

import * as React from "react";
import { Breadcrumbs, Stack, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export interface IBreadcrumbProps {
  pathnames: string[];
}

export default function Breadcrumb({ pathnames }: IBreadcrumbProps) {
  const theme = useTheme();
  const pathLen = pathnames.length;
  const pageHeader = pathnames[pathLen - 1];

  return (
    <Stack spacing={1} sx={{mt:2, mb:3, ml:1}}>
      <Typography variant="h3" sx={{ textTransform: "capitalize", fontWeight: '600' }}>
        {pageHeader}
      </Typography>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<ArrowForwardIosIcon sx={{ fontSize: "10px" }} />}
      >
        {pathnames.map(
          (path, index) =>
            index > 0 && (
              <>
                <Link
                  key={index}
                  href={`/${
                    index > 1
                      ? pathnames[index - 1] + "/" + path
                      : index > 2
                      ? pathnames[index - 2] +
                        "/" +
                        pathnames[index - 1] +
                        "/" +
                        path
                      : path
                  }`}
                  style={{
                    textDecoration: index === pathLen - 1 ? "none" : "",
                    textTransform: "capitalize",
                    color: theme.palette.text.secondary,
                    pointerEvents: index === pathLen - 1 ? "none" : "auto",
                  }}
                >
                  {path}
                </Link>
              </>
            )
        )}
      </Breadcrumbs>
    </Stack>
  );
}
