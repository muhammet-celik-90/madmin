"use client";

import * as React from "react";
import Link from "next/link";
import { Stack, useTheme } from "@mui/material";
import { tokens } from "@/app/theme";
import { usePathname } from 'next/navigation'

export interface IMenuLinkProps {
  item: {
    title: string;
    path: string;
    icon: React.JSX.Element;
  };
}

export default function MenuLink({ item }: IMenuLinkProps) {
  const theme = useTheme();
  const [isHover,setIsHover] = React.useState(false)
  const pathname = usePathname()

  return (
    <Link
      href={item.path}
      style={{ 
        textDecoration: "none", 
        color: pathname === item.path ? theme.palette.text.primary : theme.palette.text.secondary,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '0.5rem 0rem 0.5rem 0.7rem',
        fontSize: '15px',
        backgroundColor: isHover ? theme.palette.action.hover : pathname === item.path ? theme.palette.action.selected : '',
        borderRadius: isHover ? '0.5rem' : pathname === item.path ? '0.5rem' : ''
    }}
    onMouseOver={() => setIsHover(true)}
    onMouseOut={() => setIsHover(false)}
    >
      <Stack sx={{mr:1}}>{item.icon}</Stack>
      {item.title}
    </Link>
  );
}
