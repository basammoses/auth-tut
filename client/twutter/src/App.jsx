
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import Post from './pages/post';
import New from './pages/new';
import Signup from './pages/signup';
import Signin from './pages/signin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:handle" element={
      
      <div>
      <Profile />
          
      </div>
      } />
      <Route path="/post" element={<Post />} />
      <Route path="/new" element={<New />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
    
  );
}

export default App;
