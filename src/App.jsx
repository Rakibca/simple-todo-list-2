import { useState } from "react";
import "./styles.css";

function App() {
  const [newTodoName, setNewTodoName] = useState("");
  const [todos, setTodos] = useState([]);

  function addNewTodo() {
    if (newTodoName === "") return;
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { name: newTodoName, completed: false, id: crypto.randomUUID() },
      ];
    });
    setNewTodoName("");
  }

  function toggleTodo(todoId, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === todoId) return { ...todo, completed };
        return todo;
      });
    });
  }

  function deleteTodo(todoId) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== todoId);
    });
  }

  return (
    <>
      <ul id="list">
        {todos.map((todo) => {
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
        })}
      </ul>

      <div id="new-todo-form">
        {/* {JSON.stringify(newTodoName)} */}
        {JSON.stringify(todos)}
        <label for="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
        />
        <button onClick={addNewTodo}>Add Todo</button>
      </div>
    </>
  );
}

export default App;
