import React from 'react';



class PostList extends React.Component {


  render() {
    return <div id='user-posts'>
      {this.props.posts.map((post) =>
        <React.Fragment key={post.id}>
          <p className='post-title'>{post.title}</p>
          <p className='post-body'>{post.body}</p>
          <p className='post-details'>
            <span>userId: {post.userId} </span>
            <span>postId: {post.id}</span>
          </p>
        </React.Fragment>)}
    </div>
  }



}



export default PostList;