import React from "react";
import PropTypes from "prop-types";

import "./PopupBox.scss";
import classNames from "classnames";

export default function PopupBox({ title, className, children }) {
  const classes = classNames("popup-box", className);

  return (
    <div className={classes}>
      {title ? <h1>{title}</h1> : null}
      {children}
    </div>
  );
}

PopupBox.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

PopupBox.defaultProps = {
  title: "",
  className: "",
};
