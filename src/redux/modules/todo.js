import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoReducer = createSlice({
  name: 'todoReducer',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    },
    deleteTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    },
    editTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              title: action.payload.title,
              body: action.payload.body,
            };
          } else {
            return todo;
          }
        }),
      };
    },
    confirmTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };
    },
    allDelete: (state, action) => {
      return {
        ...state.todos,
        todos: state.todos.filter((todo) => todo.isDone !== action.payload),
      };
    },
  },
});

export const todoActions = todoReducer.actions;
export default todoReducer.reducer;
