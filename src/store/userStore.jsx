import { create } from "zustand";
import axoisins from "../lib/axios";
import { toast } from "react-toastify";


export const userStore = create((set,get)=>({
    user:null,
    loading:false,
    checkingAuth:true,
   signup:async({name,email,password})=>{
    set({loading:true})
    try {
        const res =await axoisins.post("/register",{name,email,password})
        set({user:res.data,loading:false,checkingAuth:false})
        toast.success("User registered successfully")
    } catch (error) {
        set({loading:false})
        toast.error(res.response.data)
    }
   },
   login:async({email,password})=>{
    set({loading:true})
    try {
        const res = await axoisins.post("/login",{email,password})
        console.log(res)
        set({user:res.data,loading:false,checkingAuth:false})
        toast.success("User logged in successfully")
    } catch (error) {
        set({loading:false})
        toast.error(res.response.data)
        
    }
   },
   logout:()=>{
try {
          axoisins.post("/logout");
    set({user:null,checkingAuth:true})
    toast.success("User logged out successfully")
} catch (error) {
    toast.error("Failed to logout")

    
}
   },
//    checkAuth:async()=>{
//     set({checkingAuth:true})
//     try {
//         const res = await axoisins.get("/checkauth")
//         set({user:res.data,checkingAuth:false})
//     } catch (error) {
//         set({checkingAuth:false})
        
//     }
// }
}))