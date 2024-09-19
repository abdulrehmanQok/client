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
    },[id])
  if (!product) {
        return <div>Loading product details...</div>; // Loading state
    }

    return (
        // <div className='container mx-auto my-24'>
        //     <div className='flex flex-wrap justify-center'>
        //         <div className='lg:w-1/2 w-full text-center'>
        //         <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
        //         <p className="mt-4 text-2xl font-semibold text-gray-900">${product.price}</p>
        //         <p className="leading-relaxed text-lg">{product.description}</p>
        //         <h3 className="text-xl text-indigo-500 mb-4">{product.category}</h3>
        //             <img className="h-64 rounded w-full object-contain object-center mb-6" src={product.image} alt={product.name} />
        //             <h3 className="text-xl text-indigo-500 mb-4">{product.stock}</h3>
        //         </div>
        //     </div>
        // </div>


        <section class="text-gray-600 body-font border border-collapse solid-black-900">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-contain object-center rounded w-72 h-72" src={product.image} alt={product.name}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{product.title}</h1>
      <p class="mb-8 leading-relaxed">{product.description}</p>
     
      <h3 className="text-xl text-indigo-500 mb-4">{product.category}</h3>
      <p className="mt-4 text-2xl font-semibold text-gray-900">${product.price}</p>
      <h3 className="text-xl text-indigo-500 mb-4">{product.stock}</h3>
        
      
    </div>
  </div>
</section>

    );

    
  
}

export default ProductDetail

