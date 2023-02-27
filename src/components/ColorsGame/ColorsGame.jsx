import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { ManagedColorsTable } from "../ColorsTable/components/";
import { Stopper } from "../Stopper/components";
import { Clock } from "../Clock/components/";
import { GameQuestText } from "../../base-components";
//import {  } from "../../utils";
import "./ColorsGame.scss";

export function ColorsGame({ colorsList }) {
  const [enemyColors, setEnemies] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [colorsListState, setColorsList] = useState(colorsList);

  const rebuildGame = useCallback((level) => {});
  useEffect(() => {
    setColorsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main-container">
      <Stopper
        totalSeconds={200}
        onDone={() => setGameOver(true)}
        shouldStop={gameOver}
      />
      <div className="mid-container">
        <GameQuestText enemyColors={enemyColors} />
        <div className="mid-table-container">
          <ManagedColorsTable
            tableColorList={colorsList}
            setGameOver={setGameOver}
            enemyColors={enemyColors}
          />
        </div>
        <Clock />
      </div>
      <Stopper totalSeconds={200} shouldStop={gameOver} />
    </div>
  );
}

ColorsGame.propTypes = {
  colorsList: PropTypes.array,
};

ColorsGame.defaultProps = {
  colorsList: undefined,
};
