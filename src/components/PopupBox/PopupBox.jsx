import React from "react";
import PropTypes from "prop-types";

import "./PopupBox.scss";

export default function PopupBox({ title, buttonLabel, onClick }) {
  return (
    <div className="popup-box">
      {title ? <h1>{title}</h1> : null}
      <button onClick={onClick} type="button" className="popup-box-button">
        {buttonLabel}
      </button>
    </div>
  );
}

PopupBox.propTypes = {
  title: PropTypes.string,
  buttonLabel: PropTypes.string,
  onClick: PropTypes.func,
};

PopupBox.defaultProps = {
  title: "",
  buttonLabel: "Enter",
  onClick: undefined,
};
