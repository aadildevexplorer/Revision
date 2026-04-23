import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todo")) || [],
  edit: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      const newText = {
        id: crypto.randomUUID(),
        title: action.payload,
      };

      state.todos.push(newText);
      localStorage.setItem("todo", JSON.stringify(state.todos));
      console.log(action.payload);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todo", JSON.stringify(state.todos));
    },

    removeAll: (state) => {
      state.todos = [];
    },

    setEditTodo: (state, action) => {
      state.edit = action.payload;
    },

    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.todos.find((t) => t.id === id);

      if (todo) {
        todo.title = newText;
      }

      state.edit = null;
      localStorage.setItem("todo", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, removeTodo, removeAll, editTodo, setEditTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
