import React, { useMemo } from 'react';
import './AppointmentService.scoped.scss';
import { Box, Button, Rating, Typography } from '@mui/material';
import {
  Link,
  useResolvedPath
} from "react-router-dom";
import classnames from 'classnames';

export default function AppointmentService() {

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
      <div className='service-card'>
        <Typography variant='h5' component='div'>{name}</Typography>
        <Typography variant='h6' component='div'>{price} RON - {duration} minutes</Typography>
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
        <Typography variant='h4' component='div' sx={{ flexGrow: 1, color: '#6610F2' }}>Step 2: Choose your service</Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 3, mb: 2, alignItems: 'flex-start' }}>
        <Barber name='Mihai' rating={4.5} />
        <Box sx={{ flexGrow: 1, ml: 3 }}>
          <Service name='Simple haircut' price={60} duration={30} />
          <Service name='Complex haircut' price={90} duration={60} />
          <Service name='Beard trimming' price={40} duration={30} />
          <Service name='Eyebrows trimming' price={50} duration={20} />
        </Box>
      </Box>

      <Link to={'/client/appointment'} className={classnames('menu-item')}>
        <Typography variant='subtitle2'>Back</Typography>
      </Link>
    </div>
  )
}