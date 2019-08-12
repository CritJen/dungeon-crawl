import React, { Component } from "react";

class Tile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    let { tsize, tile, c, r } = this.props;
    const ctx = this.refs.canvas.getContext("2d");
    ctx.fillRect(0, 0, 100, 100);
    // ctx.drawImage(
    //   Dungeon_Tileset, // image
    //   (tile - 1) * tsize, // source x
    //   0, // source y
    //   tsize, // source width
    //   tsize, // source height
    //   c * tsize, // target x
    //   r * tsize, // target y
    //   tsize, // target width
    //   tsize
    // );
  }

  render() {
    return <canvas ref="canvas" width={300} height={300} />;
  }
}

export default Tile;
