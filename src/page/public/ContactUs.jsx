import React from "react";
import "./ContactUs.scss";
import { FaFacebookF, FaSquareTwitter ,FaLinkedinIn ,FaEnvelope, FaPhone,FaLocationDot,FaFacebookMessenger} from "react-icons/fa6";

export default function ContactUs() {
  return (
    <div className="contactContainer">
      <div className="firstComponent">
        <h2>Contact Us</h2>
        <p>Avez-vous des questions ou des remarques. Ecrivez nous un message</p>
      </div>
      <div className="secondComponent">
        <div className="aside">
          <div className="introduction">
            <h3>Contact Information</h3>
            <p>
            Remplissez le formulaire et notre équipe vous répondra dans les 24 heures
            </p>
          </div>
          <div className="contactEPA">
            <p><FaPhone className="icon contact"/> +261 34 35 853 74</p>
            <p><FaEnvelope className="icon contact"/> keyrosacademy@gmail.com</p>
            <p><FaLocationDot className="icon contact"/> lot IVH 31 Ter Antsirabe</p>
          </div>
          <div className="socialResaux">
            <FaFacebookF className="icon"/>
            <FaSquareTwitter className="icon"/>
            <FaLinkedinIn className="icon"/>
            <FaFacebookMessenger className="icon"/>
          </div>
        </div>
        <div className="article">
          <form>
            <div className="partname">
              <div className="formGroup">
                <label htmlFor="FirstName">Prénom</label>
                <input type="text" placeholder="Entrez votre Prénom" />
              </div>
              <div className="formGroup">
                <label htmlFor="FirstName">Nom</label>
                <input type="text" placeholder="Entrez votre Nom" />
              </div>
            </div>
            <div className="partcontact">
              <div className="formGroup">
                <label htmlFor="Email">Email</label>
                <input type="Email" placeholder="Entrez votre Email" />
              </div>
              <div className="formGroup">
                <label htmlFor="FirstName">Téléphone</label>
                <input type="text" placeholder="Entrez votre Téléphone" />
              </div>
            </div>
            <div className="partmessage">
              <div className="formGroup">
                <label htmlFor="Email">Votre Message</label>
                <textarea placeholder="Ecrivez votre message ..."></textarea>
              </div>
            </div>
            <div className="btnSend">
              <button>Envoyer un message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
