import React from "react";
import PropTypes from "prop-types";

import { PopupBox, ActionButton } from "@base-components";

export default function RoundOverPopup({
  isFinishedGame,
  isFinishedRound,
  onButtonClick,
}) {
  let title;
  let buttonLabel;

  switch (true) {
    case isFinishedGame:
      title = "Congratulations ,you won!";
      buttonLabel = "Play again";
      break;
    case isFinishedRound:
      title = "Are you ready for the next round?";
      buttonLabel = "Im ready!";
      break;
    default:
      title = "Game over, you lost..";
      buttonLabel = "Try again";
  }

  return (
    <PopupBox title={title} className="colorful">
      <ActionButton
        label={buttonLabel}
        onClick={onButtonClick}
        className="colorful"
      />
    </PopupBox>
  );
}

RoundOverPopup.propTypes = {
  isFinishedGame: PropTypes.bool,
  isFinishedRound: PropTypes.bool,
  onButtonClick: PropTypes.func,
};

RoundOverPopup.defaultProps = {
  isFinishedGame: false,
  isFinishedRound: false,
  onButtonClick: undefined,
};
