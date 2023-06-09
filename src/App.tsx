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
import Home from './client/home/Home';
import Servicii from './client/servicii/Servicii';
import Contact from './client/contact/Contact';
import Account from './client/account/Account';

import Services from './admin/services/Services';


const App = () => {
  return (
    <Routes>
      <Route path="admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="hair-stylists" element={<HairStylists />} />
        <Route path="services" element={<Services />} />
        {/* <Route path="schedule" element={<ScheduleDialog />} /> */}
      </Route>
      <Route path="client" element={<ClientLayout />}>
        <Route path="appointment" element={<Appointment />} />
        <Route path="appointment-service" element={<AppointmentService />} />
        <Route path="appointment-time" element={<AppointmentTime />} />
        <Route path="appointment-confirm" element={<AppointmentConfirm />} />
        <Route path="account" element={<Account />} />
		<Route path="home" element={<Home />} />
		<Route path="services" element={<Servicii />} />
		<Route path="contact" element={<Contact />} />
      </Route>
      {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
};

export default App;
