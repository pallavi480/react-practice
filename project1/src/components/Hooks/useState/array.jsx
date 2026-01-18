import React, { useState } from "react";

const ArrayExample = () => {
  const [items, setItems] = useState([]);

  function addItem() {
    setItems([...items, `New Item ${items.length + 1}`]);
  }

  let data = ["pallavi", "snehal", "vaishnavi", "priya", "komal", "abc", "xyz"];

  return (
    <div>
      <h2>Static Data</h2>
      {data.map((el, index) => (
        <p key={index}>{el}</p>
      ))}

      <hr />

      <button onClick={addItem}>Add Item</button>

      <h2>Dynamic Items</h2>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default ArrayExample;
