import React from "react";
import { Clock, ManagedColorsTable } from "./components";

function App() {
  return (
    <div className="mainContainer">
      <div className="midContainer">
        <ManagedColorsTable />
        <div className="clockContainer">
          <Clock />
        </div>
      </div>
    </div>
  );
}

export default App;
