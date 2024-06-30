import React from 'react';
import userpic from '../assets/userpic.jpeg';
import { Link } from 'react-router-dom';

const MyProfile = () => {
  return (
    <>
      <div className='w-full flex justify-start p-4'>
        <Link to={'/dashboard'}>
          <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300'>
            Back To Dashboard
          </button>
        </Link>
      </div>

      <div className='text-white flex w-11/12 md:w-2/3 lg:w-1/2 bg-gray-900 m-auto min-h-screen flex-col gap-y-10 justify-center items-center py-10 px-5 md:px-10 lg:px-20'>

        <div className='text-white text-4xl mb-6'>
          <h1 className='font-bold'>My Profile</h1>
        </div>

        <div className='flex flex-col justify-center items-center gap-5 mb-8'>
          <div>
            <img src={userpic} alt="user" className='object-cover w-[120px] h-[120px] rounded-full shadow-lg' />
          </div>

          <div className='relative flex flex-col justify-center items-center gap-2 text-lg'>
            <h1><b>Full Name:</b> C.Reddy Sekhar</h1>
            <h1><b>Email:</b> email@example.com</h1>
            <h1><b>Mobile:</b> +123456789</h1>
            <h1><b>Country:</b> India</h1>
          </div>
        </div>

        <div className='w-full flex flex-col items-center'>
          <h1 className='text-blue-300 text-2xl mb-4'>Review and Ratings</h1>
          <div className='bg-sky-400 h-[120px] w-[240px] flex flex-col border border-black shadow-md rounded-lg justify-center items-center mb-8 p-4'>
            <h2 className='text-lg font-semibold'>John Doe</h2>
            <h2 className='text-lg'>4/5</h2>
          </div>

          <div className='mt-4 w-full flex flex-col items-center'>
            <h1 className='text-xl mb-4'>Submit Your Review</h1>
            <form className='flex flex-col items-center'>
              <label className='flex flex-col mb-3 w-full'>
                <span className='mb-1'>Give Your Rating</span>
                <input className='text-black py-2 px-4 w-full rounded' type='text' name='rating' placeholder='Enter Your Rating Out Of 5' />
              </label>
              <button className='rounded text-black bg-zinc-400 hover:bg-zinc-600 transition duration-300 mx-auto my-3 py-2 px-4'>
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
