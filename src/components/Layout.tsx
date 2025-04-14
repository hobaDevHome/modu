import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-800 via-teal-700 to-amber-500">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}