import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../store/Features/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {todos.map((todo) => (
          <>
            <li style={{ listStyle: "none" }} key={todo.id}>
              {todo.text}
            </li>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Delete
            </button>
          </>
        ))}
      </div>
    </>
  );
};

export default Todos;
