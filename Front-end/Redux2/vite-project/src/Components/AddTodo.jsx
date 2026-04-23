import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Features/Todos/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <form onSubmit={addTodoHandler} className="todo-form">
        <input
          type="text"
          required
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your todo..."
          className="todo-input"
        />
        <button type="submit" className="todo-btn">
          Add Todo
        </button>
      </form>
    </>
  );
};

export default AddTodo;
