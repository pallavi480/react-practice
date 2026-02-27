import React, {useState} from "react";
import "./CharacterCounter.css";

function CharacterCounter({ limit }) {
    const [text, setText] = useState("");

    const handlechange = (e) => {
        if (e.target.value.length <= limit){
            setText(e.target.value)
        }
    }

    const remaining = limit - text.length;

    return (
        <div className="character-counter">
            <h2>Live Character Counter</h2>
            <textarea value={text} onChange={handlechange} placeholder="Start typing..." rows="5">

            </textarea>

            <div className="info">
                <p className={remaining <= 20 ? "warning" : ""}>
                    Remaining: {remaining}
                </p>
               <p>Total: {text.length}</p>

             </div>
            </div>
    )

}

export default CharacterCounter;

    