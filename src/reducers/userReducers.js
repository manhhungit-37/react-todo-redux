import { FETCH_USER_START, FETCH_USER_FAILURE, FETCH_USER_SUCCESS } from 'actions/userActions';

const initialState = {
  users: [],
  isLoading: false,
  isErrors: false
};

const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case FETCH_USER_START: {
      return {
        ...state,
        isLoading: true,
        isErrors: false
      }
    }
    case FETCH_USER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isErrors: true
      }
    }
    case FETCH_USER_SUCCESS: {
      return {
        ...state,
        users: payload,
        isLoading: false,
      }
    }
    
    default: {
      return state;
    }
  }
}

export default reducer

