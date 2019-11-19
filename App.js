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
      clicked: false,
    };
  }


  componentDidMount() {
    Promise.all([fetch('http://jsonplaceholder.typicode.com/users'),
    fetch('https://jsonplaceholder.typicode.com/posts')])
      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()])
      })
      .then(([res1, res2]) => {
        console.log(res1, res2);
        this.setState({
          users: res1,
          posts: res2,
        });
      })
  }


  render() {
    const isClicked = this.state.clicked;
    return <div id='wrapper'>
      <div id='userDiv'>
        <UserList users={this.state.users}
          onClick={() => this.handleClick()}
        />
        {isClicked && <UserDetail user={this.state.currentUser} />}
      </div>
      <div id='postDiv'>
        {isClicked && <PostList posts={this.state.currentPosts} />}
      </div>
    </div>
  }


  handleClick = () => e => {
    var clickedUser = this.state.users.find(function (user) {
      return user.id == e.target.id
    });
    var clickedPosts = this.state.posts.filter(function (post) {
      return post.userId == e.target.id
    });
    this.setState({
      currentUser: clickedUser,
      currentPosts: clickedPosts,
      clicked: true,
    })
  }



} 



export default App;
