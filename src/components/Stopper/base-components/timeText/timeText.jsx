import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function TimeText({ size, totalSeconds, cb, shouldStop }) {
  const [time, setTime] = useState(totalSeconds);

  useEffect(() => {
    const intervalId =
      !shouldStop &&
      setInterval(() => {
        setTime((seconds) => {
          const updatedSeconds = seconds - 1;
          if (updatedSeconds <= 0) {
            cb?.();
            clearInterval(intervalId);
          }
          return updatedSeconds;
        });
      }, 1000);

    return () => {
      intervalId && clearInterval(intervalId);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldStop]);

  const hours = `${parseInt(time / 60 / 60)}`.padStart(2, "0");
  const minutes = `${parseInt((time / 60) % 60)}`.padStart(2, "0");
  const seconds = `${parseInt(time % 60)}`.padStart(2, "0");
  const timeUnitsText =
    hours === "00" ? `${minutes}:${seconds}` : `${hours}:${minutes}:${seconds}`;

  return (
    <text x="45%" y="55%" textAnchor="middle" style={{ fontSize: `${size}px` }}>
      {timeUnitsText}
    </text>
  );
}

TimeText.propTypes = {
  totalSeconds: PropTypes.number,
  size: PropTypes.number,
};

TimeText.defaultProps = {
  totalSeconds: 50,
  size: 10,
};
