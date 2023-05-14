import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import './Services.scss';
import { getStore } from '../../lib/util';
import { Box, Button, Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import { SERVICES_KEY } from '../../lib/keys';
import ServiceDialog from '../service-dialog/ServiceDialog';
import { Service } from '../../lib/types/Service';

export default function Services() {

  const [services, setServices] = React.useState([]);
  const [edititingService, setEditingService] = React.useState<Service>();
  const [dialogOpen, setDialogOpen] = React.useState(false);

  useEffect(refreshResults, []);

  function refreshResults() {
    setServices(getStore(SERVICES_KEY, []));
  }

  function handleDialogClose() {
    setDialogOpen(false);
    setEditingService(undefined);
    refreshResults();
  }

  function editEntity(entity: Service) {
    setEditingService(entity);
    setDialogOpen(true);
  }

  return (
    <div className='page'>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Typography variant='h4' component='div' sx={{ flexGrow: 1 }}>Services</Typography>
        <Button variant='outlined' onClick={() => setDialogOpen(true)}>Add</Button>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {services.map((service: Service) => (
          <ServiceCard key={service.id} service={service} onEdit={editEntity} />)
        )}
      </Box>
      <ServiceDialog open={dialogOpen} onClose={handleDialogClose} service={edititingService} />
    </div>
  );
}

function ServiceCard({ service, onEdit }: { service: Service, onEdit?: (service: Service) => void }) {
  return (
    <Box sx={{ width: 360 }}>
      <Card variant="outlined">
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle2" component="div">{service.name}</Typography>
              <Typography variant="body2" component="div">{service.price} RON</Typography>
            </Box>
            <IconButton>
              <i className='material-icons'>more_vert</i>
            </IconButton>
          </Box>
          <Box>
            <Typography variant='body1'>Duration</Typography>
            <Typography variant='body2'>{service.durationMinutes} min</Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant='contained' onClick={() => onEdit?.(service)}>Edit</Button>
        </CardActions>
      </Card>
    </Box>
  );
}