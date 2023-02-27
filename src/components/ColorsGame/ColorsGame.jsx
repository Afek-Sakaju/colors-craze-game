/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

import { ManagedColorsTable } from "../ColorsTable/components/";
import { Stopper } from "../Stopper/components";
import { Clock } from "../Clock/components/";
import { GameQuestText } from "../../base-components";
import { getPropertiesByLevel } from "../../utils";
import "./ColorsGame.scss";

export function ColorsGame({ colorsList }) {
  const [enemyColors, setEnemies] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [properties, setProperties] = useState(false);
  const [colorsListState, setColorsList] = useState(colorsList);
  const [countdownSeconds, setCountdownSeconds] = useState(500);

  const level = useRef(1);
  const rows = useRef(0);
  const cols = useRef(0);

  useEffect(() => {
    setProperties(getPropertiesByLevel(level.current, colorsListState));
  }, [level]);

  useEffect(() => {
    rows.current = properties.rows;
    cols.current = properties.cols;
    setColorsList(properties.colors);
    setEnemies(properties.enemyColors);
    setCountdownSeconds(properties.countDownSeconds);
  }, [properties]);

  return (
    <div className="main-container">
      <Stopper
        totalSeconds={countdownSeconds}
        onDone={() => setGameOver(true)}
        shouldStop={gameOver}
      />
      <div className="mid-container">
        <GameQuestText enemyColors={enemyColors} />
        <div className="mid-table-container">
          <ManagedColorsTable
            tableColorList={colorsListState}
            setGameOver={setGameOver}
            enemyColors={enemyColors}
          />
        </div>
        <Clock />
      </div>
      <Stopper totalSeconds={countdownSeconds} shouldStop={gameOver} />
    </div>
  );
}

ColorsGame.propTypes = {
  colorsList: PropTypes.array,
};

ColorsGame.defaultProps = {
  colorsList: undefined,
};
