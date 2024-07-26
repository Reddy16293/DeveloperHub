import React from 'react';
import logo from '../assets/Logo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    toast.success('Logged out successfully');
    navigate('/login', { replace: true });
  };

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
      <Link to='/'>
        <img src={logo} alt='Logo' width={160} height={32} loading='lazy' />
      </Link>

      <nav>
        <ul className='text-pink-200 flex gap-4'>
          <li>
            <Link to='/' className='hover:text-pink-300 transition duration-300'>Home</Link>
          </li>
          {!isLoggedIn && (
            <>
              <li>
                <Link to='/about' className='hover:text-pink-300 transition duration-300'>About</Link>
              </li>
              <li>
                <Link to='/contact' className='hover:text-pink-300 transition duration-300'>Contact</Link>
              </li>
            </>
          )}
        </ul>
      </nav>

      <div className='text-pink-200 flex items-center gap-x-3'>
        {!isLoggedIn && (
          <>
            <Link to='/login'>
              <button className='bg-teal-950 px-3 py-1 rounded hover:bg-teal-900 transition duration-300'>Login</button>
            </Link>
            <Link to='/signup'>
              <button className='bg-teal-950 px-3 py-1 rounded hover:bg-teal-900 transition duration-300'>Signup</button>
            </Link>
          </>
        )}
        {isLoggedIn && (
          <>
            <button className='bg-teal-950 px-3 py-1 rounded hover:bg-teal-900 transition duration-300' onClick={handleLogout}>
              Logout
            </button>
            <Link to='/dashboard'>
              <button className='bg-teal-950 px-3 py-1 rounded hover:bg-teal-900 transition duration-300'>Dashboard</button>
            </Link>
            <Link to='/myprofile'>
              <button className='bg-teal-950 px-3 py-1 rounded hover:bg-teal-900 transition duration-300'>My Profile</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
