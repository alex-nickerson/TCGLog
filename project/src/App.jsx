import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </div>
  )
}

export default App