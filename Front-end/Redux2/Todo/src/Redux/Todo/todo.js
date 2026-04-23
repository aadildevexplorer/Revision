import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  editItem: null,
};

export const todoSlice = createSlice({
  name: "todoo",
  initialState,

  reducers: {
    setEdit: (state, action) => {
      state.editItem = action.payload;
    },

    editTod: (state, action) => {
      const { id, newText } = action.payload;

      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        todo.title = newText;
      }

      state.editItem = null;
    },
  },
});
