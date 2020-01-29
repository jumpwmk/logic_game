import React from "react";

import { SPRITE_SIZE } from "../../config/constants";

import "./map.styles.scss";

function getTileSprite(type) {
  switch (type) {
    case 0:
      return "zero";
    case 1:
      return "u";
    case 2:
      return "r";
    case 3:
      return "ur";
    case 4:
      return "d";
    case 5:
      return "ud";
    case 6:
      return "rd";
    case 7:
      return "urd";
    case 8:
      return "l";
    case 9:
      return "ul";
    case 10:
      return "rl";
    case 11:
      return "url";
    case 12:
      return "dl";
    case 13:
      return "udl";
    case 14:
      return "rdl";
    case 15:
      return "urdl";
    default:
  }
}

function MapTile(props) {
  return <div className={`tile ${getTileSprite(props.tile)}`} />;
}

function MapRow(props) {
  return (
    <div
      className="row"
      style={{
        height: SPRITE_SIZE
      }}
    >
      {props.tiles.map(tile => (
        <MapTile tile={tile} />
      ))}
    </div>
  );
}

function Map(props) {
  const { map } = props;

  return (
    <div
      style={{
        width: "600px",
        height: "600px",
        border: "4px solid #000"
      }}
    >
      {map.tiles.map(row => (
        <MapRow tiles={row} />
      ))}
    </div>
  );
}

export default Map;
