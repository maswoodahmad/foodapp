import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import NavigationBar from './Navbar';
import FoodForm from './FoodList';
import FoodList from './FoodForm';

const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
       
      <Router>
      <Route path="/" exact component={Home} />
      <Route path="/add-food" component={FoodForm} />
      <Route path="/browse-food" component={FoodList} />
      
     </Router>
      </div>
    </Router>
  );
};

export default App;





