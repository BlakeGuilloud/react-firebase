import React from 'react';
import PropTypes from 'prop-types';

const Posts = (props) => {
  const {
    loading,
    handleUpvote,
    handleDownvote,
    posts,
  } = props;

  const renderLoading = () => <div>Loading...</div>;

  const renderPost = key =>
    <div key={key}>
      <div>Title: {posts[key].title}</div>
      <div>Body: {posts[key].body}</div>
      <div>Upvotes: {posts[key].upvote}</div>
      <div>Downvotes: {posts[key].downvote}</div>
      <div>
        <button
          onClick={() => handleUpvote(posts[key], key)}
          type="button"
        >
          Upvote
        </button>
        <button 
          onClick={() => handleDownvote(posts[key], key)}
          type="button"
        >
          Downvote
        </button>
      </div>
    </div>;

  return (
    <div className="Posts">
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