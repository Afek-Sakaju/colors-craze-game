import React from "react";
import PropTypes from "prop-types";

import { getRandomNumber } from "@utils";
import "./GameQuestText.scss";

function GameQuestText({ level, enemyColors }) {
  const lastIndex = enemyColors.length - 1;

  return (
    <div>
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
    </div>
  );
}

GameQuestText.propTypes = {
  level: PropTypes.number,
  enemyColors: PropTypes.arrayOf(PropTypes.string),
};

GameQuestText.defaultProps = {
  level: 0,
  enemyColors: ["black"],
};

export default GameQuestText;
