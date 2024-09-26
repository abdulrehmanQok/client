import React, { useEffect } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landingpage from './pages/Landingpage';
import Login from './auth/Login';
import Register from './auth/Register';
import AdminPage from './pages/AdminPage';
import CreateProductForm from './components/CreateProductForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUserStore } from './stores/useUserStore';

const App = () => {
  const navigate = useNavigate(); // Note: lowercase "navigate" from useNavigate hook
  const { user, checkAuth } = useUserStore();

  // Ensure user authentication state is checked once on component mount
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // Debugging user role
  console.log('Logged in user:', user); 

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />

        {/* If the user is not logged in, allow access to Register. Otherwise, redirect to home */}
        <Route path="/signup" element={!user ? <Register /> : <Navigate to="/" />} />

        {/* If the user is not logged in, allow access to Login. Otherwise, redirect to home */}
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />

        {/* Protect the create product form page, redirect to login if not logged in */}
        <Route path="/create" element={user ? <CreateProductForm /> : <Navigate to="/login" />} />

        {/* Admin route, redirect to login if not an admin */}
        <Route
          path="/secret-dashboard"
          element={user?.user?.role === 'admin' ? <AdminPage /> : <Navigate to="/login" />}
        />

        {/* Additional admin route (same as secret-dashboard) */}
        <Route path="/admin" element={user?.role === 'admin' ? <AdminPage /> : <Navigate to="/login" />} />
      </Routes>
      
      <ToastContainer />
    </div>
  );
};

export default App;