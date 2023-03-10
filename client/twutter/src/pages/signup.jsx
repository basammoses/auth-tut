
import { Link } from 'react-router-dom';
import React from 'react';

export default function Signup() {
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <input type="text"></input>
        <input
          type="password"></input>
        <button type="submit">Signup</button>
      </form>
        <span>
        <Link to="/signin">Login</Link>
        </span>
    </div>
  );
}