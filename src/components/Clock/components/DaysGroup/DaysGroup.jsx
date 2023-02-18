import PropTypes from "prop-types";
import { daysArray } from "../../utils/consts";
import { DayText } from "../../base-components";

export function DaysGroup({ currentDay }) {
  return daysArray.map((day, index) => {
    return (
      <DayText label={day.toUpperCase()} currentDay={currentDay} key={index} />
    );
  });
}

DaysGroup.propTypes = {
  currentDay: PropTypes.string,
};

DaysGroup.defaultProps = {
  currentDay: "noDay",
};
