import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../contexts/auth';
import Home from '../pages/Home';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}