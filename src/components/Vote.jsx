import React from 'react';
import PropTypes from 'prop-types';

const Vote = (props) => {
  const {
    post,
    handleDownvote,
    handleUpvote,
  } = props;

  return (
    <div className="vote">
      <span className="vote-item">
          <span onClick={() => handleUpvote(post, post.id)} className="glyphicon glyphicon-thumbs-up text-success" aria-hidden="true" /> 
        <span>{post.upvote}</span>
      </span>
      <span className="vote-item">
          <span onClick={() => handleDownvote(post, post.id)} className="glyphicon glyphicon-thumbs-down text-danger" aria-hidden="true" /> 
        <span>{post.downvote}</span>
      </span>
    </div>
  );
};

Vote.propTypes = {
  post: PropTypes.object.isRequired,
  handleDownvote: PropTypes.func.isRequired,
  handleUpvote: PropTypes.func.isRequired,  
}

export default Vote;