import React from 'react'
import { connect } from 'react-redux';

// actions
import { increment, decrement } from 'actions/counterActions';

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter
  }
}

const mapDispatchToProps = {
  increment,
  decrement
}

function Counter({ counter, increment, decrement }) {
  return (
    <div>
      <h2>Counter</h2>
      Numbers: {counter}
      <br /><br />
      <button type="button" onClick={() => increment(1)}>Increment</button>   
      {" "}
      <button type="button" onClick={() => decrement(1)}>Decrement</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
