import React, { Component } from 'react';
import { Posts } from '../../components';

class PostsContainer extends Component {
  handleUpvote = (post, key) => {
    this.props.firebase.ref('posts/' + key)
      .set({
        title: post.title,
        body: post.body,
        upvote: post.upvote + 1,
        downvote: post.downvote
      });
  }

  handleDownvote = (post, key) => {
    this.props.firebase.ref('posts/' + key)
      .set({
        title: post.title,
        body: post.body,
        upvote: post.upvote,
        downvote: post.downvote + 1
      });
  }

  render() {
    const props = {
      loading: this.props.loading,
      posts: this.props.posts,
      handleDownvote: this.handleDownvote,
      handleUpvote: this.handleUpvote,
    };

    return <Posts {...props} />;
  }
}

export default PostsContainer;
