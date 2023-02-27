import React from "react";
import PropTypes from "prop-types";

import { getRandomNumber } from "../../utils";
import "./GameQuestText.scss";

export function GameQuestText({ level, enemyColors }) {
  const lastIndex = enemyColors.length - 1;

  return (
    <span className="game-quest-text">
      Level: {level} | Clear all blocks:
      {enemyColors?.map((color, i) => {
        return (
          <span key={getRandomNumber()}>
            <span style={{ color }} key={getRandomNumber()}>
              {color}
            </span>
            <span key={getRandomNumber()}>{i === lastIndex || ","}</span>
          </span>
        );
      })}
    </span>
  );
}

GameQuestText.propTypes = {
  enemyColors: PropTypes.array,
};

GameQuestText.defaultProps = {
  enemyColors: ["red", "lime"],
};
