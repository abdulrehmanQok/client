import React from 'react';

const LogoutForm = () => {
  // Handle form submission (log out)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Here, you would typically log the user out, for example:
    // Example: axios.post('your-api-url/logout')

    alert("Logout successful!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center px-4 py-8">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Log Out</h2>

        <form onSubmit={handleSubmit}>
          {/* Confirmation Message */}
          <div className="mb-6 text-center">
            <p className="text-lg text-gray-700">Are you sure you want to log out?</p>
          </div>

          {/* Log Out Button */}
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-red-400 transition duration-300 transform hover:scale-105"
          >
            Log Out
          </button>
        </form>

        {/* Cancel Option */}
        <div className="text-center text-gray-500 mt-6">
          <p>
            Changed your mind?{" "}
            <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">
              Stay logged in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoutForm;
