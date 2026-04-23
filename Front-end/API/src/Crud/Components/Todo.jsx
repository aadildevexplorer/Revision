import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAll, removeTodo, setEditTodo } from "../redux/todo/todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const editHandler = (todo) => {
    dispatch(setEditTodo(todo));
  };

  const deleteAll = (todo) => {
    dispatch(removeAll(todo));
  };

  return (
    <>
      <div>
        {todos?.map((item) => {
          return (
            <>
              <div key={item.id}>
                <p>{item.title}</p>
                <p>{item.id}</p>
              </div>
              <button onClick={() => dispatch(removeTodo(item.id))}>
                Delete
              </button>
              <button onClick={() => editHandler(item)}>Edit</button>
            </>
          );
        })}
      </div>
      <button onClick={() => deleteAll()}>Delete All</button>
    </>
  );
};

export default Todo;
