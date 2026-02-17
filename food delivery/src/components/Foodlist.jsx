import React from "react";
import foods from "../data";
import FoodCard from "./FoodCard";

const Foodlist = () => {
    return (
        <div 
        
        style={{
             display: "grid",
             gridTemplateColumns: "repeat(4,1fr)",
             gap:"20px"
        }}>
            {foods.map(food => (
                <FoodCard key={food.id} food={food} />
            ))}
        </div>
    )
}


export default Foodlist