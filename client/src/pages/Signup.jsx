// Signup.jsx
import React, { useState } from 'react';
import signuplogo from '../assets/signup_pic.jpg';
import Template from '../components/Template';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import axios from 'axios';

const Signup = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formdata, setFormData] = useState({
    fullname: '',
    email: '',
    mobile: '',
    skills: '',
    password: '',
    confirmpassword: ''
  });

  const changeHandler = (event) => {
    setFormData({ ...formdata, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (formdata.password !== formdata.confirmpassword) {
      toast.error('Passwords do not match');
      return;
    }

    axios.post('http://localhost:5000/api/register', formdata)
      .then((response) => {
        if (response.data.success) {
          toast.success('Account Created');
          
          toast.success('Please log in to continue');
          navigate('/login');
        } else {
          toast.error(response.data.message || 'Error');
        }
      })
      .catch((error) => {
        console.error('There was an error registering the user!', error);
        toast.error('Registration failed. Please try again or User Already Exists.');
      });
  };

  return (
    <Template
      title="Join in the Developers Hub"
      desc1="Welcome"
      desc2="Build skills and experience"
      image={signuplogo}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
      formdata={formdata}
      ChangeHandler={changeHandler}
      submitHandler={submitHandler}
    />
  );
};

export default Signup;
