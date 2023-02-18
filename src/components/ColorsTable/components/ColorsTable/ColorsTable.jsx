import React, { useState } from "react";
import PropTypes from "prop-types";

import "./ColorsTable.scss";
import {
  generateUniqueId,
  createMatrix,
  generateRandomColor,
} from "../../utils";
import { Row } from "../";

export function ColorsTable({
  backgroundColor,
  columns,
  rows,
  allowRepeatedColors,
  tableColorList,
}) {
  const statesMatrix = createMatrix({
    rows,
    columns,
    colorGenerateFunc: generateRandomColor,
    colorsList: tableColorList,
  });
  const [colors, setColor] = useState(statesMatrix);

  const onClick = ({ i, j }) => {
    if (i !== undefined && j !== undefined) {
      let generatedColor = generateRandomColor(tableColorList);
      const shouldRegenerate =
        !allowRepeatedColors && tableColorList && tableColorList.length > 1;

      setColor?.((statesMatrix) => {
        // if there is one color and not allowed repeat, the game will be stuck
        if (shouldRegenerate) {
          while (statesMatrix[i][j] === generatedColor) {
            generatedColor = generateRandomColor(tableColorList);
          }
        }
        statesMatrix[i][j] = generatedColor;
        return [...statesMatrix];
      });
    }
  };

  return (
    <div
      className="tableContainer"
      style={{ backgroundColor: backgroundColor }}
    >
      {statesMatrix.map((_row, i) => (
        <Row
          colors={colors}
          tableColorList={tableColorList}
          onClick={onClick}
          allowRepeatedColors={allowRepeatedColors}
          i={i}
          key={generateUniqueId()}
        />
      ))}
    </div>
  );
}

ColorsTable.propTypes = {
  backgroundColor: PropTypes.string,
  rows: PropTypes.number,
  columns: PropTypes.number,
  allowRepeatedColors: PropTypes.bool,
  tableColorList: PropTypes.array,
};

ColorsTable.defaultProps = {
  backgroundColor: "white",
  rows: 3,
  columns: 4,
  allowRepeatedColors: false,
  tableColorList: ["red", "green", "blue"],
};
