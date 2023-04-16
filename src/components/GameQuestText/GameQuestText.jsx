import React from "react";
import PropTypes from "prop-types";

import { getRandomNumber } from "@utils";
import "./GameQuestText.scss";

function GameQuestText({ level, enemyColors }) {
  return (
    <div>
      <p className="level-text">Level: {level}</p>
      <p className="game-quest">
        <span>Clear all blocks: </span>
        {enemyColors?.map((color) => {
          return (
            <span
              key={getRandomNumber()}
              className="color-text"
              style={{ color }}
            >
              {color}
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
