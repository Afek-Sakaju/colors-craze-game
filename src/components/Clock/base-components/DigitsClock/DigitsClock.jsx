import React from "react";
import PropTypes from "prop-types";
import { Digit } from "../Digit/Digit";
import "./DigitsClock.scss";

export function DigitsClock({ time }) {
  let [hh, mm, ss] = time?.split(":") ?? ["00", "00", "00"];

  hh = hh.padStart(2, "0");
  mm = mm.padStart(2, "0");
  ss = ss.padStart(2, "0");

  return (
    <div className="numbers-container digit-small">
      <div className="two-digits">
        {hh.split("").map((digit, index) => (
          <Digit value={+digit} key={`hh ${index}`} />
        ))}
      </div>
      <div className="two-digits">
        {mm.split("").map((digit, index) => (
          <Digit value={+digit} key={`mm ${index}`} />
        ))}
      </div>
      <div className="two-digits">
        {ss.split("").map((digit, index) => (
          <Digit value={+digit} key={`ss ${index}`} />
        ))}
      </div>
    </div>
  );
}

DigitsClock.propTypes = {
  time: PropTypes.string,
};

DigitsClock.defaultProps = {
  time: "00:00:00",
};
