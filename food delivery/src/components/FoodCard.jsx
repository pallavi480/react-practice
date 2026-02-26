import React from "react";
import {  CartContext} from "../context/CartContext";
import { useContext } from "react";

const FoodCard = ({ food }) => {
    const { addtoCart } = useContext(CartContext);
    return (
        <div
           style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            margin: "8px",
            width: "200px"
           }}
        >
            <img
            style={{
                width: "100%",
                height: "150px",
    
            }}

            src={food.image}
            alt=""
            />

            <h3>{food.name}</h3>
            <p>${food.price}</p>
            <button onClick={() => addtoCart(food)}>Add to Cart</button>

        </div>
    )

}

export default FoodCard