import React, { useState, useEffect } from 'react';
import Card from './card';
import FoodForm from './FoodForm';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      product?
      {<ul>
        {
        products.map((product, index) => (
          <Card key={index}
          name={product.name}
          type={product.type}
          deliveryTime={product.max_del}
          
          
          />
            
         
        ))}
      </ul>
}: 
{
    <h1>
        Add Food Items
<FoodForm/>
    </h1>
}
    </div>
  );
};

export default Home;
