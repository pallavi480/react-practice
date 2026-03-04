import React,{ useState} from "react";

function TodoItem({ todo, delatedTodo, editTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        editTodo(todo.id, newText);
        setIsEditing(false);
    }

    return (
        <div className="todo-item">
            {isEditing ? (
                <>
                    <input
                       value={newText}
                       onChange={(e) => setNewText(e.target.value)}
                    />
                    <button onClick={handleEdit}>Save</button>
                </>
            ) : (
                <>

                    <span>{todo.text}</span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => delatedTodo(todo.id)}>Delete</button>
                </>
            )}
        </div>
    )
}

export default TodoItem;