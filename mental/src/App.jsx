import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Navbar from './Component/Navbar';
import useDarkMode from './Hooks/useDarkMode';
import Home from './Apps/Home';
import Service from './Apps/Service';
import GetStarted from './Apps/GetStarted';
import Appointment from './Apps/Appointment';
import Counseling from './Component/Counseling';
import About from './Apps/About ';
import Footer from './Component/Footer';
import Dashboard from './Apps/Dashboard';
import Logout from './Apps/Logout';
import Appointments from './Apps/Appointments';
import Message from './Apps/Message';
import Patients from './Apps/Patients';
import Admin from './Apps/Admin';
import RequireAuth from './Component/RequireAuth';
import ProtectedRoute from './Component/ProtectedRoute';


import ClientDashboard from './Apps/ClientDashboard';
import ClientMessages from './Apps/ClientMessages';
import ClientResources from './Apps/ClientResources';
import Homes from './Apps/Homes';
import Login from './Apps/Login';

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();
  const allowedPaths = ['/', '/service', '/about',];
  const shouldShowNavbar = allowedPaths.includes(location.pathname.toLowerCase());
  const shouldShowFooter = allowedPaths.includes(location.pathname.toLowerCase());

  return (
    
      <div className={`min-h-screen ${
        darkMode 
          ? 'bg-gradient-to-tr from-green-100 to-teal-400 via-gray-100  text-white]'
          : 'bg-gradient-to-r from-green-50 via-green-100 to-green-200 text-green-900'
      }`}>
        {shouldShowNavbar && <Navbar  darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}

        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/service" element={<Service />} />
            <Route path="/about" element={<About />} />
            <Route path="/getstarted" element={<GetStarted />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/counseling" element={<Counseling />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />

            {/* ✅ Protected client routes using your ProtectedRoute */}
            <Route path="/dashboard" element={
              <ProtectedRoute><ClientDashboard /></ProtectedRoute>
            } />
            <Route path="/messages" element={
              <ProtectedRoute><ClientMessages /></ProtectedRoute>
            } />
            <Route path="/resources" element={
              <ProtectedRoute><ClientResources /></ProtectedRoute>
            } />
            
            <Route path="/homes" element={
              <ProtectedRoute><Homes /></ProtectedRoute>
            } />

            {/* ✅ Existing admin protected routes with RequireAuth */}
            <Route path="/appointments" element={
              <RequireAuth><Appointments /></RequireAuth>
            } />
            <Route path="/patients" element={
              <RequireAuth><Patients /></RequireAuth>
            } />
            <Route path="/message" element={
              <RequireAuth><Message /></RequireAuth>
            } />
            <Route path="/dashboard-admin" element={
              <RequireAuth><Dashboard /></RequireAuth>
            } />

            {/* ✅ Catch all */}
            <Route path="*" element={
              <div className="text-center text-2xl mt-10">Page Not Found</div>
            } />
          </Routes>
        </div>

        {shouldShowFooter && <Footer darkmode={darkMode} />}
      </div>
   
  );
}

export default App;
