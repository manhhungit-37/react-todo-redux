import React from 'react'
import { connect } from 'react-redux';

// actions
import { fetchUsers } from 'actions/userActions';

const mapStateToProps = state => ({
  users: state.users.users,
  isErrors: state.users.isErrors
})

const mapDispatchToProps = {
  fetchUsers
}

function User({ users, isErrors, fetchUsers }) {
  return (
    <div>
      <button type="button" onClick={fetchUsers}>Fetch User</button>
      <br />
      {isErrors && <div>please increase counter {'>'} 0</div>}
      <br />
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.lastName} {user.firstName}</li>
          ))}
        </ul>
      ): <div>no users</div>}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
