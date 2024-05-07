import React from "react";
import { Link } from "react-router-dom";
import "./ContactUs.scss";


export default function ContactUs() {
  return (
    <div className="containerContactUs">
      <div className="firstPartContactUs">
        <h2>DISCLAIMER</h2>
        <p>
          <span>
            {" "}
            <strong>Keyros Trading Academy</strong>
          </span>{" "}
          n’est pas un service de conseil en investissement, ni un conseiller en
          investissement enregistré ou un courtier et ne prétend pas indiquer ou
          suggérer quels titres ou devises les clients devraient acheter ou
          vendre pour eux-mêmes. Vous comprenez et reconnaissez qu’il existe un
          risque très élevé lié au trading de devises et les marchés financiers.
          <br />
          <span>La société</span>, l’éditeur , l’auteur(s) ,toute(s) société(s)
          affiliée(s) n’assument aucune responsabilité quant à vos résultats
          commerciaux et d’investissement. Il ne faut pas présumer que les
          méthodes, techniques ou indicateurs présentés dans ces produits seront
          rentables à 100% ou qu’ils entraîneront pas de pertes. Les résultats
          passés ne sont pas indicatifs des rendements futurs.
          <br />
          <span>De plus</span>, les indicateurs, stratégies, colonnes, articles
          et toutes autres caractéristiques des produits de la société sont
          fournis à des fins informatives et éducatives uniquement et ne doivent
          pas être interprétés comme des conseils en investissement.
        </p>
      </div>
      <div className="thirdPart">
        <ul>
          <li>
            <a
              href="https://media.publit.io/file/ASSET/Politique-de-confidentialit.pdf"
              target="_blanck"
            >
              Politique de confidentialité
            </a>
          </li>
          <li>
            <a
              href="https://media.publit.io/file/ASSET/Conditions-d-utilisation.pdf"
              target="_blanck"
            >
              Condition d'utilisation
            </a>
          </li>
        </ul>
      </div>
      <div className="SecondPartContactUs">
        <p>
          Copyright @ 2023 Anjaniaina Devs
        </p>
      </div>
    </div>
  );
}
