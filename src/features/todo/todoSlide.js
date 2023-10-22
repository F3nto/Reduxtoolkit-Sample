import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSliceReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), 
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) =>  todo.id !== action.payload)
    },
  },
});

export const { addTodo, removeTodo } = todoSliceReducer.actions;

export default todoSliceReducer.reducer;
