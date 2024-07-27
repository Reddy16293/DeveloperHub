import React from 'react';
import { Link } from 'react-router-dom';
import bgpic from '../assets/bgdeveloper.jpg';

const Home = ({isLoggedIn}) => {
  return (
    <div className='min-h-screen  bg-bgdeveloper bg-cover bg-center bg-gray-800 text-white flex flex-col justify-center items-center'>
      <div>
        <h1 className='text-6xl text-white'>Developers Hub</h1>
      </div>
      <div className='flex flex-col items-center mt-4'>
        <h2 className='text-center mb-4'>
          Create Developer Profile, share posts, and get help from others
        </h2>
        <div className='flex gap-4'>
        <Link to='/login'>
        <button className='bg-green-300 text-black px-2 py-1 hover:bg-blue-300'>
              Sign In</button>
        </Link> 
          
        <Link to='/signup'>
        <button className='bg-green-300 text-black px-2 py-1 hover:bg-blue-300'>
              Sign UP</button>
        </Link> 
        </div>
      </div>
    </div>
  );
};

export default Home;
