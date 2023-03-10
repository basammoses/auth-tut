
import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { signin } from '../api/users';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedin, setLoggedin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
      signin({
        email,
        password,
      }).then((res) => {
        console.log(res);
        (window.location.href = `http://localhost:3001/profile/${res.handle}`)

      })

      };
    };
    
  


  return (
    <div>
      <h1>Signin</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Signin</button>
      </form>
      <span>
        <Link to="/signup">Signup</Link>
      </span>
    </div>
  );
}
