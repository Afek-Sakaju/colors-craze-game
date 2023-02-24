import React, { useState } from "react";
import PropTypes from "prop-types";

import { ManagedDigitsClock, DaysGroup } from "../";
import { AmpmText } from "../../base-components";
import { getDateFormat } from "../../utils";
import "./Clock.scss";

export function Clock({ size, timestamp }) {
  const [ampmState, setAmPmState] = useState("AM");
  const [localeTime, onTimeChange] = useState(getDateFormat(timestamp));
  const [currentDay, setCurrentDay] = useState(localeTime.day);

  let sizeClassname;
  let sizeObj;
  switch (size) {
    case "small":
      sizeClassname = "clock-small";
      sizeObj = { width: "200px", height: "80px" };
      break;
    default:
      sizeClassname = "clock-normal";
      sizeObj = { width: "250px", height: "100px" };
  }

  return (
    <div
      className={`clock-component-container ${sizeClassname}`}
      style={sizeObj}
    >
      <div className="component-container">
        <div className="days-container">
          <DaysGroup currentDay={currentDay} />
        </div>
        <div className="digits-container">
          <ManagedDigitsClock
            updateAmPm={setAmPmState}
            localeTime={localeTime}
            onTimeChange={onTimeChange}
            currentDay={currentDay}
            onDayChange={setCurrentDay}
            useInterval={true}
          />
        </div>
        <div className="ampm-container">
          <AmpmText ampmState={ampmState} label={"AM"} />
          <AmpmText ampmState={ampmState} label={"PM"} />
        </div>
      </div>
    </div>
  );
}

Clock.propTypes = {
  size: PropTypes.string,
  timestamp: PropTypes.number,
};

Clock.defaultProps = {
  size: "normal",
  timestamp: undefined,
};
