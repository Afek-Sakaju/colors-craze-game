import React from "react";
import PropTypes from "prop-types";
import "./Digit.scss";
import { activeLinesByNumber, trapezoids } from "../../utils";

export function Digit({ value }) {
  return (
    <div className="digit-container">
      {trapezoids.map((divNumber, index) => {
        const isActive = activeLinesByNumber[value].includes(divNumber);

        return (
          <div
            key={index}
            className={
              isActive ? `d${divNumber}-shape` : `passive d${divNumber}-shape`
            }
          />
        );
      })}
    </div>
  );
}

Digit.propTypes = {
  value: PropTypes.number,
};

Digit.defaultProps = {
  value: 0,
};
