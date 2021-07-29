import * as actionTypes from 'constance/types';

export function increment(payload) {
  return {
    type: actionTypes.SET_INCREMENT,
    payload
  }
}

export function decrement(payload) {
  return {
    type: actionTypes.SET_DECREMENT,
    payload
  }
}