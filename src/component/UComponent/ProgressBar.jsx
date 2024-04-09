import React from "react";
import "./ProgressBar.scss"; // Assurez-vous d'avoir un fichier CSS pour les styles de la barre de progression

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }}>
        <div className="progress-label">{`${percentage}%`}</div>
      </div>
    </div>
  );
};

export default ProgressBar;
