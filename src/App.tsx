import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Routes, Route } from 'react-router-dom';
import AdminLayout from './admin/admin-layout/AdminLayout';
import ClientLayout from './client/client-layout/ClientLayout';
import Dashboard from './admin/dashboard/Dashboard';
import HairStylists from './admin/hair-stylists/HairStylists';
import Appointment from './client/appointment/Appointment';
import AppointmentService from './client/appointmentservice/AppointmentService';
import AppointmentTime from './client/appointmenttime/AppointmentTime';
import AppointmentConfirm from './client/appointmentconfirm/AppointmentConfirm';

const App = () => {
  return (
    <Routes>
      <Route path="admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="hair-stylists" element={<HairStylists />} />
      </Route>
      <Route path="client" element={<ClientLayout />}>
        <Route path="appointment" element={<Appointment />} />
        <Route path="appointment-service" element={<AppointmentService />} />
        <Route path="appointment-time" element={<AppointmentTime />} />
        <Route path="appointment-confirm" element={<AppointmentConfirm />} />
      </Route>
      {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
};

export default App;
