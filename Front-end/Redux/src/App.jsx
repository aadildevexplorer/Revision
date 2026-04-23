import React from "react";
import store from "./store/Features/store";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";
import CouponCode from "./Components/Discount/couponCode";
import Users from "./Pages/Users";

const App = () => {
  console.log(store.getState());

  return (
    <div>
     <AddTodo />
     <Todos />
     {/* <CouponCode />
     <Users /> */}
    </div>
  );
};

export default App;
