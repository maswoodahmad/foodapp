import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route,Routes, BrowserRouter } from 'react-router-dom';


import NavigationBar from './Navbar';
import FoodForm from './FoodForm';
 import FoodList from './FoodList';

 const App = () => {




  return (
    <BrowserRouter>
     <NavigationBar /> 
    <Routes>
      <Route path="/" element={<FoodList />} />
        <Route path="/add-food" element={<FoodForm  />} />
         <Route path="/browse-food" element={<FoodList  />} /> 
    </Routes>
    
    </BrowserRouter>

    
  );
};

export default App;





