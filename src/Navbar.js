import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const NavigationBar = () => {
  return (
    <nav className='nav'>
      <h1 className='ttile'>Food</h1>
      <ul className='nav-links'>
        <li>
          <Link to="/add-food">Add Food</Link>
        </li>
        <li>
          <Link to="/browse-food">Browse Food</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;