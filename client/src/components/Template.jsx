import React from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { FcGoogle } from 'react-icons/fc';

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn, formdata, ChangeHandler, submitHandler }) => {
  return (
    <div className='flex w-11/12 justify-between max-w-[1160px] py-12 mx-auto gap-x-40'>
      <div className='container w-11/12 max-w-[450px]'>
        <h1 className='text-3xl font-bold text-white'>{title}!</h1>
        <p className='flex-col text-white'>
          <span>{desc1}</span>
          <br />
          <span>{desc2}</span>
        </p>
        {formtype === "signup" ? (
  <SignupForm
    setIsLoggedIn={setIsLoggedIn}
    formdata={formdata}
    ChangeHandler={ChangeHandler}
    submitHandler={submitHandler}
  />
) : (
  <LoginForm
    setIsLoggedIn={setIsLoggedIn}
    formdata={formdata}
    ChangeHandler={ChangeHandler}
    submitHandler={submitHandler}
  />
)}
        <div className='flex w-full items-center my-4 max-w-lg gap-x-2'>
          <div className='w-full h-[1px] bg-teal-300'></div>
          <p className='text-white'>OR</p>
          <div className='w-full h-[1px] bg-teal-300'></div>
        </div>
        <button className='bg-teal-300 flex max-w-lg justify-center items-center font-semibold rounded hover:bg-green-300 py-[8px] px-[12px] w-full border border-pink-400'>
          <FcGoogle className='mr-2 mt-0.4' />
          Sign In/Up with Google
        </button>
      </div>
      <div>
        <img src={image} alt="sign/signup" height={490} width={558} />
      </div>
    </div>
  );
};

export default Template;
