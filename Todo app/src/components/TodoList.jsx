import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, delatedTodo, editTodo }) {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    delatedTodo={delatedTodo}
                    editTodo={editTodo}
                />
            ))}
        </div>
    )
}

export default TodoList;