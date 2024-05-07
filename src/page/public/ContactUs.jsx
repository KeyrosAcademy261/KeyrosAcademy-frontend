import React, { useState } from "react";
import "./ContactUs.scss";
import {
  FaFacebookF,
  FaSquareTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaFacebookMessenger,
} from "react-icons/fa6";
import { messageService } from "../../_services/message.service";

export default function ContactUs() {
  const [message, setMessage] = useState({
    firstname: "",
    lastname: "",
    email: "",
    telephone: "",
    messages: "",
  });
  const [validMessage, setValidMessage] = useState(false);

  const [error, setError] = useState("");
  const onChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    messageService
      .sendMessage(message)
      .then((res) => {
        if (res.status === 200) {
          setValidMessage(true);
        }
      })
      .catch((error) => setError(error.response.data.error));
  };
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
              Remplissez le formulaire et notre équipe vous répondra dans les 24
              heures
            </p>
          </div>
          <div className="contactEPA">
            <p>
              <FaPhone className="icon contact" /> +261 34 35 853 74
            </p>
            <p>
              <FaEnvelope className="icon contact" /> keyrosacademy@gmail.com
            </p>
            <p>
              <FaLocationDot className="icon contact" /> lot IVH 31 Ter
              Antsirabe
            </p>
          </div>
          <div className="socialResaux">
            <FaFacebookF className="icon" />
            <FaSquareTwitter className="icon" />
            <FaLinkedinIn className="icon" />
            <FaFacebookMessenger className="icon" />
          </div>
        </div>
        <div className="article">
          <form onSubmit={onSubmit}>
            <div className="partname">
              <div className="formGroup">
                <label htmlFor="firstname">Prénom</label>
                <input
                  type="text"
                  placeholder="Entrez votre Prénom"
                  name="firstname"
                  value={message.firstname}
                  onChange={onChange}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="lastname">Nom</label>
                <input
                  type="text"
                  placeholder="Entrez votre Nom"
                  name="lastname"
                  value={message.lastname}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="partcontact">
              <div className="formGroup">
                <label htmlFor="Email">Email</label>
                <input
                  type="Email"
                  placeholder="Entrez votre Email"
                  name="email"
                  value={message.email}
                  onChange={onChange}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="telephone">Téléphone</label>
                <input
                  type="text"
                  placeholder="Entrez votre Téléphone"
                  name="telephone"
                  value={message.telephone}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="partmessage">
              <div className="formGroup">
                <label htmlFor="message">Votre Message</label>
                <textarea
                  placeholder="Ecrivez votre message ..."
                  name="messages"
                  value={message.messages}
                  onChange={onChange}
                ></textarea>
              </div>
            </div>
            <div className="btnSend">
              <button>Envoyer un message</button>
            </div>
          </form>
          <div className="messgage">
            <div className="errorMssg">{error && <p>{error}</p>}</div>
            <div className="successMssg">
              {validMessage && <p>Message envoyer avec succes</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
