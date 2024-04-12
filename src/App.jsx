import { useState } from "react";
import "./styles.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <ul id="list">
        {todos.map((todo, index) => (
          <li className="list-item" key={index}>
            <label>
              <input type="checkbox" />
            </label>
            {todo}
            <button onClick={() => deleteTodo(todo)}>Delete</button>
          </li>
        ))}
      </ul>
      <div id="new-todo-form">
        <label>
          New Todo{" "}
          <input
            type="text"
            value={todo}
            placeholder="Type a Todo HERE"
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
        </label>
        <br />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </>
  );
}

export default App;
