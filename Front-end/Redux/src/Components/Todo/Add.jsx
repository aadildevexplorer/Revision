import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo } from "../../Crud/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const editItem  = useSelector((state) => state.editItem);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (editItem) {
      dispatch(
        editTodo({
          id: editItem.id,
          text: input,
        }),
      );
    } else {
      dispatch(addTodo(input));
    }
    setInput("");
  };

  useEffect(() => {
    if (editItem) {
      setInput(editItem.text);
    }
  }, [editItem]);

  return (
    <>
      <form onSubmit={addTodoHandler}>
        <div>
          <input
            required
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        <button type="submit">{editItem ? "Update Task" : "Add Task"}</button>
        </div>
      </form>
    </>
  );
};

export default AddTodo;
