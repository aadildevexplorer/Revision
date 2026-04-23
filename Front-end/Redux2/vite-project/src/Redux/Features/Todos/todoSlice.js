import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
      };

      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    deleteAll: (state) => {
      state.todos = [];
    },
  },
});

export const { addTodo, removeTodo, deleteAll } = todoSlice.actions;

export default todoSlice.reducer;
