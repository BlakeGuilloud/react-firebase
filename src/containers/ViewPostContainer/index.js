import React, { Component } from 'react';
import { ViewPost } from '../../components';

class ViewPostContainer extends Component {
  state = {
    errors: {},
    newComment: '',
  };

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

  handleChange = evt => {
    const { value, name } = evt.currentTarget;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const errors = {};

    if (!this.state.newComment) errors.newComment = 'Invalid comment.';

    if (Object.keys(errors).length) {
      this.setState({ errors });
    } else {
      const comments = this.props.posts[this.props.params.id].comments ? this.props.posts[this.props.params.id].comments.filter(c => c !== undefined) : [];

      this.props.firebase.ref('posts/' + this.props.params.id).set({
        ...this.props.posts[this.props.params.id],
        comments: [
          ...comments,
          {
            body: this.state.newComment
          }
        ],
      });

      this.setState({
        newComment: '',
        errors: {},
      });
    }
  }

  render() {
    const props = {
      post: this.props.posts[this.props.params.id],
      errors: this.state.errors,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
      newComment: this.state.newComment,
      handleUpvote: this.handleUpvote,
    };

    return props.post ? <ViewPost {...props} /> : null;
  }
}

export default ViewPostContainer;
