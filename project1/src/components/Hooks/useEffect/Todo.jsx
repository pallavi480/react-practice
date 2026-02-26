import React, { useState, useEffect } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]); 

  function handleChange(e) {
    setTask(e.target.value);
  }

  function addTodo() {
    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }

    setTodos([...todos, task]); 
    setTask("");
  }

  useEffect(() => {
    console.log("Typed value:", task);
  }, [task]);


  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h1>Todo App</h1>

      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Enter task"
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
