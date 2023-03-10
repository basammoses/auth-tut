
import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { signup } from '../api/users';

export default function Signup() {
  
  const [handle, setHandle] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handle.length > 0 && password.length > 0) {
      signup({
        handle,
        password,
        email
      }).then((res) => {
        console.log(res);
      });
    }
  };
  
  
  return (
    <div>
      <h1>Signup</h1>
      <form
      onSubmit={handleSubmit }>
        <input
          onChange={(e) => setHandle(e.target.value)}
          type="text"
          placeholder='handle'></input>
        <input type='email'
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
        
        >
        </input>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder='Password'
        >
        
        </input>
        
        <button type="submit">Signup</button>
      </form>
        <span>
        <Link to="/signin">Login</Link>
        </span>
    </div>
  );
}