import React from "react";
import MapRoom from "./MapRoom";

const Map = ({ tileMap }) => {
  const dimension = tileMap.length * 64;
  return (
    <div
      style={{
        height: dimension,
        width: dimension,
        display: "grid",
        gridAutoColumns: "lfr",
        gridAutoRows: "lfr"
      }}
    >
      {tileMap.map((row, rowIndex) => {
        return row.map((cell, columnIndex) =>
          cell ? (
            <MapRoom
              width={dimension}
              height={dimension}
              x={columnIndex + 1}
              y={rowIndex + 1}
            />
          ) : (
            <div
              style={{
                width: dimension,
                height: dimension,
                gridColumn: columnIndex + 1,
                gridRow: rowIndex + 1
              }}
            />
          )
        );
      })}
    </div>
  );
};

export default Map;
