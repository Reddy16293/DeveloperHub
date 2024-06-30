import React from 'react';
import signuplogo from '../assets/signup_pic.jpg';
import Template from '../components/Template';
const Signup = ({setIsLoggedIn}) => {
  return (
   <Template
   title="Join in the Developers Hub"
   desc1="Welcome"
   des2="Buld skills and experience"
   image={signuplogo}
   formtype="signup"
   setIsLoggedIn={setIsLoggedIn}  
   />
  )
}

export default Signup