import React, { Component } from 'react';
import { AddPost } from '../../components';

class AddPostContainer extends Component {
  state = {
    title: '',
    body: '',
  };

  handleChange = evt => {
    const { value, name } = evt.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.firebase.ref('posts').push({
      title: this.state.title,
      body: this.state.body,
      upvote: 0,
      downvote: 0
    });

    this.setState({
      title: '',
      body: '',
    });
  }

  render() {
    const props = {
      title: this.state.title,
      body: this.state.body,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
    };

    return <AddPost {...props} />
  }
}

export default AddPostContainer;
