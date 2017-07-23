import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Row,
  Image,
  Grid,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  HelpBlock,
} from 'react-bootstrap';

import { Header, Vote } from './';

const ViewPost = (props) => {
  const {
    post,
    errors,
    handleChange,
    handleSubmit,
    newComment,
  } = props;

  const renderComment = key => {
    const comment = post.comments[key];
    
    return (
      <Row key={key} className="comment">
        <Col xs={1} xsOffset={1}>
          <span className="glyphicon glyphicon-leaf" aria-hidden="true" />
        </Col>
        <Col xs={10}>
          {comment.body}
        </Col>
      </Row>
    );
  };

  return (
    <div>
      <Header
        title={post.title}
        buttonText="Home"
        buttonLink="/"
      />
      <Grid>
        <Row>
          <Col xs={2}>
            <Image className="image-item" alt="" responsive src={post.image || "http://images.clipartpanda.com/ladybug-clipart-ladybug-clipart-single2.gif"} rounded />
          </Col>
          <Col xs={10}>
            {post.body}
          </Col>
        </Row>
        <Row>
          <Col xs={4} xsOffset={8}>
            - {post.author}
          </Col>
        </Row>
        <Row>
          <Col xs={4} xsOffset={8}>
            <Vote
              post={post}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <FormGroup validationState={errors.newComment && 'error'}>
              <ControlLabel>Add Comment</ControlLabel>
              <FormControl
                value={newComment}
                name="newComment"
                onChange={handleChange}
                componentClass="textarea"
              />
              <HelpBlock>
                {errors.newComment} 
              </HelpBlock>
            </FormGroup>
            <FormGroup>
              <Button 
                type="submit" 
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </FormGroup>
          </Col>
        </Row>
        {post.comments && Object.keys(post.comments).map(renderComment)}
      </Grid>
    </div>
  );
};

ViewPost.propTypes = {
  post: PropTypes.object.isRequired,
  newComment: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default ViewPost;