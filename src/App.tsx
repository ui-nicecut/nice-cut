import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Routes, Route } from 'react-router-dom';
import AdminLayout from './admin/admin-layout/AdminLayout';
import Dashboard from './admin/dashboard/Dashboard';
import HairStylists from './admin/hair-stylists/HairStylists';
import Services from './admin/services/Services';
import ScheduleEdit from './admin/schedule-edit/ScheduleEdit';

const App = () => {
  return (
    <Routes>
      <Route path="admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="hair-stylists" element={<HairStylists />} />
        <Route path="services" element={<Services />} />
        <Route path="schedule" element={<ScheduleEdit />} />
      </Route>
      {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
};

export default App;
