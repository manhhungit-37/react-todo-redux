// import { SET_INCREMENT, SET_DECREMENT } from "../actions/counterActions"
import * as actionTypes from "actions/counterActions"

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