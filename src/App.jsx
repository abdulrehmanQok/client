import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './pages/Landingpage'
import Login from './auth/Login'
import { Route, Routes } from 'react-router-dom'
import Register from './auth/Register'
import Layout from './components/Layout'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
<Layout>
<Routes>
<Route path='/' element={<Landingpage/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/register' element={<Register/>}></Route>
</Routes>
</Layout>
<ToastContainer/>
    </div>
  )
}

export default App
