import React from "react";
import PropTypes from "prop-types";
import { daysArray } from "../../utils/consts";
import { DayText } from "../../base-components";
import "./DaysGroup.scss";

export function DaysGroup({ currentDay }) {
  return (
    <div className="days-group-container">
      {daysArray.map((day, index) => (
        <DayText
          label={day.toUpperCase()}
          currentDay={currentDay}
          key={index}
        />
      ))}
    </div>
  );
}

DaysGroup.propTypes = {
  currentDay: PropTypes.string,
};

DaysGroup.defaultProps = {
  currentDay: "noDay",
};
