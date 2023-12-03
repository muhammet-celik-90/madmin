'use client'

import { Typography, useTheme } from '@mui/material';
import * as React from 'react';

export interface IHeaderProps {
    children: React.ReactNode;
}

export default function Header ({children}: IHeaderProps) {
    const theme = useTheme()
  return (
    <Typography variant='subtitle1' sx={{color: theme.palette.text.secondary, my:2, mx:1, fontWeight: '600'}}>
      {children}
    </Typography>
  );
}
