// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/rate-review">Rate & Review</Link>
        </li>
        <li>
          <Link to="/reading-list">Reading List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

