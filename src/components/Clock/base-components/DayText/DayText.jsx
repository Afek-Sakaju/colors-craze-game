import React from "react";
import PropTypes from "prop-types";
import "./DayText.scss";

export function DayText({ label, currentDay }) {
  const isCurrentDay = !(label.localeCompare(currentDay, 'en', { sensitivity: 'base' }));
  const className =  isCurrentDay ? "day-text" : "day-text passive";
  
  return <div className={className}>{label}</div>;
}

DayText.propTypes = {
  label: PropTypes.string,
  currentDay: PropTypes.string,
};

DayText.defaultProps = {
  label: "noDay",
};
