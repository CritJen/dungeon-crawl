import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MapRoom = ({ width, height, x, y, clickEvent }) => {
  return (
    <Link to="/room">
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
    </Link>
  );
};

MapRoom.prototypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default MapRoom;
