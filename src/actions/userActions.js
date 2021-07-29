export const FETCH_USER_START = 'USER/FETCH_USER_START';
export const FETCH_USER_SUCCESS = 'USER/FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'USER/FETCH_USER_FAILURE';

export const fetchUsers = () => async (dispatch, getState) => {
  const counterState = getState().counter.counter;

  if(counterState === 0) {
    dispatch({ type: FETCH_USER_FAILURE });
    return;
  };

  dispatch({ type: FETCH_USER_START })
  try {
    const res = await fetch('https://tony-json-server.herokuapp.com/api/users');
    const data = await res.json();
    if(!Array.isArray(data.data)) {
      dispatch({ type: FETCH_USER_FAILURE })
      return
    }
    dispatch({ type: FETCH_USER_SUCCESS, payload: data.data })
  } catch (error) {
    dispatch({ type: FETCH_USER_FAILURE })
  }
}