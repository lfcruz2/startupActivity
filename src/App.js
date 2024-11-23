import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Search from './components/Search';
import InvestorProfile from './components/InvestorProfile';
import ProtectedRoute from './components/ProtectedRoute';
import AppNavbar from './components/Navbar';
import Policies from './components/Policies';

function App() {
  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
        <Route path="/search" element={<ProtectedRoute element={<Search />} />} />
        <Route path="/investor/:id" element={<ProtectedRoute element={<InvestorProfile />} />} />
        <Route path="/policies" element={<ProtectedRoute element={<Policies />} />} />
      </Routes>
    </>
  );
}

export default App;
