import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import { Posts } from '../../components';

class PostsContainer extends Component {
  handleUpvote = (post, key) => {
    this.props.firebase.ref('posts/' + key)
      .set({
        title: post.title || '',
        body: post.body || '',
        author: post.author || '',
        image: post.image || '',
        upvote: post.upvote + 1,
        downvote: post.downvote
      });
  }

  handleDownvote = (post, key) => {
    this.props.firebase.ref('posts/' + key)
      .set({
        title: post.title || '',
        body: post.body || '',
        author: post.author || '',
        image: post.image || '',
        upvote: post.upvote,
        downvote: post.downvote + 1
      });
  }

  handleRedirect = id => browserHistory.push(`/view-post/${id}`);

  render() {
    const props = {
      loading: this.props.loading,
      posts: this.props.posts,
      handleDownvote: this.handleDownvote,
      handleUpvote: this.handleUpvote,
      handleRedirect: this.handleRedirect,
    };

    return <Posts {...props} />;
  }
}

export default PostsContainer;
