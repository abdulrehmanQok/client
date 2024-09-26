import { create } from "zustand";
import axoisins from "../lib/axios";
import { toast } from "react-toastify";
import { get } from "react-hook-form";


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
   checkAuth:async()=>{
    set({checkAuth:true})
    try {
        const response = await axoisins.get("/auth/profile")
        set({user:res.data,checkingAuth:false})
    } catch (error) {
        set({checkingAuth:false})
        
    }
},
refreshtoken:async()=>{
    if(get().checkAuth) return;
    set({checkAuth:True})
    try {
        const response = await axoisins.post("/auth/refreshtoken")
        set({user:response.data,checkAuth:false})
    } catch (error) {
        toast.error("failed to refresh token")
    }
}
}))
let refreshtoken=null;
axoisins.interceptors.response.use(
    (response)=>response,
    async(error)=>{
        if(error.response.status === 401 && get().checkAuth){
            await get().refreshtoken
            return axoisins(error.config);
        }
        return Promise.reject(error);
    }
)