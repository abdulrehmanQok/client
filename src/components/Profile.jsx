import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Profile = () => {
    const [user, setUser]=useState([])
    const getdata = async()=>{
        let response = await axios.get("http://localhost:8000/api/getuser")
         if(response){
            console.log(response)
            setUser(response.data.detail)
            toast.success(response.data.message)
         }else{
             console.log("Failed to fetch data")
         }

    }
    useEffect(()=>{
        getdata()
    },[])
  return (
<div>
  <h1 className='text-center text-gray-500 text-2xl font-medium my-10'>User Profile</h1>
<table className="table-auto border-collapse border border-slate-400 text-center m-auto  w-[80%] rounded mb-10">
  <thead>
    <tr className='text-xl font-semibold'>
      <th className='border border-slate-300'>Name</th>
      <th className='border border-slate-300'>Email</th>
      <th className='border border-slate-300'>Add</th>
      <th className='border border-slate-300'>Delete</th>
    </tr>
  </thead>
  <tbody>
    {
      user.length === 0 ? (
        <tr>
          <td colSpan="4">Loading...</td> {/* Use a table row and cell for the loader */}
        </tr>
      ) : (
        user.map((x, i) => (
          <tr key={i}>
            <td className='border border-slate-300'>{x.name}</td>
            <td className='border border-slate-300'>{x.email}</td>
            <td className='border border-slate-300'>
              <button onClick={() => { alert("Add clicked for user: " + x.name) }}>Add</button>
            </td>
            <td className='border border-slate-300'>
              <button onClick={() => { alert("Delete clicked for user: " + x.name) }}>Delete</button>
            </td>
          </tr>
        ))
      )
    }
  </tbody>
</table>
</div>


  )
}

export default Profile