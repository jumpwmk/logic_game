import React from "react";
import { connect } from "react-redux";

import Map from "../map/map.component";
import Player from "../player/player.component";

import tiles from "../../config/tiles";

function World(props) {
  const { world } = props;

  return (
    <div
      style={{
        position: "relative",
        width: "600px",
        height: "600px",
        margin: "25px auto"
      }}
    >
      <Map map={{ tiles }} />
      <Player />
    </div>
  );
}

const mapStateToProps = ({ world }) => {
  return { world };
};

export default connect(mapStateToProps)(World);
