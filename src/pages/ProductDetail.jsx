import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const ProductDetail = () => {
    const [product, setProduct]=useState()
    const {id} = useParams();
    const getdata = async()=>{
        let response = await axios.get(`http://localhost:8000/getbyid/${id}`)
         if(response){
            console.log(response)
            setProduct(response.data.detail)
            toast.success(response.data.message)
         }else{
             console.log("Failed to fetch data")
         }

    }
    useEffect(()=>{
        getdata()
    },[])
  return (
<div className='container w-[80%]  m-auto my-24'>
  <div className='flex flex-col md:flex-row justify-between border border-gray-400 rounded-md text-gray-500 mb-10 lg:mb-0 p-10'>
    <div className='w-full md:w-1/2 '>
      <img className='w-full h-64 object-contain object-center' src={product?.image} alt='Product Image'/>
    </div>
    <div className='text-center my-10 mx-12 w-full md:w-1/2'>
      <h1 className='text-2xl font-bold mb-4'>{product?.name}</h1>
      <p className='py-2'>{product?.description}</p>
      <p className='py-3 '>Price: ${product?.price}</p>
      <button className='bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 my-5 px-4 rounded'>
        Add to Cart
      </button>
    </div>
  </div>
</div>

  )
}

export default ProductDetail