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

const AddPost = (props) => {
  const {
    handleChange,
    title,
    body,
    handleSubmit,
  } = props;

  return (
    <div className="AddPost">
      <h2 className="bg-success">
        Create a new post
      </h2>
      <Row>
        <Col md={8} mdOffset={2} xs={10} xsOffset={1}>
          <FormGroup>
            <ControlLabel>Title</ControlLabel>
            <FormControl
              value={title}
              name="title"
              onChange={handleChange}
            />
          </FormGroup>
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
};

export default AddPost;
