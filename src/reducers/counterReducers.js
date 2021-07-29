import * as actionTypes from "constance/types";

const initialState = {
  counter: 0
}

const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case actionTypes.SET_INCREMENT: {
      return {
        ...state,
        counter: state.counter + payload
      }
    }
    case actionTypes.SET_DECREMENT: {
      return {
        ...state,
        counter: state.counter - payload
      }
    }
    default:
      return state
  }
}

export default reducer;