import React, { useEffect } from 'react';
import './ServiceDialog.scss';
import { getStore } from '../../lib/util';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { Service } from '../../lib/types/Service';
import { v4 as uuidv4 } from 'uuid';
import { SERVICES_KEY } from '../../lib/keys';

interface ServiceProps {
  service?: Service;
  open: boolean;
  onClose: () => void;
}

export default function ServiceDialog({ service, open, onClose }: ServiceProps) {

  useEffect(() => {
    setServiceForm(initialValues());
  }, [open, service]);

  const [serviceForm, setServiceForm] = React.useState<Service>(initialValues());

  const onChange = (field: keyof Service) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setServiceForm({ ...serviceForm, [field]: event.target.value });
  };

  function initialValues() {
    return {
      id: service?.id || '',
      name: service?.name || '',
      price: service?.price || 0,
      durationMinutes: service?.durationMinutes || 0
    };
  }

  function saveEntity() {
    const services = getStore<Service[]>(SERVICES_KEY, []);
    if (service) {
      const index = services.findIndex(s => s.id === service.id);
      services[index] = serviceForm;
    } else {
      serviceForm.id = uuidv4();
      services.push(serviceForm);
    }
    localStorage.setItem(SERVICES_KEY, JSON.stringify(services));
    onClose();
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {service ? 'Edit' : 'Add'} service
      </DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField required label="Name" value={serviceForm.name} onChange={onChange('name')} />
          </div>
          <div>
            <TextField required type='number' label="Price" value={serviceForm?.price} onChange={onChange('price')} />
          </div>
          <div>
            <TextField required type='number' label="Duration" value={serviceForm?.durationMinutes} onChange={onChange('durationMinutes')} />
          </div>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={saveEntity}>Save</Button>
      </DialogActions>
    </Dialog>
  );

}