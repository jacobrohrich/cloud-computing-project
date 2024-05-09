// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Book Search</Link>
        </li>
        <li>
          <Link to="/register">Book Registration</Link>
        </li>
        <li>
          <Link to="/reading-list">Database Book Lists</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

