import React, { useState, useEffect } from "react";

const Effect2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count updated:", count);
  }, [count]); 

// effect runs only when count changes
// React compares old & new value of count

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Effect2;
