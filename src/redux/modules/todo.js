import { createSlice } from '@reduxjs/toolkit';

// const ADD_TODO = 'addTodoList';
// const DELETE_TODO = 'deleteTodoList';
// const EDIT_TODO = 'editTodoList';
// const CONFIRM_TODO = 'confirmTodoList';
// const ALL_DELETE_TODO = 'allDeleteTodoList';

// export const addTodo = (payload) => {
//   return {
//     type: ADD_TODO,
//     payload,
//   };
// };
// export const deleteTodo = (payload) => {
//   return {
//     type: DELETE_TODO,
//     payload,
//   };
// };
// export const editTodo = (payload) => {
//   return {
//     type: EDIT_TODO,
//     payload,
//   };
// };
// export const confirmTodo = (payload) => {
//   return {
//     type: CONFIRM_TODO,
//     payload,
//   };
// };
// export const allDelete = (payload) => {
//   return {
//     type: ALL_DELETE_TODO,
//     payload,
//   };
// };

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

// const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [...state.todos, action.payload],
//       };

//     case DELETE_TODO:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.payload),
//       };
//     case EDIT_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo) => {
//           if (todo.id === action.payload.id) {
//             return {
//               ...todo,
//               title: action.payload.title,
//               body: action.payload.body,
//             };
//           } else {
//             return todo;
//           }
//         }),
//       };
//     case CONFIRM_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo) => {
//           if (todo.id === action.payload) {
//             return {
//               ...todo,
//               isDone: !todo.isDone,
//             };
//           } else {
//             return todo;
//           }
//         }),
//       };
//     case ALL_DELETE_TODO:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.isDone !== action.payload),
//       };
//     default:
//       return state;
//   }
// };
export const todoActions = todoReducer.actions;
export default todoReducer.reducer;
