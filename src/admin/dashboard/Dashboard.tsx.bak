import React, { useMemo } from 'react';
import './Dashboard.scss';
import { Box, Typography } from '@mui/material';

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

  return (
    <div className='page'>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Typography variant='h4' component='div' sx={{ flexGrow: 1 }}>Dashboad</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        <div className='dashboard-card'>
          <div className='card-content'>
            <Typography variant='h4' component='div'>Profits this month</Typography>
            <Typography variant='h3' component='div'>{numberFormatCurrency.format(data.profits)}</Typography>
          </div>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <div className='dashboard-card small'>
              <div className='card-content'>
                <Typography variant='h5' component='div'>Customers this month</Typography>
                <Typography variant='h4' component='div'>{numberFormat.format(data.customers)}</Typography>
              </div>
            </div>
            <div className='dashboard-card small'>
              <div className='card-content'>
                <Typography variant='h5' component='div'>New customers</Typography>
                <Typography variant='h4' component='div'>{numberFormat.format(data.newCustomers)}</Typography>
              </div>
            </div>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <div className='dashboard-card small'>
              <div className='card-content'>
                <Typography variant='h5' component='div'>Returning customers</Typography>
                <Typography variant='h4' component='div'>{numberFormat.format(data.returningCustomers)}</Typography>
              </div>
            </div>
            <div className='dashboard-card small'>
              <div className='card-content'>
                <Typography variant='h5' component='div'>Appointments</Typography>
                <Typography variant='h4' component='div'>{numberFormat.format(data.appointments)}</Typography>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </div>
  )
}