import React, { useMemo } from 'react';
import './Servicii.scoped.scss';
import { Avatar, Box, Button, Rating, Typography } from '@mui/material';
import {
  Link,
  useResolvedPath
} from "react-router-dom";

export default function Servicii() {
	
    function Service({ name, time, details, price }: { name: string, time: string, details: string, price: string }) {

    return (
      <div className='test'>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Box sx={{ flexGrow: 1, ml: 2 }} >
              <Typography variant="subtitle2" component="div">{name}</Typography>
              <Typography variant="body2" component="div">{time}, {details}</Typography>
            </Box>
          </Box>
          
          <Box sx={{ justifyContent: 'flex-end', display: 'flex' }}>
              <Typography variant="body2" component="div">{price}</Typography>
          </Box>
      </div>
	);
    }

  return (
    <div className='page'>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Typography variant='h4' component='div' sx={{ flexGrow: 1, color:'#6610F2' }}>Services Available</Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
          <Service name = 'Complex haircut' time = '60 minutes' details = 'washing included' price = '90 RON'/>
        </Box>

        <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
          <Service name = 'Simple haircut' time = '30 minutes' details = 'washing included' price = '60 RON'/>
        </Box>

        <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
          <Service name = 'Beard trimming' time = '30 minutes' details = '' price = '40 RON'/>
        </Box>
		
		<Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
          <Service name = 'Eyebrows trimming' time = '20 minutes' details = '' price = '50 RON'/>
        </Box>
		
		<Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
          <Service name = 'Trimmed ends' time = '20 minutes' details = '' price = '30 RON'/>
        </Box>
      </Box>
    </div>
  )
}