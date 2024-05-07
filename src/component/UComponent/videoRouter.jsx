import React from "react";
import { Routes, Route } from "react-router-dom";
import RenderVideo from "./renderVideo";
import UVideoAffichage from "./UVideoAffichage";

function VideoRouter() {
  return (
    <div className="ULevelContainer">
      <Routes>
        <Route path='/' exact element={<UVideoAffichage />} />
        <Route path='/view/:uid' element={<RenderVideo />} />
      </Routes>
    </div>
  );
}

export default VideoRouter;
