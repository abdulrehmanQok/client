import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './pages/Landingpage'
import Login from './auth/Login'
import { Route, Routes } from 'react-router-dom'
import Register from './auth/Register'
import Layout from './components/Layout'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './components/Profile'
import Product from './pages/Product'
import Dashboard from './components/Dashboard'
import { userStore } from './store/userStore'


const App = () => {
 const {user}= userStore();
  return (
    <div>
<Routes>
  <Route path="/" element={<Landingpage />} />
  <Route path="/login" element={<Login/> ? "/" :"/login"} />
  <Route path="/register" element={<Register/> ? "/login" :"/register"} />
  {/* <Route path="/profile" element={<Layout><Profile /></Layout>} /> */}
  <Route path="/" element={ user !== "admin" ? "/" : <Dashboard/>  }/>
  <Route path="/product" element={<Layout><Product /></Layout>} />
</Routes>
<ToastContainer/>
    </div>
  )
}

export default App
