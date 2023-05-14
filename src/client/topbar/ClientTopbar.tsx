import React from 'react';
import './ClientTopbar.scss';
import { Avatar, Box, Typography } from '@mui/material';
import {
  Link,
  useResolvedPath
} from "react-router-dom";
import classnames from 'classnames';

export default function ClientTopbar() {
  return (
    <div className='sidebar'>
      <div className='logo-wrapper image-wrapper'>
        <img src="/logo.png" alt="logo" className='logo' />
      </div>
      <Typography variant='subtitle2' sx={{ pl: 1, mb: 1, mt: 2 }}>Sections</Typography>
      <MenuItem label='Home' to='/client/dashboard' />
      <MenuItem label='Services' to='/client/hair-stylists' />
      <MenuItem label='Appointment' to='/client/appointment' />
      <MenuItem label='Contact' to='/client/contact' />
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar sx={{ width: 40, height: 40, mr: 1 }}>A</Avatar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle2" component="div">Client</Typography>
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