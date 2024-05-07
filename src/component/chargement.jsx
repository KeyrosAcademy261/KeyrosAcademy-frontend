import React from 'react'
import { FaSpinner } from "react-icons/fa";
import './chargement.scss'

function Chargement() {
  return (
    <div className="attente">
      <h1>Chargement en cours ...</h1>
      <FaSpinner className="icons" />
    </div>
  );
}

export default Chargement
