import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <h1>Food</h1>
      <ul>
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