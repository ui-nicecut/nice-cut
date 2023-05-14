import React, { useMemo } from 'react';
import './Appointment.scss';
import { Avatar, Box, Button, Rating, Typography } from '@mui/material';
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
    const to = '/client/appointment-service'

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
          
          
          <Box sx={{ justifyContent: 'flex-end', display: 'flex' }}>
            <Link to={to}>
              <Button variant='contained'>Select</Button>
            </Link>
          </Box>
          


      </div>

      
    );
  }

  return (
    <div className='page'>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Typography variant='h4' component='div' sx={{ flexGrow: 1, color:'#6610F2' }}>Step 1: Choose your barber</Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
          <Barber name = 'Mihai' rating = {4.5}/>
          <Barber name = 'Andrei' rating = {5}/>
          <Barber name = 'Bogdan' rating = {4}/>
        </Box>

        <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
          <Barber name = 'Marian' rating = {4}/>
          <Barber name = 'Marinela' rating = {3.5}/>
          <Barber name = 'Andreea' rating = {4}/>
        </Box>

        <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
          <Barber name = 'Andra' rating = {4.5}/>
          <Barber name = 'Vlad' rating = {5}/>
          <Barber name = 'Dumitru' rating = {4}/>
        </Box>
        

      </Box>
    </div>
  )
}