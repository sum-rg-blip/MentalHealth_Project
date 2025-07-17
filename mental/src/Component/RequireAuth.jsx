import React from 'react';
import { Navigate } from 'react-router-dom';

function RequireAuth({ children }) {
  const isLoggedIn = sessionStorage.getItem("adminLoggedIn");
  return isLoggedIn ? children : <Navigate to="/admin" replace />;
}

export default RequireAuth;
