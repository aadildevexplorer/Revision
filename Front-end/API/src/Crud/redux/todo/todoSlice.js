import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todo")) || [],
  edit: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        title: action.payload,
      };

      state.todos.push(newTodo);
      localStorage.setItem("todo", JSON.stringify(state.todos));
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todo", JSON.stringify(state.todos));
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
      localStorage.setItem("todo", JSON.stringify(state.todos));

      state.edit = null;
    },

    removeAll: (state) => {
      state.todos = [];
      localStorage.setItem("todo", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, removeTodo, editTodo, setEditTodo, removeAll } =
  todoSlice.actions;
export default todoSlice.reducer;
