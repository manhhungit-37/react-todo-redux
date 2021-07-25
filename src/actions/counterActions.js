export const SET_INCREMENT = 'COUNTER/SET_INCREMENT';
export const SET_DECREMENT = 'COUNTER/SET_DECREMENT';

export function increment(payload) {
  return {
    type: SET_INCREMENT,
    payload
  }
}

export function decrement(payload) {
  return {
    type: SET_DECREMENT,
    payload
  }
}