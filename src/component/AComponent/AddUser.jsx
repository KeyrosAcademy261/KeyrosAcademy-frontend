import React, { useState } from "react";
import { accountService } from "../../_services/account.service";
import "./AddUser.scss";
import { ShowUser } from "../../functions/function";

function AddUser() {
  const [credentials, setCredentials] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    accountService
      .AddUser(credentials)
      .then((res) => {
        console.log(res)
        credentials.firstname('');
        credentials.lastname('');
        credentials.email('');
        credentials.password('');
        ShowUser()
      })
      .catch((error) => setError(error.response.data.error));
  };

  return (
    <div className="addUser" onSubmit={onSubmit}>
      <h3>Ajouter un nouveau utilisateur</h3>
      <form>
        <div className="groupInput">
          <label htmlFor="Nom">Nom</label>
          <input
            type="text"
            placeholder="Entrez le nom de l'utilisateur..."
            name="firstname"
            value={credentials.firstname}
            onChange={onChange}
          />
        </div>
        <div className="groupInput">
          <label htmlFor="Prénom">Prénom</label>
          <input
            type="text"
            placeholder="Entrez le prénom de l'utilisateur..."
            name="lastname"
            value={credentials.lastname}
            onChange={onChange}
          />
        </div>
        <div className="groupInput">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Entrez le email de l'utilisateur..."
            name="email"
            value={credentials.email}
            onChange={onChange}
          />
        </div>
        <div className="groupInput">
          <label htmlFor="Password">Password</label>
          <input
            type="text"
            placeholder="Entrez le mot de passe de l'utilisateur..."
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <button>Enregistrer les utitlisateurs</button>
      </form>
      <div className="errorMssg">{error && <p>{error}</p>}</div>
    </div>
  );
}

export default AddUser;
