import React from "react";
import useTheme from "../hooks/useTheme";

function ThemeButton() {
    const { toggleTheme } = useTheme();
    return (
        <button onClick={toggleTheme}>Toggle Theme</button>
    );
}

export default ThemeButton;
