import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import './HairStylists.scss';
import { getAge, getStore } from '../../lib/util';
import { Box, Button, Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import { STYLISTS_KEY } from '../../lib/keys';
import HairStylistDialog from '../hair-stylist-dialog/HairStylistDialog';
import { HairStylist } from '../../lib/types/HairStylist';
import ScheduleDialog from '../schedule-dialog/ScheduleDialog';

export default function HairStylists() {

  const [stylists, setStylists] = React.useState([]);
  const [edititingStylist, setEditingStylist] = React.useState<HairStylist>();
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [scheduleDialogOpen, setScheduleDialogOpen] = React.useState(false);

  useEffect(refreshResults, []);

  function refreshResults() {
    setStylists(getStore(STYLISTS_KEY, []));
  }

  function handleDialogClose() {
    setDialogOpen(false);
    setEditingStylist(undefined);
    refreshResults();
  }

  function editEntity(entity: HairStylist) {
    setEditingStylist(entity);
    setDialogOpen(true);
  }

  function handleScheduleDialogClose() {
    setScheduleDialogOpen(false);
    setEditingStylist(undefined);
    refreshResults();
  }

  function editSchedule(entity: HairStylist) {
    setEditingStylist(entity);
    setScheduleDialogOpen(true);
  }

  return (
    <div className='page'>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Typography variant='h4' component='div' sx={{ flexGrow: 1 }}>Hair Stylists</Typography>
        <Button variant='outlined' onClick={() => setDialogOpen(true)}>Add</Button>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {stylists.map((stylist: HairStylist) => (
          <HairStylistCard key={stylist.id} stylist={stylist} onEdit={editEntity} onEditSchedule={editSchedule}/>)
        )}
      </Box>
      <HairStylistDialog open={dialogOpen} onClose={handleDialogClose} stylist={edititingStylist} />
      <ScheduleDialog open={scheduleDialogOpen} onClose={handleScheduleDialogClose} stylist={edititingStylist} />
    </div>
  );
}

function HairStylistCard({ stylist, onEdit, onEditSchedule }: { stylist: HairStylist, onEdit?: (stylist: HairStylist) => void, onEditSchedule?: (stylist: HairStylist) => void }) {
  return (
    <Box sx={{ width: 360 }}>
      <Card variant="outlined">
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Avatar sx={{ width: 40, height: 40, mr: 1 }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle2" component="div">{stylist.firstName} {stylist.lastName}</Typography>
              <Typography variant="body2" component="div">{getAge(stylist.birthDate)}</Typography>
            </Box>
            <IconButton>
              <i className='material-icons'>more_vert</i>
            </IconButton>
          </Box>
          <Box>
            <Typography variant='body1'>Phone number</Typography>
            <Typography variant='body2'>{stylist.phoneNumber}</Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant='outlined' onClick={() => onEdit?.(stylist)}>Edit details</Button>
          <Button variant="contained" onClick={() => onEditSchedule?.(stylist)}>Edit schedule</Button>
        </CardActions>
      </Card>
    </Box>
  );
}