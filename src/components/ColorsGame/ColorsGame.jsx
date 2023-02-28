/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState, useCallback } from "react";
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

export function ColorsGame({ colorsList }) {
  const [gameOver, setGameOver] = useState(false);
  const [level, setLevel] = useState(1);
  const [enemyColors, setEnemyColors] = useState([]);
  const properties = getPropertiesByLevel(level, colorsList);
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
            tableColorList={properties.colors}
            onChange={(colorsState) => {
              if (enemyColors.length === 0) {
                setEnemyColors(
                  randomizeColorsFromList(
                    properties.enemyColorsCount,
                    Object.keys(colorsState)
                  )
                );
              } else {
                const totalEnemyRemaining = enemyColors.reduce(
                  (total, c) => total + (colorsState[c] ?? 0),
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
            rows={properties.rows}
            columns={properties.cols}
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

ColorsGame.propTypes = {
  colorsList: PropTypes.array,
};

ColorsGame.defaultProps = {
  colorsList: undefined,
};
