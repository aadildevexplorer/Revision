import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  editItem: null,
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: crypto.randomUUID(),
        text: action.payload,
      };
      console.log(newTodo);

      state.todos.push(newTodo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    deleteAll: (state) => {
      state.todos = [];
    },

    setEdit: (state, action) => {
      state.editItem = action.payload;
    },

    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((t) => t.id === id);

      if (todo) {
        todo.text = text;
      }
      state.editItem = null;
    },
  },
});

export const { addTodo, removeTodo, deleteAll, editTodo, setEdit } =
  todoSlice.actions;
export default todoSlice.reducer;
