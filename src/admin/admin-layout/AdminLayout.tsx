import React from 'react';
import AdminSidebar from "../sidebar/AdminSidebar";
import { Outlet } from 'react-router-dom';
import './AdminLayout.scoped.scss';

export default function AdminLayout() {
  return (
    <div className='main-container'>
      <AdminSidebar />
      <div className='main-content'>
        <Outlet />
      </div>
    </div>
  );
}