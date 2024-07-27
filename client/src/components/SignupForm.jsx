// SignupForm.jsx
import React, { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

const SignupForm = ({ formdata, ChangeHandler, submitHandler }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <form className='max-w-lg mx-auto' onSubmit={submitHandler}>
        <div className='text-white mb-4'>
          <label className='font-semibold'>
            <p>Full Name<sup>*</sup></p>
            <input
              className='bg-teal-800 rounded text-cyan-400 px-3 py-2 w-full'
              required
              type='text'
              name='fullname'
              value={formdata.fullname}
              onChange={ChangeHandler}
              placeholder='Enter full name'
            />
          </label>
        </div>
        <div className='text-white mb-4'>
          <label className='font-semibold'>
            <p>Email<sup>*</sup></p>
            <input
              className='bg-teal-800 rounded text-cyan-400 px-3 py-2 w-full'
              required
              type='text'
              name='email'
              value={formdata.email}
              onChange={ChangeHandler}
              placeholder='Enter your Email Address'
            />
          </label>
        </div>
        <div className='text-white mb-4'>
          <label className='font-semibold'>
            <p>Mobile<sup>*</sup></p>
            <input
              className='bg-teal-800 rounded text-cyan-400 px-3 py-2 w-full'
              required
              type='text'
              name='mobile'
              value={formdata.mobile}
              onChange={ChangeHandler}
              placeholder='Enter your Mobile Number'
            />
          </label>
        </div>
        <div className='text-white mb-4'>
          <label className='font-semibold'>
            <p>Skills<sup>*</sup></p>
            <input
              className='bg-teal-800 rounded text-cyan-400 px-3 py-2 w-full'
              required
              type='text'
              name='skills'
              value={formdata.skills}
              onChange={ChangeHandler}
              placeholder='Enter your Skills'
            />
            <p className='text-sm'>* Please include commas after every skill</p>
          </label>
        </div>
        <div className='text-white mb-4'>
          <label className='font-semibold'>
            <p>Password<sup>*</sup></p>
            <div className='relative'>
              <input
                className='bg-teal-800 rounded text-cyan-400 px-3 py-2 w-full pr-10'
                required
                type={showPassword ? 'text' : 'password'}
                name='password'
                value={formdata.password}
                onChange={ChangeHandler}
                placeholder='Enter Your Password'
              />
              <span className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer' onClick={() => setShowPassword(prev => !prev)}>
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>
          </label>
        </div>
        <div className='text-white mb-4'>
          <label className='font-semibold'>
            <p>Confirm Password<sup>*</sup></p>
            <div className='relative'>
              <input
                className='bg-teal-800 rounded text-cyan-400 px-3 py-2 w-full pr-10'
                required
                type={showPassword ? 'text' : 'password'}
                name='confirmpassword'
                value={formdata.confirmpassword}
                onChange={ChangeHandler}
                placeholder='Enter your password again'
              />
              <span className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer' onClick={() => setShowPassword(prev => !prev)}>
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>
          </label>
        </div>
        <button className='bg-green-500 mt-4 w-full rounded py-2'>
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
