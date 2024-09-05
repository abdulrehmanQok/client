import React, { useEffect, useState } from 'react'; // Added useState import
import axios from 'axios'; // Import axios for API requests
import { toast } from 'react-toastify'; // Import toast for notifications

const Profile = () => {
  const [user, setUser] = useState([]); // Initialize state for user data

  const getdata = async () => { // Made function async
    try {
      let response = await axios.get("http://localhost:8000/api/getuser"); // Await the axios call
      if (response) {
        console.log(response);
        setUser(response.data.detail); // Set user data correctly
        toast.success('Data fetched successfully!'); // Toast message on success
      }
    } catch (error) {
      console.log("Failed to fetch data", error);
      toast.error('Failed to fetch data'); // Toast message on error
    }
  };

  useEffect(() => {
    getdata(); // Fetch data when the component mounts
  }, []);

  return (
    <div>
    <h1 className="text-2xl font-bold text-center my-20">User Profile</h1>
    <table className="table-auto border-collapse border border-slate-400 text-center m-auto my-20 w-[80%] rounded">
        <thead>
          <tr className="text-xl font-semibold">
            <th className="border-collapse border border-slate-400">Name</th>
            <th className="border-collapse border border-slate-400">Email</th>
            <th className="border-collapse border border-slate-400">Add</th>
            <th className="border-collapse border border-slate-400">Delete</th>
          </tr>
        </thead>
        <tbody>
          {user.length === 0 ? ( // Corrected condition to check empty array
            <tr>
              <td colSpan="4">Loader...</td> {/* Properly spans all columns */}
            </tr>
          ) : (
            user.map((x, i) => (
              <tr key={i}>
                <td className="border border-slate-300">{x.name}</td>
                <td className="border border-slate-300">{x.email}</td>
                <td className="border border-slate-300">
                  <button onClick={() => addUser(x)}>Add</button> {/* Changed to Add button */}
                </td>
                <td className="border border-slate-300">
                  <button onClick={() => deleteUser(x)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;