import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// for some unkown reason that should be fixed, i can't import
// files from the index.js so iv'e imported each cmp seperated
import { ManagedColorsTable } from "../ColorsTable/components/";
import { Stopper } from "../Stopper/components";
import { Clock } from "../Clock/components/";
import { GameQuestText } from "../../base-components";
import { generateRandomColor } from "../ColorsTable/utils";
import "./ColorsGame.scss";

export function ColorsGame({ colorsList }) {
  const [enemyColors, setEnemies] = useState([]);

  useEffect(() => {
    setEnemies(() => [generateRandomColor(colorsList)]);
  }, []);

  return (
    <div className="main-container">
      <Stopper totalSeconds={200} />
      <div className="mid-container">
        <GameQuestText enemyColors={enemyColors} />
        <div className="mid-table-container">
          <ManagedColorsTable tableColorList={colorsList} />
        </div>
        <Clock />
      </div>
      <Stopper totalSeconds={200} />
    </div>
  );
}

ColorsGame.propTypes = {
  level: PropTypes.number,
  colorsList: PropTypes.array,
};

ColorsGame.defaultProps = {
  level: 1,
  colorsList: undefined,
};
