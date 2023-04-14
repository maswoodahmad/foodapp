import { useState,useEffect,useRef  } from "react";
import { useNavigate } from "react-router-dom";
import './App.css'
export default function FoodForm() {
  
 const[food,setFood] = useState( {foodType:"",foodName:"",delivery:""} );

 const [formSubmitted, setFormSubmitted] = useState(false);
  
 const handleSubmit=(e)=>{
  e.preventDefault();
  setFormSubmitted(true);
 };
 useEffect(() => {
  const foodArray = JSON.parse(localStorage.getItem("foodData")) || [];

  if (formSubmitted && food.foodType && food.foodName && food.delivery) {
    const foodEntry = { ...food };
    foodArray.push(foodEntry);
    localStorage.setItem("foodData", JSON.stringify(foodArray));
    console.log(localStorage.getItem("foodData"));
    setFormSubmitted(false);
    setFood({ foodType: "", foodName: "", delivery: "" }); 
  }
}, [formSubmitted]);

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="food-type">Food Type:</label>
        <select

          id="food-type"
          value={food.foodType}
          onChange={(e) => setFood(  {...food,foodType:e.target.value})}
          
        >
          <option value="">Select Food Type</option>
          <option value="Delicious Food">Delicious Food</option>
          <option value="Nutritious Food">Nutritious Food</option>
          <option value="Fast Food">Fast Food</option>
          <option value="Beverages">Beverages</option>
          <option value="Desserts">Desserts</option>
        </select>
      </div>

      <div>
        <label htmlFor="food-name">Food Name:</label>
        <input
        className="form-input"
          type="text"
          id="food-name"
          value={food.foodName}
          onChange={(e) => setFood({...food,foodName:e.target.value})}
          
        />
      </div>

      <div>
        <label htmlFor="max-delivery-time">Max Delivery Time (minutes):</label>
        <input
        className="form-input"
          type="number"
          id="max-delivery-time"
          value={food.delivery}
          onChange={(e) => setFood({...food,delivery:e.target.value})}
        
        />
      </div>

      <button className="form-button" type="submit">Add Food</button>
    </form>
  );
}
