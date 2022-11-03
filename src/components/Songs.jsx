import React from "react";

import { connect } from "react-redux";

import { selectSong } from "../actions/index";

const Songs = (props) => {
  console.log(props);
  return (
    <div>
      {props.songs.map((song, index) => {
        return (
          <div key={index} className="song-button">
            <div className="song-description">
              <div>Name: {song.title} </div>
              <div>Duration: {song.duration} </div>
            </div>
            <div>
              <button onClick={() => props.selectSong(song)}>Select Song</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { songs: state.songs, selectedSong: state.selectedSong };
};

export default connect(mapStateToProps, { selectSong })(Songs);
