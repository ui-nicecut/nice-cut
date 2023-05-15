import React, { useMemo } from 'react';
import './Account.scss';
import { Avatar, Box, Button, Rating, Typography } from '@mui/material';
import {
  Link,
  useResolvedPath
} from "react-router-dom";

export default function Home() {

  const to = '/client/appointment'

  return (
    <div className='page'>

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, justifyContent: 'center'}}>
        <img src="/user.png" alt="logo" className='logo' width = "128" height = "128" />

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, ml: 3}}>
              <Typography variant='h4' component='div' sx={{ flexGrow: 1 }}>Andrei</Typography>
            </Box>
      </Box>
	  <br></br>
	  <Box sx={{ justifyContent: 'center', display: 'flex' }}>
        <Link to={to}>
          <Button className='Button' variant='contained'>Change password</Button>
        </Link>
      </Box>
    <br></br>
      <Box sx={{ justifyContent: 'center', display: 'flex' }}>
        <Link to={to}>
          <Button className='Button' variant='contained'>Past appointments</Button>
        </Link>
      </Box>
    </div>
  )
}