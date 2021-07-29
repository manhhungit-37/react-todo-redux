import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function index() {

  return (
    <div className="todos">
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default index
