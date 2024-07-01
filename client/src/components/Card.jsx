import React from 'react';
import userpic from '../assets/userpic.jpeg';
import { useNavigate } from 'react-router';

const Card = () => {
    const navigate=useNavigate();

    
  function clickHandler() {
    navigate('/view-profile');
  }
  return (
    <div className='flex flex-col md:flex-row text-white overflow-hidden mx-auto justify-center items-center bg-gray-600 rounded h-min-screen md:h-[320px] w-[360px] p-4'>
      <div className='flex flex-col items-center md:items-start md:flex-1'>
        <img src={userpic} alt="user" className='object-cover w-[90px] h-[90px] rounded-full mb-4' />
        <h3 className='text-sm font-semibold'>John Doe</h3>
        <h4 className='text-xs'>email@example.com</h4>
        <h4 className='text-xs'>+123456789</h4>
        <h4 className='text-xs'>India</h4>
        <button  onClick={clickHandler} className='bg-green-400 rounded px-4 py-1.5 mt-4 hover:bg-green-600'>View Profile</button>
      </div>
      <div className='flex-1 mt-4 md:mt-0 md:ml-10'>
        <h4 className='text-sm font-semibold mb-2'>Skills</h4>
        <ul className='list-disc pl-4'>
          <li className='text-xs'>Skill 1</li>
          <li className='text-xs'>Skill 2</li>
          <li className='text-xs'>Skill 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
