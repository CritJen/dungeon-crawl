import React from "react";
import PropTypes from "prop-types";

const MapRoom = ({ width, height, x, y }) => {
  return (
    <div
      style={{
        backgroundColor: "purple",
        width,
        height,
        gridColumn: x,
        gridRow: y
      }}
    />
  );
};

MapRoom.prototypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default MapRoom;
