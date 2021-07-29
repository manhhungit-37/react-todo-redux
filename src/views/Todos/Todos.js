import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


// actions 
import { fetchTodoStart, fetchTodoFailure, fetchTodoSuccess } from 'actions/todosActions'

const mapStateToProps = state => {
  return {
    isLoading: state.todos.isLoading,
    isErrors: state.todos.isErrors
  }
}

const mapDispatchToProps = {
  fetchTodoStart,
  fetchTodoFailure,
  fetchTodoSuccess
}

function Todos({ isLoading, isErrors, fetchTodoStart, fetchTodoFailure, fetchTodoSuccess }) {
  useEffect(() => {
    async function fetchTodos() {
      fetchTodoStart();
      try {
        const res = await fetch('https://tony-json-server.herokuapp.com/api/todos');
        const data = await res.json();
        if(!Array.isArray(data.data)) {
          fetchTodoFailure();
          return
        }
        fetchTodoSuccess(data.data)
      } catch (error) {
        fetchTodoFailure();
      }
    }
    fetchTodos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="todos">
      <TodoForm />
      {isLoading && <div>loading...</div>}
      {isErrors && <div>fetch data error</div>}
      <TodoList />

    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
