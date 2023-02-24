import React from "react";
import PropTypes from "prop-types";

export function AmpmText({ ampmState, label }) {
  const isActive = ampmState.toLowerCase() === label.toLowerCase();

  return (
    <div className={isActive ? `ampm-text` : `ampm-text passive`}>{label}</div>
  );
}

AmpmText.propTypes = {
  ampmState: PropTypes.string,
  label: PropTypes.string,
};

AmpmText.defaultProps = {
  ampmState: "AM",
  label: "AM",
};
