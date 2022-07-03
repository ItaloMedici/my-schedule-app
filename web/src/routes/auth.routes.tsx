import { Route, Routes } from 'react-router-dom';
import Auth from '../pages/Auth';
import Register from '../pages/Register';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={<Auth />} />
    </Routes>
  );
}