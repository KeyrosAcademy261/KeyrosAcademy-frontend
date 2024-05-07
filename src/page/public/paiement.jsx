import React, { useState } from "react";
import {Link} from "react-router-dom"
import "./paiement.scss";

function Paiement() {
  const [showElement, setShowElement] = useState(1);

  const showPaiementMethode = (id) => {
    setShowElement(id);
    console.log(id);
  };

  const paiementInstruction = (title, num, nom) => {
    return (
      <div className="paiementType">
        <div className="title">
          <h2>{title}</h2>
          <p>{num}</p>
          <p>{nom}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="paiementWrapper">
      <div className="paiementMethode">
        <div className="title">
          <h2>Keyros Academy vous remercie pour votre commande</h2>
          <p>
            Merci pour votre achat de notre formation de trading ! Votre
            confiance témoigne de votre détermination à réussir. Préparez-vous à
            explorer de nouveaux horizons financiers avec nous !
          </p>
        </div>
        <div className="cardSpace">
          <div
            className="card orange"
            onClick={() => {
              showPaiementMethode(1);
            }}
          >
            <div className="logo">
              <img
                src="https://media.publit.io/file/ASSET/Orange-Money-Logo.wine.png"
                alt="logo orange money"
              />
            </div>
          </div>
          <div
            className="card telma"
            onClick={() => {
              showPaiementMethode(2);
            }}
          >
            <div className="logo">
              <img
                src="https://media.publit.io/file/ASSET/MVola-brand-new-vert-04.png"
                alt="logo telma"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="paimentInstruction">
        <div className="product">
          <div className="details">
            <h3>FORMATION TRADING KEYROS ACADEMY COMPLETE</h3>
            <div className="prix">
              <p>
                Prix : <span className="promo">700.000MGA</span> au lieu de{" "}
                <span className="prixReal">1.500.000MGA</span>
              </p>
            </div>
          </div>
        </div>
        <div className="instruction">
          {showElement === 1 && (
            <>
              {paiementInstruction(
                "Orange Money",
                "032.92.457.94",
                "Rakotoarinosy Anjaniaina Harifenitra"
              )}
            </>
          )}
          {showElement === 2 && (
            <>
              {paiementInstruction(
                "Mvola",
                "034.08.507.06",
                "Rakotoarinosy Anjaniaina Harifenitra"
              )}
            </>
          )}
          <div className="step">
            <h3>Etape 1 :</h3>
            <p>
              choisissez le mode de paiement qui vous convient le mieux pour
              régler les frais de formation.
            </p>
          </div>
          <div className="step">
            <h3>Etape 2 :</h3>
            <p>
              Une fois que vous avez terminé votre transfert, veuillez envoyer
              la référence de transaction, le numéro de téléphone et le nom de
              l'expéditeur à la page facebook de
              <Link
                to={"https://www.facebook.com/messages/t/106748085530814"}
                target="blanck"
              >
                <strong> Keyros Academy</strong>.
              </Link>
            </p>
          </div>
          <div className="step">
            <h3>Etape 3 :</h3>
            <p>
              Après avoir reçu la confirmation de votre paiement par le
              responsable, veuillez nous communiquer votre adresse e-mail, votre
              nom et prénom.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paiement;
