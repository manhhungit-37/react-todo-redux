import React from 'react';
import { connect } from 'react-redux';

//action
import { DELETE_TODO } from "actions/todosActions";

const mapStateToProps = state => {
  return {
    todos: state.todos.todos
  }
}

const mapDispatchToProps = {
  DELETE_TODO,
}

function TodoList(props) {
  const { todos, DELETE_TODO } = props;

  return (
    <>
      <table className="table__todos__list">
        <thead>
          <tr>
            <th>Todo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.length > 0 && todos.map(todo => (
            <tr key={todo.id} className="todos__line">
              <td className="todos__line--name">{todo.name}</td>
              <td>
                <button type="button" className="todos__line--delete" onClick={() => DELETE_TODO(todo.id)}>DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
