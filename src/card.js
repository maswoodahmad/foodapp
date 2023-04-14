import React, { useState, useEffect } from 'react';


const Card = (prop) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
//     setProducts(storedProducts);
//   }, []);

  

  return (
    <div>
      
      <div className="card-container">
        
        
        
      
            <div className="card" >
              <h2 className="card-heading">{prop.name}</h2>
              <p className="card-subtitle">Type: {prop.type}</p>
              <p className="card-subtitle">Delivery Time: {prop.deliveryTime} minutes</p>
            </div>
        
        
       
        </div>
    </div>
  );
};

export default Card;
