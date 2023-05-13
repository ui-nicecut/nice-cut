import React from 'react';
import './AdminSidebar.scss';
import { Avatar, Box, Typography } from '@mui/material';
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
      <Typography variant='subtitle2' sx={{ pl: 1, mb: 1, mt: 2 }}>Sections</Typography>
      <MenuItem label='Dashboard' to='/admin/dashboard' />
      <MenuItem label='Hair stylists' to='/admin/hair-stylists' />
      <MenuItem label='Services' to='/admin/services' />
      <MenuItem label='Timetable' to='/admin/timetable' />
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar sx={{ width: 40, height: 40, mr: 1 }}>A</Avatar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle2" component="div">Admin</Typography>
          <Typography variant="body2" component="div" sx={{ textDecoration: 'underline', cursor: 'pointer' }}>
            Sign out
          </Typography>
        </Box>
      </Box>
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