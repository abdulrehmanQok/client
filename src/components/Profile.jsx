import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Profile = () => {
    const [users, setUsers] = useState([]); // List of users
    const [loading, setLoading] = useState(true);
    const [editingUserId, setEditingUserId] = useState(null); // ID of the user being edited
    const [newName, setNewName] = useState(''); // New name for editing
    const [newEmail, setNewEmail] = useState(''); // New email for editing

    // Function to fetch user data
    const getdata = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/getuser");
            if (response.data.detail) {
                setUsers(response.data.detail); // Set the users array
                toast.success("Data fetched successfully!");
            } else {
                toast.error("No user data found");
            }
        } catch (error) {
            toast.error("Error fetching data");
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    useEffect(() => {
        getdata();
    }, []);

    // Handle the edit button click and initiate editing mode
    const handleEditClick = (userId, currentName, currentEmail) => {
        setEditingUserId(userId); // Only the selected user's ID is stored
        setNewName(currentName); // Pre-fill the input field with the current name
        setNewEmail(currentEmail); // Pre-fill the input field with the current email
    };

    // Handle input change for name
    const handleNameChange = (e) => {
        setNewName(e.target.value); // Update the name being typed
    };

    // Handle input change for email
    const handleEmailChange = (e) => {
        setNewEmail(e.target.value); // Update the email being typed
    };

    // Handle the save action after editing
    const handleUpdateUser = async (id) => {
        if (!newName || !newEmail) {
            toast.error("Name and email cannot be empty");
            return;
        }
        try {
            const response = await axios.put(`http://localhost:8000/api/update/${id}`, { name: newName, email: newEmail });
            if (response.status === 200) {
                toast.success("User updated successfully!");
                setEditingUserId(null); // Stop editing mode
                setNewName(''); // Clear the input field
                setNewEmail(''); // Clear the input field
                getdata(); // Refresh the user data
            } else {
                toast.error("Failed to update the user");
            }
        } catch (error) {
            toast.error("Error updating user");
            console.error("Error updating user:", error);
        }
    };

    // Handle delete user
    const handleDeleteUser = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/delete/${id}`); // Correct URL with backticks
            if (response.status === 200) {
                toast.success("User deleted successfully!");
                getdata(); // Refresh the user list after deletion
            } else {
                toast.error("Failed to delete the user");
            }
        } catch (error) {
            toast.error("Error deleting user");
            console.error("Error deleting user:", error);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-semibold text-center">Profile</h1>
            <table className="table-auto border-collapse border border-slate-400 text-center m-auto my-20 w-[80%] bg-[#FFE5CF]">
                <thead>
                    <tr className='text-xl font-semibold'>
                        <th className='border border-slate-300'>Name</th>
                        <th className='border border-slate-300'>Email</th>
                        <th className='border border-slate-300'>Edit</th>
                        <th className='border border-slate-300'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan="4" className='border border-slate-300'>Loading...</td>
                        </tr>
                    ) : users && users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user._id}>
                                <td className='border border-slate-300'>
                                    {editingUserId === user._id ? (
                                        <input
                                            type="text"
                                            value={newName}
                                            onChange={handleNameChange}
                                            className="border p-1"
                                        />
                                    ) : (
                                        user.name
                                    )}
                                </td>
                                <td className='border border-slate-300'>
                                    {editingUserId === user._id ? (
                                        <input
                                            type="text"
                                            value={newEmail}
                                            onChange={handleEmailChange}
                                            className="border p-1"
                                        />
                                    ) : (
                                        user.email
                                    )}
                                </td>
                                <td className='border border-slate-300'>
                                    {editingUserId === user._id ? (
                                        <button
                                            onClick={() => handleUpdateUser(user._id)}
                                            className="bg-blue-500 text-white py-1 px-3 rounded"
                                        >
                                            Save
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleEditClick(user._id, user.name, user.email)}
                                            className="bg-yellow-500 text-white py-1 px-3 rounded"
                                        >
                                            Edit
                                        </button>
                                    )}
                                </td>
                                <td className='border border-slate-300'>
                                    <button
                                        onClick={() => handleDeleteUser(user._id)}
                                        className="bg-red-500 text-white py-1 px-3 rounded"
                                    >
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
};

export default Profile;
