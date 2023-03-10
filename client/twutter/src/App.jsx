
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import Post from './pages/post';
import New from './pages/new';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:handle" element={<Profile />} />
      <Route path="/post" element={<Post />} />
      <Route path ="/new" element={<New />} />
    </Routes>
    
  );
}

export default App;
