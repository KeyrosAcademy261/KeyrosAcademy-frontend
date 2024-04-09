import React, { useState } from "react";
import { webinaireService } from "../../_services/webinaire.service";
import "./AddWebinaire.scss";

function AddWebinaire() {
  const [details, setDetails] = useState({
    title: "",
    description: "",
    link: "",
    date: "",
    heure: "",
  });

  const onChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    webinaireService
      .AddWebinaire(details)
      .then((res) => {
        console.log(res.data);
        setDetails.title("");
        setDetails.link("");
        setDetails.description("");
        setDetails.date("");
        setDetails.heure("");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <h3>Ajouter de nouvelle réunion</h3>
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <div className="formGroup">
          <label>Titre</label>
          <input
            type="text"
            name="title"
            placeholder="Entrez le titre de la webinaire"
            value={details.title}
            onChange={onChange}
          />
        </div>
        <div className="formGroup">
          <label>Link</label>
          <input
            type="text"
            name="link"
            placeholder="Entrez le lien de la webinaire"
            value={details.link}
            onChange={onChange}
          />
        </div>
        <div className="formGroup">
          <label>Description</label>
          <textarea
            placeholder="Entrez la description de la video"
            name="description"
            value={details.description}
            onChange={onChange}
          ></textarea>
        </div>
        <div className="formGroup">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={details.date}
            onChange={onChange}
          />
        </div>
        <div className="formGroup">
          <label>Heure</label>
          <input
            type="text"
            name="heure"
            value={details.heure}
            onChange={onChange}
          />
        </div>
        <div className="formGroup">
          <label>Etudiant</label>
          <select onChange={() => onChange}>
            <option value="default">Choisir l'étudiant</option>
          </select>
        </div>
        <button>Ajouter une nouvelle reunion</button>
      </form>
    </>
  );
}

export default AddWebinaire;
