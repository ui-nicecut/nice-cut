import React from 'react';
import './ClientTopbar.scoped.scss';
import { Avatar, Box, Typography } from '@mui/material';
import {
  Link,
  useResolvedPath
} from "react-router-dom";
import classnames from 'classnames';

export default function ClientTopbar() {
  return (
    <div className='topbar'>
      <div className='logo-wrapper image-wrapper'>
        <img src="/logo.png" alt="logo" className='logo' />
      </div>
      <Box sx={{ flexGrow: 1 }} />
      <MenuItem label='Home' to='/client/home' />
      <MenuItem label='Services' to='/client/services' />
      <MenuItem label='Appointment' to='/client/appointment' />
      <MenuItem label='Contact' to='/client/contact' />
      <MenuItem label='My account' to='/client/account' />
      
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