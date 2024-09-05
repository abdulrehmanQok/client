import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div className='text-gray-500'>
    <Navbar/>
    <div className='min-h-screen'>
        {children}
    </div>
<footer className='bg-slate-900 text-white py-10 text-center'>
    &copy; 2021 Tailblocks. All rights reserved.

</footer>
    </div>
  )
}

export default Layout