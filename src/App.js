import React from 'react';
import LandingPage from './components/LandingPage';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Sellerlogin from './components/Sellerlogin';
import Signup from './components/Signup';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/seller-login" element={<Sellerlogin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
   
  )
}

export default App