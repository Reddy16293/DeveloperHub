import React, { useState, useEffect } from 'react';
import Template from '../components/Template';
import loginpic from '../assets/login.jpg';
import { useNavigate, Navigate } from 'react-router';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formdata, setFormData] = useState({
    email: '',
    password: ''
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      setIsLoggedIn(true);
    }
  }, []); // Empty dependency array ensures this runs only once after the initial render

  const ChangeHandler = (event) => {
    setFormData({ ...formdata, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/login', formdata)
      .then(res => {
        console.log("Response from server:", res.data);
        localStorage.setItem('token', res.data.token);
        setIsAuthenticated(true);
        setIsLoggedIn(true);
        toast.success('Login successful');
      })
      .catch(err => {
        console.error("Error:", err);
        toast.error('Login failed. Please check your credentials and try again.');
      });
  };

  if (isAuthenticated) {
    return <Navigate to='/myprofile' />;
  }

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
