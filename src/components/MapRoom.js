import React from "react";
import PropTypes from "prop-types";

const MapRoom = ({ width, height, x, y, clickEvent }) => {
  return (
    <div
      style={{
        backgroundColor: "purple",
        width,
        height,
        gridColumn: x,
        gridRow: y
      }}
      onClick={clickEvent}
    />
  );
};

MapRoom.prototypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default MapRoom;
