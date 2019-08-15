import React, { useState } from "react";
import "./App.css";
import Tile from "../tile/tile";
import Map from "../Map";

function App() {
  //useState returns an array with two indexes, first one is the current value of the state and the second one is a callback function to update that value.
  //Destructures the returned array and sets the first value to the tilemap varibale
  const [tileMap] = useState([[0, 1, 0], [0, 1, 0], [0, 1, 1]]);
  const clickEvent = () => {
    console.log("Hi!");
  };
  return <Map tileMap={tileMap} clickEvent={clickEvent} />;
}

export default App;
