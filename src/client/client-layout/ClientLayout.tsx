import React from 'react';
import ClientTopbar from "../topbar/ClientTopbar";
import { Outlet } from 'react-router-dom';
import './ClientLayout.scss';

export default function ClientLayout() {
  return (
    <div className='main-container'>
      <ClientTopbar />
      <div className='main-content'>
        <Outlet />
      </div>
    </div>
  );
}