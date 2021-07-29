import * as actionTypes from 'constance/types';

export const fetchTodoStart = () => {
  return {
    type: actionTypes.FETCH_TODO_START,
  }
}

export const fetchTodoFailure = () => {
  return {
    type: actionTypes.FETCH_TODO_FAILURE
  }
}

export const fetchTodoSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_TODO_SUCCESS,
    payload,
  }
}

export const ADD_TODO = (payload) => {
  return {
    type: actionTypes.ADD_TODO,
    payload,
  }
}

export const DELETE_TODO = (id) => {
  return {
    type: actionTypes.DELETE_TODO,
    payload: {
      id,
    }
  }
}