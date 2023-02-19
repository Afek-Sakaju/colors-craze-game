import React from "react";
import PropTypes from "prop-types";

import "./ColorsTable.scss";
import { Square } from "../";

export function ColorsTable({ backgroundColor, colorsMatrix, onClick }) {
  return (
    <div
      className="tableContainer"
      style={{ backgroundColor: backgroundColor }}
    >
      {colorsMatrix.map((_, i) => (
        <div className="row" key={i}>
          {colorsMatrix[i].map((color, j) => {
            return (
              <Square
                id={`${i}~${j}`}
                color={color}
                onClick={onClick}
                key={`${i}~${j}`}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

ColorsTable.propTypes = {
  backgroundColor: PropTypes.string,
  colorsMatrix: PropTypes.array.isRequired,
  onClick: PropTypes.func,
};

ColorsTable.defaultProps = {
  backgroundColor: "white",
  onClick: undefined,
};
