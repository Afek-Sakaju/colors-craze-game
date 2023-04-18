import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./ActionButton.scss";

export default function ActionButton({ label, onClick, className }) {
  const classes = classNames("action-button", className);
  return (
    <button onClick={onClick} type="button" className={classes}>
      <p>{label}</p>
    </button>
  );
}

ActionButton.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

ActionButton.defaultProps = {
  label: "",
  className: "",
  onClick: undefined,
};
