import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll, removeTodo, setEdit } from "../../Crud/todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const editHandler = (todo) => {
    dispatch(setEdit(todo));
  };

  return (
    <>
      <div>
        {todos?.map((item) => (
          <>
            <div key={item.id}>
              <li>{item.text}</li>
              <button onClick={() => dispatch(removeTodo(item.id))}>
                Delete
              </button>
              <button onClick={() => editHandler(item)}>Edit</button>
            </div>
          </>
        ))}
      </div>
      <button onClick={() => dispatch(deleteAll())}>Delete All</button>
    </>
  );
};

export default Todo;
