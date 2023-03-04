/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";

import { ManagedColorsTable } from "../ColorsTable/components/";
import { Stopper } from "../Stopper/components";
import { Clock } from "../Clock/components/";
import { GameQuestText } from "../../base-components";
import {
  getPropertiesByLevel,
  randomizeColorsFromList,
  maxLevel,
} from "../../utils";
import "./ColorsGame.scss";

export function ColorsGame() {
  const [gameOver, setGameOver] = useState(false);
  const [level, setLevel] = useState(1);
  const [enemyColors, setEnemyColors] = useState([]);
  const properties = getPropertiesByLevel(level);
  const prevLevel = useRef(level);

  useEffect(() => {
    setGameOver(false);
  }, [level]);

  return level ? (
    <div className="main-container">
      <Stopper
        totalSeconds={properties.countdownSeconds}
        onDone={() => {
          setLevel(0);
          setEnemyColors([]);
          setTimeout(() => setLevel(1));
          setGameOver(true);
        }}
        shouldStop={gameOver}
      />
      <div className="mid-container">
        <GameQuestText level={level} enemyColors={enemyColors} />
        <div className="mid-table-container">
          <ManagedColorsTable
            tableProperties={{
              rows: properties.rows,
              columns: properties.cols,
              colors: properties.colors,
            }}
            onChange={(colorsState) => {
              if (!enemyColors.length) {
                setEnemyColors(
                  randomizeColorsFromList(
                    properties.enemyColorsCount,
                    Object.keys(colorsState)                  )
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
                      if (prevLevel.current === maxLevel) prevLevel.current = 0;
                      return ++prevLevel.current;
                    })
                  );
                  setGameOver(true);
                }
              }
            }}
          />
        </div>
        <Clock />
      </div>
      <Stopper
        totalSeconds={properties.countdownSeconds}
        shouldStop={gameOver}
      />
    </div>
  ) : null;
}

ColorsGame.propTypes = {};

ColorsGame.defaultProps = {};
