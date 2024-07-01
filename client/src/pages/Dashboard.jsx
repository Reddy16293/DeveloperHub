import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Card from '../components/Card';
import axios from 'axios';

const Dashboard = () => {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/allprofiles', {
      headers: {
        'x-token': localStorage.getItem('token'),
      }
    })
    .then(res => {
      setUsersData(res.data.data);
      setLoading(false);
    })
    .catch(err => {
      console.error("Error fetching profiles:", err);
      setLoading(false);
    });
  }, []); // Empty dependency array means this runs once when the component mounts

  if (!localStorage.getItem('token')) {
    return <Navigate to='/login' />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-start items-center min-h-screen text-white">
      <div className="text-4xl my-8">Welcome to Developer Hub</div>
      <div className="w-full max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-x-6">
        {usersData.length >= 1 ? 
          usersData.map(profile => <Card key={profile._id} profile={profile} />) 
          : <div>No profiles found.</div>
        }
      </div>
    </div>
  );
};

export default Dashboard;
