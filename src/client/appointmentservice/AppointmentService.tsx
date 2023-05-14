import React, { useMemo } from 'react';
import './AppointmentService.scss';
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

    const url = useResolvedPath(to).pathname;
    const active = window.location.pathname === url;
    return (
      <div className='dashboard-card small'>


        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <img src="/scissors.png" alt="logo" className='logo' width = "40" height = "40" />
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
      <div className='dashboard-card small'>
        <div className='card-content'>
          <Typography variant='h5' component='div'>{name}</Typography>
          <Typography variant='h6' component='div'>{price} RON - {duration} minutes</Typography>


          <Box sx={{ justifyContent: 'flex-end', display: 'flex' }}>
            <Link to={to}>
              <Button variant='contained'>Select</Button>
            </Link>
          </Box>
        </div>
      </div>

      
    );
  }

  return (
    <div className='page'>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Typography variant='h4' component='div' sx={{ flexGrow: 1, color:'#6610F2' }}>Step 2: Choose your service</Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
          <Barber name = 'Mihai' rating = {4.5}/>
          <Service name = 'Simple haircut' price = {60} duration = {30}/>
          <Service name = 'Complex haircut' price = {90} duration = {60}/>
          <Service name = 'Beard trimming' price = {40} duration = {30}/>
          <Service name = 'Eyebrows trimming' price = {50} duration = {20}/>
        </Box>

      </Box>

      <Link to={'/client/appointment'} className={classnames('menu-item')}>
          <Typography variant='subtitle2'>Back</Typography>
        </Link>
    </div>
  )
}