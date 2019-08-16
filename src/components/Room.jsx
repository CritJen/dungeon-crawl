import React from "react";
import { Link } from "react-router-dom";

const Room = props => {
  return (
    <>
      <div>I'm a room!</div> <br />
      <Link to={"/"}> Go Back </Link>
    </>
  );
};

export default Room;
