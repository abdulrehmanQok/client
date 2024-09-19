import { Lock } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const admin = true;
  const user = false;
  return (
    <div className='fixed top-0 left-0 w-full bg-gray-900 opacity-90 background-blur-md shadow-lg z-40 transition-all border-b border-emerald-800'>
    <div className='container mx-auto px-4 py-3'>
      <div className='flex flex-wrap justify-between items-center'>
      <Link to='/' className='text-2xl font-bold text-emerald-400 items-center space-x-2 flex'>
      Online E.Store

      </Link>
      <nav className='flex flex-wrap items-center gap-4'>
  <div className='relative group'>
  <Link to={"/"} className=' text-gray-300 hover:bg-emerald-500 mx-2 transition-all duration-300 ease-out'>
          Home
       </Link>

     {
      user&&(
        <Link to={"/cart"} className=' text-gray-300 hover:bg-emerald-500 transition-all duration-300 ease-out mx-2'>
          Cart
       </Link>
      )
     } {
      admin&& (
        <Link to={"/admin"} className=' text-gray-300 hover:bg-emerald-500  mx-2 transition-all duration-300 ease-out'>
          Dashboard
          <Lock className='inline-block mr-1'/>
       </Link>
      )
     }
  {
    user  ? (
      <Link to={"/logout"} className=' text-gray-300 hover:bg-emerald-500 mx-2 transition-all duration-300 ease-out'>
        Logout
       </Link>
    ) :(
      <Link to={"/login"} className=' text-gray-300 hover:bg-emerald-500 mx-2 transition-all duration-300 ease-out'>
        Sign In
       </Link>
    )
  }
  </div>

      </nav>


      </div>
    </div>




    </div>
  )
}

export default Navbar