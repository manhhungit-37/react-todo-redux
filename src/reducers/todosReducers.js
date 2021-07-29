import * as actionTypes from 'constance/types';

const initialState = {
  isLoading: false,
  isErrors: false,
  todos: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case actionTypes.FETCH_TODO_START: {
      return {
        ...state,
        isLoading: true,
        isErrors: false
      }
    }
    case actionTypes.FETCH_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        todos: payload
      }
    }
    case actionTypes.FETCH_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isErrors: true
      }
    }
    case actionTypes.ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, payload],
      }
    }
    case actionTypes.DELETE_TODO: {
      const newTodos = state.todos.filter(todo => todo.id !== payload.id);
      return {
        ...state,
        todos: newTodos,
      }
    }

    default: {
      return state;
    }
  }
}

export default reducer

