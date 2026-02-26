import React,{useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { CartContext } from '../context/CartContext';

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const {cart} = useContext(CartContext)

  return (
    <div
      style={{
        padding: "10px",
        background: theme === "light" ? "black" : "white",
        color: theme === "light" ? "white" : "black",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        border: "2px solid",
      }}
    >
      <h2>Food Delivery</h2>
      <div
        style={{
        width:"500px",  
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
         
        }}
      >
        <h1>Cart :{cart.length}</h1>
        <button
          onClick={toggleTheme}
          style={{ height: "50px", width: "200px", borderRadius: "15px" }}
        >
          {theme==="light"?"Light theme":"Dark Theme"}
        </button>
      </div>
    </div>
  );
}

export default Navbar