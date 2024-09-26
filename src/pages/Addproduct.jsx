import React, { useState } from 'react'
import { useProductstore } from '../store/useProductstore'

const Addproduct = () => {
    const [newProduct,setNewProduct]=useState({
        name:"",
        description:"",
        price:"",
        category:"",
        image:"",
    })
    const {createProduct,loading}=useProductstore();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            await createProduct(newProduct);
            setNewProduct({
                name:"",
                description:"",
                price:"",
                category:"",
                image:"",
            })
            
        } catch (error) {
            console.error("Error adding product:");
            
        }
    };
    const handleImageChange=(e)=>{
        const file=e.target.files[0];
        if (file){
            const reader=new FileReader();
            reader.onloadend=()=>{
                setNewProduct({...newProduct,image:read.result})
            };
            reader.readAsDataURL(file)
        
        reader.readAsDataURL(file);
        }
    }
  return (
    <div>
    <h2 className='text-2xl font-semibold mb-6 text-emerald-300'>
    create new product
    </h2>
    
    

      
    </div>
  )
}

export default Addproduct
