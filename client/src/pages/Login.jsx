import React, { useState } from 'react';
import Template from '../components/Template';
import loginpic from '../assets/login.jpg';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formdata, setFormData] = useState({
    email: '',
    password: ''
  });

  const ChangeHandler = (event) => {
    setFormData({ ...formdata, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    console.log(formdata);
    toast.success('Logged in Successfully');
    navigate('/dashboard');
  };

  return (
    <Template
      title="Welcome Back"
      desc1="Enter into the world of Developers Hub"
      desc2="Build Skills for today, tomorrow, and beyond"
      image={loginpic}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
      formdata={formdata}
      ChangeHandler={ChangeHandler}
      submitHandler={submitHandler}
    />
  );
};

export default Login;
