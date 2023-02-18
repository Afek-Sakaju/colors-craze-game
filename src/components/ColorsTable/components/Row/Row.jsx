import React from "react";
import PropTypes from "prop-types";
import { Square } from "../../base-components";
import { generateUniqueId } from "../../utils";
import "./Row.scss";

export function Row({ colors, onClick, i }) {
  
  return (
    colors[i] && (
      <div className="row">
        {colors[i].map((color, j) => {
          return (
            <Square
              id={{ j, i }}
              color={color}
              onClick={onClick}
              key={generateUniqueId()}
            />
          );
        })}
      </div>
    )
  );
}

Row.propTypes = {
  colors: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  i: PropTypes.number.isRequired,
};

Row.defaultProps = {
  onClick: undefined,
};
