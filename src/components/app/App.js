import React, { useState } from "react";
import "./App.css";
import Map from "../Map";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Room from "../Room";

function App() {
  //useState returns an array with two indexes, first one is the current value of the state and the second one is a callback function to update that value.
  //Destructures the returned array and sets the first value to the tilemap varibale
  const [tileMap] = useState([[0, 1, 0], [0, 1, 0], [0, 1, 1]]);
  const clickEvent = () => {
    console.log("Hi!");
  };
  return (
    <Router>
      <div>
        <Route
          exact
          path="/"
          render={routerProps => <Map {...routerProps} tileMap={tileMap} />}
        />
        <Route exact path="/room" component={Room} />
        {/* <Map tileMap={tileMap} clickEvent={clickEvent} /> */}
      </div>
    </Router>
  );
}

export default App;
