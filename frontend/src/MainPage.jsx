import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate('/user/login'); // Change the route later
  };

  const handleAdminClick = () => {
    navigate('/admin/adminLogin'); // Change the route later
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="space-x-4">
        <button
          onClick={handleUserClick}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          User
        </button>
        <button
          onClick={handleAdminClick}
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        >
          Admin
        </button>
      </div>
    </div>
  );
};

export default HomePage;
