import React, { useState } from "react";
import PropTypes from "prop-types";
import { ManagedDigitsClock, DaysGroup } from "../index";
import { getCurrentDateFormat } from "../../utils";
import "./Clock.scss";

export function Clock({ size }) {
  const [ampmState, setAmPmState] = useState("AM");
  const [localeTime, onTimeChange] = useState(getCurrentDateFormat());
  const [currentDay, setCurrentDay] = useState(localeTime.split(" ")[0]);

  const sizeClassAddons = size === "small" ? "small" : "";

  return (
    <div className={`clockComponentContainer ${sizeClassAddons}`}>
      <div className="componentContainer">
        <div className="daysContainer">
          <DaysGroup currentDay={currentDay} />
        </div>
        <ManagedDigitsClock
          updateAmPm={setAmPmState}
          localeTime={localeTime}
          onTimeChange={onTimeChange}
          currentDay={currentDay}
          onDayChange={setCurrentDay}
          useInterval={true}
        />
        <div className={`ampmContainer ${sizeClassAddons}`}>
          <div
            className={
              ampmState === "AM"
                ? `ampmText ${sizeClassAddons}`
                : `ampmText ${sizeClassAddons} passive`
            }
          >
            AM
          </div>
          <div
            className={
              ampmState === "PM"
                ? `ampmText ${sizeClassAddons}`
                : `ampmText ${sizeClassAddons} passive`
            }
          >
            PM
          </div>
        </div>
      </div>
    </div>
  );
}

Clock.propTypes = {
  size: PropTypes.string,
};

Clock.defaultProps = {
  size: "normal",
};
