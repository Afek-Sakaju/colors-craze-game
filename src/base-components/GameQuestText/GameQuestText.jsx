import React from "react";
import PropTypes from "prop-types";

import { getRandomNumber } from "../../utils";
import "./GameQuestText.scss";

export function GameQuestText({ level, enemyColors }) {
  const lastIndex = enemyColors.length - 1;

  return (
    <p>
      <p className="game-level-text">Level: {level}</p>
      <p className="game-quest-text">
        <span>Clear all blocks: </span>
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
      </p>
    </p>
  );
}

GameQuestText.propTypes = {
  enemyColors: PropTypes.array,
};

GameQuestText.defaultProps = {
  enemyColors: ["black"],
};
