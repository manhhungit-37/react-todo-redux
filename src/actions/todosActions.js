import * as actionTypes from 'constance/types';

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