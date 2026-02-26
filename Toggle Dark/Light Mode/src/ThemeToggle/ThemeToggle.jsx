import React,{ useEffect, useState } from "react";
import "./ThemeToggle.css";

function ThemeToggle() {
    const [theme,setTheme] = useState("light")

    useEffect(()=>{
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme){
            setTheme(savedTheme)
        }
    },[])

    useEffect(()=>{
        document.body.className = theme;
        localStorage.setItem("theme", theme)
    },[theme])

    return(
        <div className="theme-container">
        <h1>{theme=== "light"?"light mode":"dark mode"}</h1>
        <button onClick={toogleTheme}>
        Switch to {theme === "light"? "dark":"light"} Mode
        </button>
        </div>
    )
}

export default ThemeToggle;