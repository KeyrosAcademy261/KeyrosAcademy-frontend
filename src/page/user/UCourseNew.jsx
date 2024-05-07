import React from "react";
import { Routes, Route } from "react-router-dom";
import VideoRouter from "../../component/UComponent/videoRouter";
import AffichageChapitre from "../../component/UComponent/AffichageChapitre";

function UCourseNew() {
  return (
    <div className="UCourseContainer">
      <Routes>
        <Route path="/" exact element={<AffichageChapitre />} />
        <Route path="/level/:uid/*" element={<VideoRouter/>} />
      </Routes>
    </div>
  );
}

export default UCourseNew;
