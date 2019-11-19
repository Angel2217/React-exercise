import React from 'react'



class UserDetail extends React.Component {

    
  render() {
    return <div id='user-details'>
      <p>{this.props.user.name}</p>
      <p>{this.props.user.address.street}</p>
      <p>{this.props.user.address.suite}</p>
      <p>{this.props.user.address.city}</p>
      <p>{this.props.user.address.zipcode}</p>
      <p>{this.props.user.phone}</p>
      <p>{this.props.user.website}</p>
    </div>
  }



} 



export default UserDetail;