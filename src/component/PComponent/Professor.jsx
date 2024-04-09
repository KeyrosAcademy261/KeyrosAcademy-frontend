import React from "react";
import { Ceo } from "../../asset/index";
import "./Professor.scss";

export default function Professor() {
  return (
    <div className="containerProfessor">
      <div className="titleProfessor">
        <h2>Be In Demand With Our Professional Training</h2>
      </div>
      <div className="second">
        <div className="aside">
          <img src={Ceo} alt="profil du professor" />
          <p>KEVIN SANDERS - Founder & CEO</p>
        </div>
        <div className="section">
          <div className="article">
            <h3>Day Trader Expert</h3>
            <p>
              <span>Bonjour !</span> Je m’appelle Kevin Sanders, je suis un
              full-time trader qui est spécialisé en marché des Devises et des
              matières premières. J’ai commencé le trading à l’âge de 21 ans en
              parcourant beaucoup de formation sur les réseaux. J’ai eu la
              chance d’avoir été formé par l’un des grands traders de Wall
              Street qui a plus de 35 années d’expérience.
            </p>
            <p>
              <span>Ce </span>qui m’a permis de comprendre rapidement les
              fonctionnements des marchés financiers, les disciplines et les
              règles qu’il faut appliquer pour vivre complètement du trading.
              Aujourd’hui, j’ai décidé de partager mes expériences personnelles
              et mes compétences acquises pour vous aider, à vous aussi, de
              vivre entièrement du trading et d’avoir du succès dans votre
              carrière de trader.
            </p>
            <p>
              <span>« In trading,</span> you have to be defensive and aggressive
              at the same time. If you are not aggressive, you are not going to
              make money ,and if you are not defensive you are not going to keep
              money » <strong>Ray Dalio</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
