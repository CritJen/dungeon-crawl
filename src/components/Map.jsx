import React, { Component } from "react";
import Tile from "./tile/tile";

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tiles: [
        1,
        3,
        3,
        3,
        1,
        1,
        3,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        1,
        1,
        1
      ],
      cols: 8,
      rows: 8,
      tsize: 64
    };
  }

  renderTiles = () => {
    const { tiles, cols, rows, tsize } = this.state;

    for (var c = 0; c < map.cols; c++) {
      for (var r = 0; r < map.rows; r++) {
        var tile = map.getTile(c, r);
        return <Tile tile={tile} row column tsize c r />;
      }
    }
  };

  render() {
    return <>{this.renderTiles()}</>;
  }
}

export default Map;
