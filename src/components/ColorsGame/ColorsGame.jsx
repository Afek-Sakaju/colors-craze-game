import React, { useRef, useState } from "react";

import GameQuestText from "@components/GameQuestText/GameQuestText";
import GameOverPopup from "@components/GameOverPopup/GameOverPopup";
import { getPropertiesByLevel, getMaxLevel } from "@utils";
import "./ColorsGame.scss";
import { Clock } from "digital-clock-react";
import {
  ManagedColorsTable,
  randomizeColorsFromList,
} from "colors-table-react";
import { Countdown } from "circular-countdown-react";

export default function ColorsGame() {
  const [isWinner, setIsWinner] = useState(false);
  const [isLost, setIsLost] = useState(false);
  const [level, setLevel] = useState(1);
  const [enemyColors, setEnemyColors] = useState([]);
  const properties = getPropertiesByLevel(level);
  const prevLevel = useRef(level);
  const isFinishedGame = useRef(false);
  const maxLevel = getMaxLevel();

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
        /*  setTimeout - To fix Warning: Cannot update a component (`ColorsGame`)
        while rendering a different component... */
        setTimeout(() => {
          setLevel(() => {
            if (prevLevel.current === maxLevel) {
              isFinishedGame.current = true;
              prevLevel.current = 0;
            } else isFinishedGame.current = false;
            return ++prevLevel.current;
          });

          setEnemyColors([]);
          setIsWinner(true);
        });
      }
    }
  };
  const onDoneHandler = () => {
    /*  setTimeout - To fix Warning: Cannot update a component (`ColorsGame`)
    while rendering a different component... */
    setTimeout(() => {
      setLevel(1);
      setEnemyColors([]);
      setIsLost(true);
    });
  };

  return (
    <div className="main-container">
      {isWinner || isLost ? (
        <GameOverPopup
          isFinishedGame={isFinishedGame.current}
          isFinishedRound={isWinner}
          onButtonClick={() => {
            setIsWinner(false);
            setIsLost(false);
          }}
        />
      ) : (
        <>
          <div className="only-for-widescreens">
            <Countdown
              totalSeconds={properties.countdownSeconds}
              shouldStop={isWinner || isLost}
              size="small"
            />
          </div>
          <div className="mid-container">
            <GameQuestText level={level} enemyColors={enemyColors} />
            <div className="mid-table-container">
              <ManagedColorsTable
                rows={properties.rows}
                columns={properties.cols}
                colors={properties.colors}
                onChange={onChangeHandler}
                allowRepeatedColors={properties.allowRepeatedColors}
              />
            </div>
            <div className="only-for-widescreens">
              <Clock />
            </div>
          </div>
          <Countdown
            totalSeconds={properties.countdownSeconds}
            onDone={onDoneHandler}
            shouldStop={isWinner || isLost}
            size="small"
          />
        </>
      )}
    </div>
  );
}
