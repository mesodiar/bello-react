import React from "react";
import PropTypes from "prop-types";

export default function ex3_props(props) {
  return (
    <div>
      {props.showLabel && <h1>CountLabel: </h1>}
      <h2 style={{ color: props.color }}>{props.count}</h2>
    </div>
  );
}

ex3_props.propTypes = {
  count: PropTypes.number,
};

ex3_props.defaultProps = {
  showLabel: false,
};
