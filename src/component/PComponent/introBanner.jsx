import React from "react";
import { Link } from "react-router-dom";
import "./introBanner.scss";

export default function IntroBanner() {
  return (
    <div className="IntroBanner">
      <div className="information">
        <h1>APPRENEZ MAINTENANT ET FAITES DU SUCCES VOTRE METIER</h1>
        <p>
          Que vous soyez intermediaire ou débutant dans le monde du marché des devises
          et des matières premières, nous sommes là pour vous aider à élever vos
          finances au niveau supérieur.
        </p>
        <button>
          <Link to={"contact"}>Commencer à Apprendre</Link>
        </button>
      </div>
    </div>
  );
}
