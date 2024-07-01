import React, { useEffect, useState } from 'react';
import axios from 'axios';
import userpic from '../assets/userpic.jpeg';
import { Navigate, Link } from 'react-router-dom';

const MyProfile = ({ isLoggedIn }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [myReview, setMyReview] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const profileRes = await axios.get('http://localhost:5000/api/myprofile', {
          headers: {
            'x-token': localStorage.getItem('token')
          }
        });
        setUserData(profileRes.data.data);
        const reviewRes = await axios.get('http://localhost:5000/api/myreview', {
          headers: {
            'x-token': localStorage.getItem('token')
          }
        });
        setMyReview(reviewRes.data.data);
      } catch (err) {
        console.error("Error fetching profile or review data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (!localStorage.getItem('token')) {
    return <Navigate to='/login' />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>Error loading profile data.</div>;
  }

  return (
    <div className='text-white h-screen bg-gray-900 flex flex-col gap-y-10 justify-center items-center'>
      <div className='text-white text-4xl'>
        <h1>My Profile</h1>
      </div>
      
      <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
        <div className='flex flex-col justify-center items-center gap-5'>
          <div>
            <img src={userpic} alt="user" className='object-cover w-[120px] h-[120px] rounded-full' />
          </div>
          
          <div className='flex flex-col justify-center items-center gap-1'>
            <h1><b>Full Name:</b> {userData.fullname}</h1>
            <h1><b>Email:</b> {userData.email}</h1>
            <h1><b>Mobile:</b> {userData.mobile}</h1>
            <h1><b>Country:</b> India</h1>
            <button className='bg-blue-500 py-1 px-3 rounded mt-4'>Edit Profile</button>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center gap-1 md:ml-10'>
          <h4 className='text-2xl text-blue-100 font-semibold mb-2'>Skills</h4>
          {userData.skills ? (
            <ul className='list-disc pl-4'>
              {userData.skills.split(',').map((skill, index) => (
                <li key={index} className='text-xl text-pink-200'>{skill.trim()}</li>
              ))}
            </ul>
          ) : (
            <p>No skills available</p>
          )}
        </div>
      </div>
      
      <div className='w-full flex flex-col justify-center items-center'>
        <h1 className='text-2xl text-blue-100 font-semibold mb-2'>Ratings</h1>
        {myReview ? (
          myReview.map(review => (
            <div key={review._id} className='mb-4'>
              <h4><Link to='#'>{review.taskprovider}</Link></h4>
              <h2>Rating: {review.rating}/5</h2>
            </div>
          ))
        ) : (
          <p>No reviews available</p>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
