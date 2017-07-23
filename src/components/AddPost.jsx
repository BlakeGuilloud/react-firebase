import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Row,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
} from 'react-bootstrap';

import { Header } from './';

const AddPost = (props) => {
  const {
    handleChange,
    title,
    body,
    image,
    author,
    handleSubmit,
  } = props;

  return (
    <div className="AddPost">
      <Header
        title="Create a new post"
        buttonText="View posts"
        buttonLink="/"
      />
      <Row>
        <Col md={8} mdOffset={2} xs={10} xsOffset={1}>
          <Row>
            <Col sm={6}>
              <FormGroup>
                <ControlLabel>Author</ControlLabel>
                <FormControl
                  value={author}
                  name="author"
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                <ControlLabel>Image URL</ControlLabel>
                <FormControl
                  value={image}
                  name="image"
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col sm={12}>
              <FormGroup>
                <ControlLabel>Title</ControlLabel>
                <FormControl
                  value={title}
                  name="title"
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          
          <FormGroup>
            <ControlLabel>Body</ControlLabel>
            <FormControl
              value={body}
              name="body"
              onChange={handleChange}
              componentClass="textarea"
              rows={5}
            />
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
    </div>
  );
};

AddPost.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default AddPost;
