import React from "react";
import store from "./Redux/Features/Todos/store";
import AddTodo from "./Components/AddTodo";
import Todo from "./Components/Todo";

const App = () => {
  console.log(store.getState());

  return (
    <>
      <AddTodo />
      <Todo />{" "}
    </>
  );
};

export default App;
