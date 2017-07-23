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
    handleRedirect,
  } = props;

  const renderLoading = () => <div>Loading...</div>;

  const renderPost = key => {
    const { title, body, upvote, downvote, image, author } = posts[key];

    return (
      <div className="post" key={key}>
        <Media>
          <Media.Left>
            <div className="image-container">
              <img className="image-item" alt="" src={image || "http://images.clipartpanda.com/ladybug-clipart-ladybug-clipart-single2.gif"} />
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
          <Media.Right onClick={() => handleRedirect(key)}>
            <span className="glyphicon glyphicon-menu-right" aria-hidden="true" />
          </Media.Right>
        </Media>
      </div>
    );
  };

  const renderPostList = () => {
    return (
      posts ?
      Object.keys(posts).map(renderPost) :
      'No posts.'
    )
  }


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
        renderPostList()
      }
    </div>
  );
};

Posts.propTypes = {
  loading: PropTypes.bool.isRequired,
  handleUpvote: PropTypes.func.isRequired,
  handleDownvote: PropTypes.func.isRequired,
  handleRedirect: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
};

export default Posts;