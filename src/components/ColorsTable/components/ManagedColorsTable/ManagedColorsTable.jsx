import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { ColorsTable } from "../../base-components";
import {
  createMatrix,
  validateIndexes,
  generateNewSquareColor,
} from "../../utils";
import { countColorsInMatrix } from "../../../../utils";

export function ManagedColorsTable({
  backgroundColor,
  columns,
  rows,
  allowRepeatedColors,
  tableColorList,
  onChange,
}) {
  const statesMatrix = createMatrix({
    rows,
    columns,
    colorsList: tableColorList,
  });
  const [colorsMatrix, setColor] = useState(statesMatrix);
  //change name to setColorsMatrix

  useEffect(() => {
    const colorsState = countColorsInMatrix(statesMatrix);
    onChange?.(colorsState);
  }, []);

  const onClick = (id) => {
    const [i, j] = id.split("~");
    //validateIndexes([i, j]); // recreate this

    setColor?.((mat) => {
      const nextColor = generateNewSquareColor({
        prevColor: mat[i][j],
        allowRepeatedColors,
        colorsList: tableColorList,
      });

      mat[i][j] = nextColor;
      const colorsState = countColorsInMatrix(mat);
      onChange?.(colorsState);
      return [...mat];
    });
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
