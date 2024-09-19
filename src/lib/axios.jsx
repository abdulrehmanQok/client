import axios from "axios";

const axoisins = axios.create({
    // baseURL: "http://localhost:8000/api",
    baseURL:"http://localhost:8000/api",
    // headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${localStorage.getItem("token")}`,
    // },
    // credentials: "include", // Include cookies in requests
    // send cookies to the server
    withCredentials:true , 
})
export default axoisins;