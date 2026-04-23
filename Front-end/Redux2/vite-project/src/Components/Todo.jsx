import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll, removeTodo } from "../Redux/Features/Todos/todoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <div className="todo-container">
      {todos.map((todo) => (
        <>
          <div key={todo.id} className="todo-card">
            <li className="todo-text">{todo.text}</li>

            <div className="todo-actions">
              <button
                className="delete-btn"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Delete
              </button>

              <button className="edit-btn">Edit</button>
            </div>
          </div>
        </>
      ))}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          className="dlt-btn"
          disabled={todos.length <= 1}
          onClick={() => dispatch(deleteAll())}
        >
          Delete All
        </button>
      </div>
    </div>
  );
};

export default Todo;
