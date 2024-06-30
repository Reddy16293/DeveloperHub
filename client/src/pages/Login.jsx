import React from 'react';
import Template from '../components/Template';
import loginpic from '../assets/login.jpg';

const Login = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Enter into the world of Developers Hub"
      desc2="Build Skills for today, tomorrow, and beyond"
      image={loginpic}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Login;
