import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  editItem: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    // addTodo
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        title: action.payload,
      };

      state.todos.push(newTodo);
    },

    // removeTodo
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    // removeAllTodo
    removeAll: (state) => {
      state.todos = [];
    },

    // editTodo
    setEditTodo: (state, action) => {
      state.editItem = action.payload;
    },

    editTodo: (state, action) => {
      const { id, newText } = action.payload;

      const todo = state.todos.find((t) => t.id === id);

      if (todo) {
        todo.title = newText;
      }

      state.editItem = null;
    },
  },
});

export const { addTodo, removeTodo, removeAll, editTodo, setEditTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
