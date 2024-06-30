import React, { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formdata, setformdata] = useState({
    email: "",
    password: ""
  });

  const [showpassword, setshowpassword] = useState(false);

  function changeHandler(event) {
    setformdata((prevdata) => (
      {
        ...prevdata,
        [event.target.name]: event.target.value
      }
    ));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success('Logged in successfully');
    navigate('/dashboard'); // Redirect to dashboard page after successful login
  }

  return (
    <div className='container text-white rounded-md max-w-lg'>
      <form className='flex flex-col gap' onSubmit={submitHandler}>

        <label className='font-semibold h-full'>
          <p className='mt-3'>
            Email Address <sup className='text-red-100'>*</sup>
          </p>
          <input className='bg-teal-800 rounded text-cyan-400 px-[12px] py-2 max-w-120 w-full' required type='email'
            name='email'
            value={formdata.email}
            onChange={changeHandler}
            placeholder='Enter Your Email Address' />
        </label>

        <label className='flex-col mt-3 w-full'>
          <p className='mt-3'>
            Password <sup>*</sup>
          </p>
          <div className='relative'>
            <input className='w-full bg-teal-800 py-2 pl-3 pr-10 rounded' required type={showpassword ? 'text' : 'password'}
              name='password'
              value={formdata.password}
              onChange={changeHandler}
              placeholder='Enter Your Password' />
            <span className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer' onClick={() => setshowpassword(prev => !prev)}>
              {showpassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          <div className='flex justify-end'>
            <Link to="#">
              <p className='text-sm max-w--max ml-auto mr-0'>
                Forgot Password
              </p>
            </Link>
          </div>
        </label>

        <button className='w-full py-1 mt-4 bg-yellow-600 rounded'>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
