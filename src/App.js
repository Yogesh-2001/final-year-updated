import React from "react";
import Admin from "./pages/Admin";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login.js'
import Navbar from "./components/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllDrives from './pages/AllDrives'
import UpComingSlider from "./components/UpComingSlider";
import PersonalDetails from './pages/PersonalDetails'
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/admin/*" element={<Admin />} />
          <Route exact path="/student/login" element={<Login />} />
          <Route path='/alldrives' element={<AllDrives />} />
          <Route path='/create-profile' element={<PersonalDetails />} />
        </Routes>
      </Router>

    </>
  );
};

export default App;
