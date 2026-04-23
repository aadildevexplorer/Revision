import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
export const Store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});