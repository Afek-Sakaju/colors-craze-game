import React from "react";
import PropTypes from "prop-types";
import "./Square.scss";

export function Square({
  id, // example: id = { i:0, j:0 }
  color,
  onClick,
}) {
  const { i, j } = id;

  return (
    <div
      className="square"
      style={{ backgroundColor: color }}
      onClick={() => onClick?.({ i, j })}
    ></div>
  );
}

Square.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.object,
};

Square.defaultProps = {
  color: "black",
  onClick: undefined,
  id: { i: undefined, j: undefined },
};
