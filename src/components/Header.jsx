import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';

const Header = (props) => {
  const {
    title,
    buttonText,
    buttonLink,
  } = props;

  return (
    <div className="jumbotron">
      <h2>{title}</h2>
      <Button onClick={() => browserHistory.push(buttonLink)}>
        {buttonText}
      </Button>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
};

export default Header;