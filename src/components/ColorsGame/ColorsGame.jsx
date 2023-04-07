import React, { useRef, useEffect, useState } from "react";

import { Clock } from "digital-clock-react";
import {
  ManagedColorsTable,
  randomizeColorsFromList,
} from "colors-table-react";
import { Countdown } from "circular-countdown-react";
import GameQuestText from "../GameQuestText/GameQuestText";
import { getPropertiesByLevel, MAX_LEVEL } from "../../utils";
import "./ColorsGame.scss";

function ColorsGame() {
  const [gameOver, setGameOver] = useState(false);
  const [level, setLevel] = useState(1);
  const [enemyColors, setEnemyColors] = useState([]);
  const properties = getPropertiesByLevel(level);
  const prevLevel = useRef(level);
  const onChangeHandler = (colorsState) => {
    if (!enemyColors.length) {
      setEnemyColors(
        randomizeColorsFromList(
          Object.keys(colorsState),
          properties.enemyColorsCount
        )
      );
    } else {
      const totalEnemyRemaining = enemyColors.reduce(
        (total, enemyColor) => total + (colorsState[enemyColor] ?? 0),
        0
      );
      if (totalEnemyRemaining === 0) {
        setLevel(0);
        setEnemyColors([]);
        setTimeout(() =>
          setLevel(() => {
            if (prevLevel.current === MAX_LEVEL) prevLevel.current = 0;
            return ++prevLevel.current;
          })
        );
        setGameOver(true);
      }
    }
  };
  const onDoneHandler = () => {
    setLevel(0);
    setEnemyColors([]);
    setTimeout(() => setLevel(1));
    prevLevel.current = 1;
    setGameOver(true);
  };

  useEffect(() => {
    setGameOver(false);
  }, [level]);

  return level ? (
    <div className="main-container">
      <Countdown
        totalSeconds={properties.countdownSeconds}
        onDone={onDoneHandler}
        shouldStop={gameOver}
      />
      <div className="mid-container">
        <GameQuestText level={level} enemyColors={enemyColors} />
        <div className="mid-table-container">
          <ManagedColorsTable
            rows={properties.rows}
            columns={properties.cols}
            colors={properties.colors}
            onChange={onChangeHandler}
          />
        </div>
        <Clock />
      </div>
      <Countdown
        totalSeconds={properties.countdownSeconds}
        shouldStop={gameOver}
      />
    </div>
  ) : null;
}

export default ColorsGame;
