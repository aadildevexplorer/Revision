import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo } from "../Redux/Todo/todoSlice";

const Form = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const { editItem } = useSelector((state) => state.todo);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editItem) {
      dispatch(
        editTodo({
          id: editItem.id,
          newText: input,
        }),
      );
    } else {
      dispatch(addTodo(input));
    }

    setInput("");
  };

  useEffect(() => {
    if (editItem) {
      setInput(editItem.title);
    }
  }, [editItem]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Task"
          required
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit">{editItem ? "Update Task" : "Add Task"}</button>
      </form>
    </div>
  );
};

export default Form;
