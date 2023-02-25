import React, { useState } from "react";
import PropTypes from "prop-types";

import { ColorsTable } from "../../base-components";
import {
  createMatrix,
  validateIndexes,
  generateNewSquareColor,
} from "../../utils";
import { isGameOver } from "../../../../utils";

export function ManagedColorsTable({
  backgroundColor,
  columns,
  rows,
  allowRepeatedColors,
  tableColorList,
  setGameOver,
  enemyColors,
}) {
  const statesMatrix = createMatrix({
    rows,
    columns,
    colorsList: tableColorList,
  });
  const [colorsMatrix, setColor] = useState(statesMatrix);

  const onClick = (id) => {
    const [i, j] = id.split("~");
    validateIndexes([i, j]);

    const nextColor = generateNewSquareColor({
      prevColor: colorsMatrix[i][j],
      allowRepeatedColors,
      colorsList: tableColorList,
    });

    setColor?.((statesMatrix) => {
      statesMatrix[i][j] = nextColor;
      return [...statesMatrix];
    });

    if (isGameOver(statesMatrix, enemyColors, setGameOver)) setGameOver?.(true);
  };

  return (
    <ColorsTable
      colorsMatrix={colorsMatrix}
      onClick={onClick}
      backgroundColor={backgroundColor}
    />
  );
}

ManagedColorsTable.propTypes = {
  backgroundColor: PropTypes.string,
  rows: PropTypes.number,
  columns: PropTypes.number,
  allowRepeatedColors: PropTypes.bool,
  tableColorList: PropTypes.array,
  setGameOver: PropTypes.func,
  enemyColors: PropTypes.array,
};

ManagedColorsTable.defaultProps = {
  backgroundColor: "white",
  rows: 3,
  columns: 4,
  allowRepeatedColors: true,
  tableColorList: ["red", "green", "blue"],
  setGameOver: undefined,
  enemyColors: undefined,
};
