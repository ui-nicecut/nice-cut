import React, { useMemo, useState } from 'react';
import './AppointmentConfirm.scss';
import { Box, Button, Rating, Typography } from '@mui/material';
import {
  Link,
  useResolvedPath
} from "react-router-dom";
import classnames from 'classnames';

export default function Dashboard() {

  const data = {
    profits: 73286,
    customers: 1024,
    newCustomers: 114,
    returningCustomers: 910,
    appointments: 1196,
  }

  const numberFormatCurrency = useMemo(() => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'RON' }), []);
  const numberFormat = useMemo(() => new Intl.NumberFormat('en-US'), []);

  function Barber({ name, rating }: { name: string, rating: number }) {
    const to = '/client/appointment'

    return (
      <div className='barber-card'>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <img src="/scissors.png" alt="logo" className='logo' width="40" height="40" />
          <Box sx={{ flexGrow: 1, ml: 2 }} >
            <Typography variant="subtitle2" component="div">{name}</Typography>
            <Typography variant="body2" component="div">{rating} / 5</Typography>
          </Box>
          <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
        </Box>
      </div>
    );
  }

  function Service({ name, price, duration }: { name: string, price: number, duration: number }) {
    const to = '/client/appointment-time'

    const url = useResolvedPath(to).pathname;
    const active = window.location.pathname === url;
    return (

<div className='barber-card'>
<Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
  <Box sx={{ flexGrow: 1, ml: 2 }} >
    <Typography variant="subtitle2" component="div">{name}</Typography>
    <Typography variant="body2" component="div">{price} RON - {duration} minutes</Typography>
  </Box>
</Box>
</div>

      
    );
  }


  return (
    <div className='page'>
      

      <Box sx={{ flexGrow: 1 }}>
      <div className='barber-card'>
            <div className='card-content'>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Typography variant='h4' component='div' sx={{ flexGrow: 1 }}>Appointment summary</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
              <Barber name = 'Mihai' rating = {4.5}/>
              <Service name = 'Simple haircut' price = {60} duration = {30}/>


              <div className='barber-card'>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box sx={{ flexGrow: 1, ml: 2 }} >
                    <Typography variant="subtitle2" component="div">Date: 12th of July 2023</Typography>
                    <Typography variant="body2" component="div">Time: 12:00</Typography>
                  </Box>
                </Box>
              </div>
            </Box>
            </div>
        </div>
       
      </Box>

      <Link to={'/client/appointment-time'} className={classnames('menu-item')}>
      <Button variant='contained'>Back</Button>
        </Link>

        <Link to={'/client/appointment'} className={classnames('menu-item')}>
        <Button variant='contained'>Confirm</Button>
        </Link>
    </div>
  )
}