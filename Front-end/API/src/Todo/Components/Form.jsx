import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo } from "../redux/todoSlice";

const Form = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const edit = useSelector((state) => state.edit);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit) {
      dispatch(
        editTodo({
          id: edit.id,
          newText: input,
        }),
      );
    } else {
      dispatch(addTodo(input));
    }

    setInput("");
  };
  useEffect(() => {
    if (edit) {
      setInput(edit.title);
    }
  }, [edit]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        placeholder="type here"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />

      <button>{edit ? "Edit Task" : "Add Task"}</button>
    </form>
  );
};

export default Form;
