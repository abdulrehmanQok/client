import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const getdata = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/getuser");
            if (response) {
                console.log(response);
                setUser(response.data.detail);
                toast.success("Data fetched successfully!");
            } else {
                toast.error("Failed to fetch data");
            }
        } catch (error) {
            toast.error("Error fetching data");
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getdata();
    }, []);

    return (
        <div>
        <h1 className="text-3xl font-semibold text-center">Profile</h1>
            <table className="table-auto border-collapse border border-slate-400 text-center m-auto my-20 w-[80%] bg-[#C68FE6]">
                <thead>
                    <tr className='text-xl font-semibold'>
                        <th className='border border-slate-300'>Name</th>
                        <th className='border border-slate-300'>Email</th>
                        <th className='border border-slate-300'>Add</th>
                        <th className='border border-slate-300'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan="4" className='border border-slate-300'>Loading...</td>
                        </tr>
                    ) : user && user.length > 0 ? (
                        user.map((item, index) => (
                            <tr key={index}>
                                <td className='border border-slate-300'>{item.name}</td>
                                <td className='border border-slate-300'>{item.email}</td>
                                <td className='border border-slate-300'>
                                    <button onClick={() => {/* Add your functionality here */}}>
                                        Add
                                    </button>
                                </td>
                                <td className='border border-slate-300'>
                                    <button onClick={() => {/* Add your functionality here */}}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className='border border-slate-300'>No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Profile;
