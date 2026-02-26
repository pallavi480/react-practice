import React,{ useState} from "react";
import "./Counter.css";

function Counter(){
    const [count, setcount] = useState(0);

    const increase = () => {
        setcount((prev)=> prev + 1);
}

const decrease = () => {
    setcount((prev)=> prev - 1);
}

const reset = () => {
    setcount(0);
}

return(
    <div className="counter">
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <div className="buttons">
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    </div>
)
}

export default Counter;