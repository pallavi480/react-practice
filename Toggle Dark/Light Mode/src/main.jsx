import React from "react";
import RactDOM from "react-dom/client";
import App from "../../../counter-app/src/App";
import "./App.css";

RactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
