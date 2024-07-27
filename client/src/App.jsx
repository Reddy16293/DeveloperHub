import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import MyProfile from "./pages/MyProfile";
import ViewProfile from "./pages/ViewProfile";
import Contact from "./pages/Contact";
import { EditProfile } from "./pages/EditProfile";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen w-screen bg-black">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/myprofile"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <MyProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/view-profile"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <ViewProfile />
            </PrivateRoute>
          }
        />
        <Route path='/contact' element={<Contact />} />
        <Route path='/editprofile' element={<EditProfile/>} />
      </Routes>
    </div>
  );
};

export default App;
