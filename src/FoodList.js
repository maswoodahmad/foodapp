import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function FoodList() {
  const location = useLocation();
  const [foodDataList, setFoodDataList] = useState([]);
  const [filteredFoodDataList, setFilteredFoodDataList] = useState([]);
  const [filterFoodType, setFilterFoodType] = useState("");
  const [filterMaxDeliveryTime, setFilterMaxDeliveryTime] = useState("");

  useEffect(() => {
    const foodData = localStorage.getItem("foodData");
    if (foodData) {
      const foodDataObj = JSON.parse(foodData);
      setFoodDataList((prevFoodDataList) => [
        ...prevFoodDataList,
        foodDataObj,
      ]);
    }
  }, []);

  useEffect(() => {
    let filteredData = [...foodDataList];
    if (filterFoodType) {
      filteredData = filteredData.filter(
        (foodData) => foodData.foodType === filterFoodType
      );
    }
    if (filterMaxDeliveryTime) {
      filteredData = filteredData.filter(
        (foodData) => foodData.maxDeliveryTime <= filterMaxDeliveryTime
      );
    }
    setFilteredFoodDataList(filteredData);
  }, [foodDataList, filterFoodType, filterMaxDeliveryTime]);

  return (
    <div>
      <label htmlFor="foodTypeFilter">Filter by Food Type:</label>
      <input
        type="text"
        id="foodTypeFilter"
        value={filterFoodType}
        onChange={(e) => setFilterFoodType(e.target.value)}
      />

      <label htmlFor="maxDeliveryTimeFilter">Filter by Max Delivery Time:</label>
      <input
        type="text"
        id="maxDeliveryTimeFilter"
        value={filterMaxDeliveryTime}
        onChange={(e) => setFilterMaxDeliveryTime(e.target.value)}
      />

      </div>
  )
}
