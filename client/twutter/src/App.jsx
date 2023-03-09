
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import Post from './pages/post';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:handle" element={<Profile />} />
      <Route path="/post" element={<Post />} />
      
    </Routes>
    
  );
}

export default App;
