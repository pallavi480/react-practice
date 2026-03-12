import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function useTheme(){
    const context = useContext(ThemeContext);
}

export default useTheme;