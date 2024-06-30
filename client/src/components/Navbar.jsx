import React from 'react'
import logo from '../assets/Logo.jpg'
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const Navbar = (props) => {
    const navigate=useNavigate();
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
  return (
    <div className='flex justify-between items-center w-11/12  max-w-[1160px] py-4 mx-auto'>
        <Link to='/'>
         <img  src={logo}  alt='Logo' width={160} height={32} loading='lazy'></img>  
         </Link>

         <nav>
            <ul className='  text-pink-200  flex gap-4'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/'>Contact</Link>
                </li>
            </ul>
         </nav>
         <div className=' text-pink-200  flex items-center gap-x-3'>
            {  !isLoggedIn &&
                <Link to='/login'>
                    
                    <button className='bg-teal-950 px-3 py-0.75 rounded'>Login</button>  

                </Link>
            }
             {  !isLoggedIn &&
                <Link to='/signup'>
                    <button className='bg-teal-950 px-3 py-0.75 rounded'>Signup</button>  
                    
                </Link>
            }
             { isLoggedIn &&
                <Link to='/'>
                    <button  className='bg-teal-950 px-3 py-0.75 rounded' onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success('Logged out successfully');
    
                        navigate('/login', { replace: true });
                    }}>
                        Logout
                    </button>  
                    
                </Link>
            }
             { isLoggedIn &&
                <Link to='/dashboard'>
                    <button className='bg-teal-950 px-3 py-0.75 rounded'>Dashboard</button>  
                    
                </Link>
            }
            
                { isLoggedIn &&
                    <Link to='/myprofile'>
                        <button className='bg-teal-950 px-3 py-0.75 rounded'>My Profile</button>  
                        
                    </Link>
                }
            
         </div>
    </div>

  )
}

export default Navbar;