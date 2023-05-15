import React, { useMemo, useState } from 'react';
import './AppointmentTime.scss';
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
        <div className='card-content'>
          <Typography variant='h5' component='div'>{name}</Typography>
          <Typography variant='h6' component='div'>{price} RON - {duration} minutes</Typography>

        </div>
      </div>

      
    );
  }


  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const buttons = [];

  for (let i = 1; i <= 31; i++) {
    const day = { id: i, label: `${i}` };
    buttons.push(day);
  }

  for (let i = 1; i <= 4; i++) {
    const day = { id: 31 + i, label: `${i}` };
    buttons.push(day);
  }

  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const settime = [
    {id: 1, label: '11:00'},
    {id: 2, label: '12:00'},
    {id: 3, label: '13:00'},
  ]


  return (
    <div className='page'>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Typography variant='h4' component='div' sx={{ flexGrow: 1, color:'#6610F2' }}>Step 3: Choose date and time</Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
          <Barber name = 'Mihai' rating = {4.5}/>
          <Service name = 'Simple haircut' price = {60} duration = {30}/>
        </Box>

        <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
        <div className='dashboard-card small'>
            <div className='card-content'>
              <Typography variant='h5' component='div'>July 2023</Typography>

              <div className="button-row">
                {buttons.map(button => (
                  <Button
                    key={button.id}
                    onClick={() => setSelectedButton(button.id)}
                    variant={selectedButton === button.id ? 'contained' : 'outlined'}
                    //className={selectedButton === button.id ? 'selected' : ''}
                  >
                    {button.label}
                  </Button>
                ))}
              </div>      
            </div>

          </div>
          <div className='dashboard-card small'>
            <div className='card-content'>
              <Typography variant='h5' component='div'>Time</Typography>

              <div className="button-col">
                {settime.map(button => (
                  <Button
                    key={button.id}
                    onClick={() => setSelectedTime(button.id)}
                    variant={selectedTime === button.id ? 'contained' : 'outlined'}
                    //className={selectedTime === button.id ? 'selected' : ''}
                  >
                    {button.label}
                  </Button>
                ))}
              </div>
                  <br></br>
              <Link to={'/client/appointment-confirm'} className={classnames('menu-item')}>
              <Button variant='contained'>Confirm</Button>
              </Link>
              
            </div>
          </div>
        </Box>

      </Box>

      <Link to={'/client/appointment-service'} className={classnames('menu-item')}>
      <Button variant='contained'>Back</Button>
        </Link>
    </div>
  )
}