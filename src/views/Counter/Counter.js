import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

// actions
import { increment, decrement } from 'actions/counterActions';

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter)

  return (
    <div>
      <h2>Counter</h2>
      Numbers: {counter}
      <br /><br />
      <button type="button" onClick={() => dispatch(increment(1)) }>Increment</button>   
      {" "}
      <button type="button" onClick={() => dispatch(decrement(1))}>Decrement</button>
    </div>
  )
}

export default Counter;
