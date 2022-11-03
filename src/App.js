import React from "react";
import SongDetail from "./components/SongDetail";
import Songs from "./components/Songs";

import "./style.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="song-list">
        <Songs />
      </div>

      <div className="song-detail">
        <SongDetail />
      </div>
    </div>
  );
};

export default App;
