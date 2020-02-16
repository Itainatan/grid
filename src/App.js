import React from "react";
import "./index.css";
import Game from "../src/components/Game"

export default function App() {
  return (
    <div className="App">
      <Game row={5} column={5} />
    </div>
  );
}







