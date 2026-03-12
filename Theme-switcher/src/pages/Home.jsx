import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../App.css";

function Home() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>

      <h1>Theme Switcher</h1>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>

      <p>Current Theme: {theme}</p>

    </div>
  );
}

export default Home;