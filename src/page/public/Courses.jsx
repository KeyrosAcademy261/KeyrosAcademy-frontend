import React, { useState } from "react";
import { IoMdTv } from "react-icons/io";
import "./Courses.scss";
import { NavLink } from "react-router-dom";

export default function Courses() {
  const videoListe = [
    {
      id: 1,
      title: "Introduction à la trading",
      description:
        "Le trading est une activité financière qui implique l'achat et la vente d'actifs tels que des actions, des devises et des produits dérivés sur des marchés financiers. Les traders tentent de réaliser des profits en capitalisant sur les fluctuations des prix des actifs, en achetant lorsque les prix sont bas et en vendant lorsque les prix sont élevés, ou en vendant à découvert pour racheter à un prix inférieur.",
      link: "https://media.publit.io/file/Video0Public/introduction.html?player=keyrosPlayer",
      duration: "3:44",
    },
    {
      id: 2,
      title: "A qui s'adress notre formation",
      description:
        "Dans cette vidéo, nous vous présentons une opportunité unique de développer vos compétences en trading. Que vous soyez un débutant cherchant à comprendre les bases du marché financier ou un investisseur expérimenté désireux d'approfondir vos connaissances, cette formation est conçue pour répondre à vos besoins. Explorez avec nous les principes fondamentaux du trading.",
      link: "https://media.publit.io/file/Video0Public/cibleFormation.html?player=keyrosPlayer",
      duration: "2:08",
    },
    {
      id: 3,
      title: "Explication général",
      description:
        "Dans notre programme de formation de trading, nous avons conçu trois niveaux distincts pour répondre à différents niveaux de compétence et d'expérience. Le module débutant offre une introduction complète aux bases du trading, couvrant des sujets tels que les types d'actifs, les ordres de marché, et la gestion des risques. Les traders professionnels bénéficieront du module intermédiaire, qui approfondit les concepts essentiels.",
      link: "https://media.publit.io/file/Video0Public/explication.html?player=keyrosPlayer",
      duration: "3:44",
    },
  ];
  const [video, setVideo] = useState(videoListe[0].link);
  const [title, setTitle] = useState(videoListe[0].title);
  const [description, setDescription] = useState(videoListe[0].description);

  const renderVideo = function () {
    return (
      <div className="affichageCourse">
        <div className="video-container">
          <figure className="video">
            <iframe
              title={title}
              src={video}
              scrolling="no"
              allowFullScreen="true"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </figure>
        </div>
        <div className="description">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="courseContainer">
      <div className="selectionCourse">
        <h3>Introduction Au Trading</h3>
        <ul>
          {videoListe.map(function (e) {
            return (
              <li key={e.id}>
                <NavLink
                  to={`#${e.title}`}
                  onClick={() => {
                    setVideo(e.link);
                    setTitle(e.title);
                    setDescription(e.description);
                  }}
                >
                  <IoMdTv className="icons" />
                  <p className="titleVideo">{e.title}</p>
                  <p className="durationVideo">{e.duration}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      {renderVideo()}
    </div>
  );
}
