import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import { AddPost } from '../../components';

class AddPostContainer extends Component {
  state = {
    title: '',
    body: '',
    image: '',
    author: '',
    errors: {},
  };

  handleChange = evt => {
    const { value, name } = evt.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = evt => {
    evt.preventDefault();

    const { title, body, author, image } = this.state;

    const errors = {};

    if (!title) errors.title = 'Title is required!';
    if (!body) errors.body = 'Body is required!';
    if (!author) errors.author = 'Author is required!';

    if (Object.keys(errors).length) {
      this.setState({ errors });
    } else {
      this.props.firebase.ref('posts').push({
        title,
        body,
        author,
        image,
        upvote: 0,
        downvote: 0
      });

      this.setState({
        title: '',
        body: '',
        image: '',
        author: '',
        errors: {},
      });

      browserHistory.push('/');
    }
  }

  render() {
    const props = {
      errors: this.state.errors,
      title: this.state.title,
      body: this.state.body,
      image: this.state.image,
      author: this.state.author,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
    };

    return <AddPost {...props} />
  }
}

export default AddPostContainer;
