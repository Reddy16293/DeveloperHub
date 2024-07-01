import React ,{useState} from 'react';
import signuplogo from '../assets/signup_pic.jpg';
import Template from '../components/Template';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
const Signup = ({setIsLoggedIn}) => {

  const navigate = useNavigate();
    
  const [formdata, setformdata] = useState({
      fullname: '',
      email: '',
      mobile: '',
      skills: '',
      password: '',
      confirmpassword: ''
  });

 

  function ChangeHandler(event) {
      setformdata({ ...formdata, [event.target.name]: event.target.value });
  }

  function submitHandler(event) {
      event.preventDefault();
      if (formdata.password !== formdata.confirmpassword) {
          toast.error("Passwords do not match");
          return;
      }
      toast.success("Account Created");
      setIsLoggedIn(true);
      const accountData={
          ...formdata
      };
      console.log(accountData);
      navigate('/dashboard');
  }


   
  return (
   <Template
   title="Join in the Developers Hub"
   desc1="Welcome"
   des2="Buld skills and experience"
   image={signuplogo}
   formtype="signup"
   setIsLoggedIn={setIsLoggedIn}
   formdata={formdata}
    ChangeHandler={ChangeHandler}
    submitHandler={submitHandler}
   />
  )
}

export default Signup