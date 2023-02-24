/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { DigitsClock } from "../../base-components/DigitsClock/DigitsClock";
import { getDateFormat } from "../../utils";

export function ManagedDigitsClock({
  updateAmPm,
  localeTime,
  onTimeChange,
  onDayChange,
  useInterval,
}) {
  const { day, time, ampm } = localeTime;

  useEffect(() => {
    const timerInterval =
      useInterval &&
      setInterval(() => {
        onTimeChange?.((date) => {
          return getDateFormat(date.timestamp + 1000);
        });
      }, 1000);

    return () => {
      if (timerInterval) clearInterval(timerInterval);
    };
  }, [useInterval]);

  useEffect(() => {
    onDayChange?.(day);
  }, [day]);

  useEffect(() => {
    updateAmPm?.(ampm);
  }, [ampm]);

  return <DigitsClock time={time} />;
}

ManagedDigitsClock.propTypes = {
  updateAmPm: PropTypes.func,
  localeTime: PropTypes.shape({
    day: PropTypes.string,
    time: PropTypes.string,
    ampm: PropTypes.string,
  }),
  onTimeChange: PropTypes.func,
  currentDay: PropTypes.string,
  onDayChange: PropTypes.func,
  useInterval: PropTypes.bool,
};

ManagedDigitsClock.defaultProps = {
  updateAmPm: undefined,
  onTimeChange: undefined,
  currentDay: "noDay",
  onDayChange: undefined,
  useInterval: true,
  localeTime: 0,
};
