import React from 'react';
import PropTypes from 'prop-types';
import {
  Media,
} from 'react-bootstrap';

import { Header } from './';

const Posts = (props) => {
  const {
    loading,
    handleUpvote,
    handleDownvote,
    posts,
  } = props;

  const renderLoading = () => <div>Loading...</div>;

  const renderPost = key => {
    const { title, body, upvote, downvote, image, author } = posts[key];

    return (
      <div className="post" key={key}>
        <Media>
          <Media.Left>
            <div className="image-container">
              <img className="image-item" alt="" src={image} />
            </div>
          </Media.Left>
          <Media.Body>
            <Media.Heading>{title}</Media.Heading>
            <p>
              {body}
            </p>
            <p>
              - {author}
            </p>
            <div className="vote">
              <span className="vote-item">
                <span onClick={() => handleUpvote(posts[key], key)} className="glyphicon glyphicon-thumbs-up text-success" aria-hidden="true" />
                <span>{upvote}</span>
              </span>
              <span className="vote-item">
                <span onClick={() => handleDownvote(posts[key], key)} className="glyphicon glyphicon-thumbs-down text-danger" aria-hidden="true" />
                <span>{downvote}</span>
              </span>
            </div>
          </Media.Body>
        </Media>
      </div>
    );
  };


  return (
    <div className="Posts">
      <Header
        title="React and Firebase Blog"
        buttonText="Add Post"
        buttonLink="/add-post"
      />
      {
        loading ?
        renderLoading() :
        Object.keys(posts).map(renderPost)
      }
    </div>
  );
};

Posts.propTypes = {
  loading: PropTypes.bool.isRequired,
  handleUpvote: PropTypes.func.isRequired,
  handleDownvote: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
};

export default Posts;