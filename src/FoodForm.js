import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FoodForm() {
  const navigate = useNavigate();
  const [foodType, setFoodType] = useState("");
  const [foodName, setFoodName] = useState("");
  const [maxDeliveryTime, setMaxDeliveryTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const foodData = {
      foodType: foodType,
      foodName: foodName,
      maxDeliveryTime: maxDeliveryTime,
    };
    localStorage.setItem("foodData", JSON.stringify(foodData));
    navigate("/browse-food");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="foodType">Food Type:</label>
      <input
        type="text"
        id="foodType"
        value={foodType}
        onChange={(e) => setFoodType(e.target.value)}
      />

      <label htmlFor="foodName">Food Name:</label>
      <input
        type="text"
        id="foodName"
        value={foodName}
        onChange={(e) => setFoodName(e.target.value)}
      />

      <label htmlFor="maxDeliveryTime">Max Delivery Time:</label>
      <input
        type="text"
        id="maxDeliveryTime"
        value={maxDeliveryTime}
        onChange={(e) => setMaxDeliveryTime(e.target.value)}
      />

      <button type="submit">Add Food</button>
    </form>
  );
}
