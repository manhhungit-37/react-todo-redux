import React, { useState } from 'react';
import { connect } from 'react-redux';

//action
import { ADD_TODO } from 'actions/todosActions';

function TodoForm(props) {
  const [text, setText] = useState("");
  const [errorAddTodo, setErrorAddTodo] = useState(false);
  const { ADD_TODO } = props;

  function handleAddTodo() {
    if (!text) return setErrorAddTodo(true);
    if (errorAddTodo) setErrorAddTodo(false);
    const newTodo = {
      id: Date.now(),
      name: text,
    }
    ADD_TODO(newTodo);
    setText("");
  }

  return (
    <div className="todos__form">
      <label htmlFor="name">Name: </label>
      <input id="name" name="name" type="text" value={text} onChange={(e) => setText(e.target.value)} className="todos__form--addInput" />
      <button type="button" onClick={handleAddTodo} className="todos__form--addButton" >Add New Todo</button>
      {errorAddTodo && <div className="danger">Enter your todo</div>}
    </div>
  )
}

const mapDispatchToProps = {
  ADD_TODO,
}

export default connect(null, mapDispatchToProps)(TodoForm);
