import React from "react";

const TodoItem = () => {
  return (
    <li key={todo.id} className="list-item">
      <label className="list-item-label">
        <input
          checked={todo.completed}
          type="checkbox"
          data-list-item-checkbox
          onChange={(e) => toggleTodo(todo.id, e.target.checked)}
        />
        <span data-list-item-text>{todo.name}</span>
      </label>
      <button onClick={() => deleteTodo(todo.id)} data-button-delete>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
