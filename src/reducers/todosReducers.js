import * as actionTypes from 'constance/types';

const initialState = {
  todos: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
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

