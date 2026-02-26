// UseState Hook = To store and update data inside a component

// syntax => const [state, setState] = useState(initialValue)

// state - current value
// setState - function to update the state value

// initialValue - starting value of the state


import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);          // number state
  const [name, setName] = useState("pallavi");   // string state
  const [isLogin, setIsLogin] = useState(false); // boolean state
  const [user, setUser] = useState({
    name: "",
    password: ""
  }); // object state

  function incfun() {
    setCount(count + 1);
  }

  function decfun() {
    setCount(count - 1);
  }

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={incfun}>Increment</button>
      <button onClick={decfun}>Decrement</button>

      <hr />

      <h2>User Form</h2>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
      />

      <p>Name: {user.name}</p>
      <p>Password: {user.password}</p>

      <hr />

      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Logout" : "Login"}
      </button>

      <p>Status: {isLogin ? "Logged In" : "Logged Out"}</p>
    </div>
  );
}

export default Counter;
