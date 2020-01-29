import React from "react";

import Header from "./components/header/header.component";
import World from "./components/world/world.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <World />
      <div className="inner_remainning"> test </div>
    </div>
  );
}

export default App;
