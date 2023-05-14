import React, { useMemo } from 'react';
import './Home.scss';
import { Avatar, Box, Button, Rating, Typography } from '@mui/material';
import {
  Link,
  useResolvedPath
} from "react-router-dom";

export default function Home() {

  const to = '/client/appointment'

  return (
    <div className='page'>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, justifyContent: 'center' }}>
        <img src="/home.png" alt="logo" className='logo' width = "1272" height = "748" />
      </Box>
	  <br></br>
	  <Box sx={{ justifyContent: 'center', display: 'flex' }}>
        <Link to={to}>
          <Button className='Button' variant='contained'>Make an appointment</Button>
        </Link>
      </Box>
    </div>
  )
}