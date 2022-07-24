import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../contexts/auth';
import Home from '../pages/Home';
import ScheduleForm from '../pages/ScheduleForm';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/atendimento" element={<ScheduleForm />}>
        <Route path=":idSchedule" element={<ScheduleForm />} />
      </Route>
    </Routes>
  );
}