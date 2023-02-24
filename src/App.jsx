import React from "react";
import { ColorsGame } from "./components/ColorsGame/ColorsGame";

function App() {
  return (
    <div className="app-container">
      <ColorsGame
        colorsList={[
          "blue",
          "orange",
          "green",
          "red",
          "purple",
          "brown",
          "pink",
          "gray",
          "olive",
          "turquoise",
        ]}
      />
    </div>
  );
}

export default App;
