import React, { useEffect } from 'react';
import './HairStylistDialog.scss';
import { getStore } from '../../lib/util';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { HairStylist } from '../../lib/types/HairStylist';
import { v4 as uuidv4 } from 'uuid';
import { STYLISTS_KEY } from '../../lib/keys';

interface HairStylistProps {
  stylist?: HairStylist;
  open: boolean;
  onClose: () => void;
}

export default function HairStylistDialog({ stylist, open, onClose }: HairStylistProps) {

  useEffect(() => {
    console.log('resetting form', stylist)
    setStylistForm(initialValues());
  }, [open, stylist]);

  const [stylistForm, setStylistForm] = React.useState<HairStylist>(initialValues());

  const onChange = (field: keyof HairStylist) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setStylistForm({ ...stylistForm, [field]: event.target.value });
  };

  function initialValues() {
    return {
      id: stylist?.id || '',
      firstName: stylist?.firstName || '',
      lastName: stylist?.lastName || '',
      phoneNumber: stylist?.phoneNumber || '',
      email: stylist?.email || '',
      birthDate: stylist?.birthDate || new Date().toISOString().split('T')[0],
    };
  }

  function saveEntity() {
    const stylists = getStore<HairStylist[]>(STYLISTS_KEY, []);
    if (stylist) {
      const index = stylists.findIndex(s => s.id === stylist.id);
      stylists[index] = stylistForm;
    } else {
      stylistForm.id = uuidv4();
      stylists.push(stylistForm);
    }
    localStorage.setItem(STYLISTS_KEY, JSON.stringify(stylists));
    onClose();
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {stylist ? 'Edit' : 'Add'} hair stylist
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
            <TextField required label="First name" value={stylistForm.firstName} onChange={onChange('firstName')} />
            <TextField required label="Last name" value={stylistForm?.lastName} onChange={onChange('lastName')} />
          </div>
          <div>
            <TextField required label="Phone number" value={stylistForm?.phoneNumber} onChange={onChange('phoneNumber')} />
            <TextField required label="Email" value={stylistForm?.email} onChange={onChange('email')} />
          </div>
          <div>
            <TextField required type='date' label="Birth date" value={stylistForm?.birthDate} onChange={onChange('birthDate')} />
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