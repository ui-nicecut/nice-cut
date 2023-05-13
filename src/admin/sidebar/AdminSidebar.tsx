import React from 'react';
import './AdminSidebar.scss';
import { Box, Typography } from '@mui/material';
import {
  Link,
  useResolvedPath
} from "react-router-dom";
import classnames from 'classnames';

export default function AdminSidebar() {
  return (
    <div className='sidebar'>
      <div className='logo-wrapper image-wrapper'>
        <img src="/logo.png" alt="logo" className='logo' />
      </div>
      <Typography variant='subtitle2' sx={{ pl: 1.5, mb: 1, mt: 2 }}>Sections</Typography>
      <MenuItem label='Dashboard' to='/admin/dashboard' />
      <MenuItem label='Hair stylists' to='/admin/hair-stylists' />
      <MenuItem label='Services' to='/admin/services' />
      <MenuItem label='Timetable' to='/admin/timetable' />

    </div>
  )
}

function MenuItem({ label, to }: { label: string, to: string }) {
  const url = useResolvedPath(to).pathname;
  const active = window.location.pathname === url;
  return (
    <Link to={to} className={classnames('menu-item', { active })}>
      <Typography variant='subtitle2'>{label}</Typography>
    </Link>
  );
}