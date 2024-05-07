import React, { useEffect, useRef, useState } from "react";
import Chargement from "../chargement";
import "./AffichageChapitre.scss";
import { videoServices } from "../../_services/video.services";
import { useNavigate } from "react-router-dom";

export default function AffichageChapitre() {
  const navigate = useNavigate()
  const [folderList, setFolderList] = useState([]);
  const flag = useRef(false);

  async function fetchFolderData(e) {
    await videoServices
      .getAllFolder()
      .then((res) => e(res.data[0].folders))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    if (flag.current === false) {
      fetchFolderData(setFolderList);
    }
    return () => (flag.current = true);
  }, []);
  const replace = (e) => {
    const chaine = e;
    const newChaine = chaine.replace(/0/g, " ").replace(/1/g, "-");
    return newChaine;
  };

  const viewLevel = (uid) =>{
    navigate(`level/${uid}`)
  }

  if (folderList.length < 1) {
    return Chargement();
  }

  return (
    <div className="chapitre">
      <div className="title">
        <h2>Les Differentes level pour le formation avec keyros academy</h2>
      </div>
      <div className="cardSpace">
        {folderList.map((e) => {
          return (
            <div
              className="card"
              key={e.id}
              onClick={() => {
                viewLevel(e.id);
              }}
            >
              <h2>{replace(e.name)}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
