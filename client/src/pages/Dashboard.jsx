import React from 'react';
import Cards from '../components/Cards';

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen text-white">
      <div className="text-4xl my-8">Welcome to Developer Hub</div>
      <div className="w-full flex justify-center">
        <Cards />
      </div>
    </div>
  );
}
export default Dashboard;
