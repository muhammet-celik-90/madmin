'use client'

import {Typography} from '@mui/material'

import * as React from 'react';

export interface IPageProps {
}

export default function Page (props: IPageProps) {
  return (
    <div>
      <h1>Users</h1>
      <Typography variant='h1'>Users</Typography>
      <Typography variant='h2'>Users</Typography>
      <Typography variant='h3'>Users</Typography>
      <Typography variant='h4'>Users</Typography>
      <Typography variant='h5'>Users</Typography>
      <Typography variant='h6'>Users</Typography>
    </div>
  );
}
