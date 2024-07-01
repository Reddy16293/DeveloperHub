import React from 'react'
import userpic from '../assets/userpic.jpeg';
const MyProfile = ({isLoggedIn}) => {
    return (
        <div className='text-white flex  w-1/2 m-auto flex-col gap-y-10 justify-center items-center h-min-screen'>
            <div className='text-white text-4xl'>
              <h1>My Profile</h1>
            </div>
    
            <div className='flex flex-col justify-center items-center gap-5'>
                <div>
                <img src={userpic} alt="user" className='object-cover w-[120px] h-[120px] rounded-full' />
    
                </div>
                
                <div className='flex flex-col justify-center items-center gap-0.75'>
                <h1><b>Full Name :  </b>C.Reddy Sekhar </h1>
                <h1><b> Email     :  </b>email</h1>
                <h1><b> Mobile    :  </b>Mobile</h1>
                <h1><b>Country   :  </b> India</h1>
                <button className='bg-blue-500 py-1 px-3 rounded mt-4'> Edit Profile
                </button>
                </div>
                
                
            </div>
    
        </div>
      )
    }

export default MyProfile