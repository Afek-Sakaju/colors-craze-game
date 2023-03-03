import React from "react";
import PropTypes from "prop-types";
import "./Square.scss";

export function Square({ id, color, onClick }) {
  return (
    <div
      className="square"
      style={{ backgroundColor: color }}
      onClick={() => onClick?.(id)}
    />
  );
}

Square.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

Square.defaultProps = {
  color: "black",
  onClick: undefined,
  id: undefined,
};
