import React from "react";
import PropTypes from "prop-types";

import { Clock, ManagedColorsTable, Stopper } from "../";
import "./ColorsGame.scss";

export function ColorsGame({ level }) {
  return (
    <div className="main-container">
      <Stopper totalSeconds={200} />
      <div className="mid-container">
        <div className="mid-table-container">
          <ManagedColorsTable />
        </div>
        <Clock />
      </div>
      <Stopper totalSeconds={200} />
    </div>
  );
}

ColorsGame.propTypes = {
  level: PropTypes.number,
};

ColorsGame.defaultProps = {
  level: 1,
};
