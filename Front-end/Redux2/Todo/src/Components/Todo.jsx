import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditTodo, removeAll, removeTodo } from "../Redux/Todo/todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const editHandler = (todo) => {
    dispatch(setEditTodo(todo));
  };
  
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.title}</p>

          <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>

          <button onClick={() => editHandler(todo)}>Edit</button>
        </div>
      ))}

      <button
        disabled={todos.length === 0}
        onClick={() => dispatch(removeAll())}
      >
        Delete All
      </button>
    </>
  );
};

export default Todo;
