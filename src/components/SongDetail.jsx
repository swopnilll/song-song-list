import React from "react";

import { connect } from "react-redux";

const SongDetail = (props) => {
  console.log(props);

  return props.song ? (
    <div>{props.song.title}</div>
  ) : (
    <div>Please select a song</div>
  );
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
