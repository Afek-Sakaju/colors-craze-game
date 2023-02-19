import React from "react";
import { Clock, ColorsTable } from "./components";

function App() {
  return (
    <div className="mainContainer">
      <div className="midContainer">
        <ColorsTable allowRepeatedColors={false} />
        <div className="clockContainer">
          <Clock />
        </div>
      </div>
    </div>
  );
}

export default App;
