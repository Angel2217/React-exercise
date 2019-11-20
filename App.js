import React from 'react';
import './App.css';
import UserList from './UserList';
import UserDetail from './UserDetail';
import PostList from './PostList';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: [],
      currentUser: null,
      currentPosts: null,
    };
  }


  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        this.setState({
          users: data,
          currentUser: data[0],
        })
        this.fetchPosts(this.state.currentUser);
        console.log(data)
      });
  }


  fetchPosts(user) {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id)
      .then(res => res.json())
      .then(data => {
        this.setState({
          posts: this.state.posts.concat(data),
          currentPosts: data,
        })
        console.log(data)
      })
  }


  render() {
    return <div id='wrapper'>
      <div id='userDiv'>
        <UserList users={this.state.users}
          onClick={() => this.handleClick()}
        />
        {this.state.currentUser && <UserDetail user={this.state.currentUser} />}
      </div>
      <div id='postDiv'>
        {this.state.currentPosts && <PostList posts={this.state.currentPosts} />}
      </div>
    </div>
  }


  handleClick = () => e => {
    var clickedUser = this.state.users.find(function (user) {
      return user.id == e.target.id
    })
    this.setState({
      currentUser: clickedUser,
    })
    var clickedPosts = this.state.posts.filter(function (post) {
      return post.userId == e.target.id
    })
     clickedPosts.length > 0 ?
      this.setState({
        currentPosts: clickedPosts,
      }) :
      this.fetchPosts(e.target)
  } 
  


}



export default App;
