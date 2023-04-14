import { useEffect, useState } from "react";
import './App.css'
import './Card.css'
export default function FoodList(){
const[foodData,setFoodData] =useState([]);
const [filterFoodType, setFilterFoodType] = useState('');
const [filterDeliveryDuration, setFilterDeliveryDuration] = useState('');
const [filteredFoodData, setFilteredFoodData] = useState([]);


useEffect(()=>{
  const foodArray = JSON.parse(localStorage.getItem('foodData')) || [];
setFoodData(foodArray);

},[])
const handleFilter = () => {
 
   const foodArray = JSON.parse(localStorage.getItem('foodData')) || [];
  const filteredFoodArray = foodArray.filter(food => {
    if (filterFoodType && food.foodType !== filterFoodType) {
      return false;
    }
    if (filterDeliveryDuration && food.delivery > parseInt(filterDeliveryDuration)) {
      return false;
    }
    return true;
  });

  setFilteredFoodData(filteredFoodArray);
};


return (
  <div>
  <div className="filter">
   <label htmlFor="food-type-filter">Filter by Food Type:</label>
          <select id="food-type-filter" value={filterFoodType} onChange={e => setFilterFoodType(e.target.value)}>
            <option value="All">All </option>
            <option value="Delicious Food">Delicious Food</option>
            <option value="Nutritious Food"> Nutritious Food</option>
            <option value="Fast Food"  > Fast Food</option>
            <option value="Beverages">Beverages </option>
            <option value="Desserts"  >Desserts</option>
          </select>
   
    <input className="duration" type="number" value={filterDeliveryDuration} onChange={e => setFilterDeliveryDuration(e.target.value)} placeholder="Filter by Delivery Duration" />
    <button className="filter-button" onClick={handleFilter}>Apply Filter</button>
  </div>

    {filteredFoodData.length > 0 ? (
      <ul>
        {filteredFoodData.map(food => (
          <li className="card" key={food.foodName}>
            <h3>{food.foodName}</h3>
            <p>Food Type: {food.foodType}</p>
            <p>Delivery Duration: {food.delivery} mins</p>
          </li>
        ))}
      </ul>
    ) : (
      <ul>
      {foodData.map(food => (
        <li className="card" key={food.foodName}>
          <h1 className="name">{food.foodName}</h1>
          <p className="type">Food Type: {food.foodType}</p>
          <p className="deliveryTime">Delivery Duration: {food.delivery} mins</p>
        </li>
      ))}
    </ul>
    )}
  </div>
);
    }
