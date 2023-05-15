import React, { useMemo } from 'react';
import './Contact.scoped.scss';
import { Avatar, Box, Button, Rating, Typography } from '@mui/material';
import {
  Link,
  useResolvedPath
} from "react-router-dom";

export default function Contact() {

  return (
    <div className='page'>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Typography variant='h4' component='div' sx={{ flexGrow: 1, color:'#6610F2' }}>Contact</Typography>
      </Box>
	  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 20, marginLeft: 20}}>
          <div className='card-content'>
            <Typography variant='h5' component='div'>Need help or more information?</Typography>
            <Typography variant='h5' component='div'>Contact us!</Typography>
			<Typography variant='h5' component='div'>000111222333</Typography>
			<Typography variant='h5' component='div'>contact@nicecut.com</Typography>
			<Box sx={{ display: 'flex' }}>
			  <Button className='Button' variant='contained'>Call</Button>
			</Box>
        </div>
        <Box sx={{ flexGrow: 3 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap'}}>
              <div className='card-content'>
				<img src="/maps.png" alt="logo" className='logo' width = "840" height = "300" />
                <Typography variant='h5' component='div'>315 W 36th St., NYC, 10018, United States</Typography>
              </div>
          </Box>
		</Box>
	   </Box>
	</div>
  )
}