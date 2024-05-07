import React from "react";
import "./AffichageUser.scss";
import { ShowUser } from "../../functions/function";


function AffichageUser() {
  
  return (
    <div className="affichageUser">
      <h3>La liste des utilisateur</h3>
      {ShowUser()}
    </div>
  );
}

export default AffichageUser;
