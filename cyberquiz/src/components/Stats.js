import React from 'react';
import PropTypes from 'prop-types';

function Stats(props) {
  return <h5 className="stats">{props.content}</h5>;
}

Stats.propTypes = {
  content: PropTypes.string.isRequired
};

export default Stats;
