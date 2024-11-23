import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component }) => {
  const usuario = JSON.parse(localStorage.getItem('usuarioActivo'));
  return usuario ? Component : <Navigate to="/login" />;
};

export default ProtectedRoute;
