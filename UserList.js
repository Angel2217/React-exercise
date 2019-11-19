import React from 'react';



class UserList extends React.Component {

    
  render() {
    return (
      <ul>
        {this.props.users.map((user) =>
          <li key={user.id}>
            <button id={user.id}
              onClick={this.props.onClick()}>
              {user.name}
            </button>
          </li>)}
      </ul>
    )}



} 



export default UserList;