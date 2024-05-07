import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../_services/user.service";
import { FaRegTrashCan, FaPenToSquare } from "react-icons/fa6";

export function ShowUser(){
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const flag = useRef(false);
  const getuser = (e, a) =>{
    e.getAllUsers()
        .then(res => a(res.data))
        .catch((error) => console.log(error))
  }
  
  useEffect(() => {
    if (flag.current === false) {
      getuser(userService, setUsers);
    }
    return () => (flag.current = true);
  }, []);

  //delete user function
  const handleDelete = (uid) => {
    userService
      .DeleteUser(uid)
      .then((res) => {
        console.log(res.data);
        getuser(userService,setUsers )
      })
      .catch((error) => console.log(error));
  };

  //edit user function
  const handleEdit = (uid) => {
    navigate(`edit/${uid}`);
  };
  return (
    <div className="affichage">
      
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Email</th>
            <th>Panel</th>
          </tr>
        </thead>
        <tbody>
          {users.map((e) => {
            return (
              <tr key={e._id}>
                <td className="item">{e.lastname}</td>
                <td className="item">{e.firstname}</td>
                <td className="item">{e.email}</td>
                <td>
                  <FaRegTrashCan
                    onClick={() => {
                      handleDelete(e._id);
                    }}
                    className="iconsPannel"
                  />{" "}
                  <FaPenToSquare
                    onClick={() => {
                      handleEdit(e._id);
                    }}
                    className="iconsPannel"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export const replace = (e) => {
  const chaine = e;
  const newChaine = chaine.replace(/0/g, " ");
  return newChaine;
};

export const replaceTitle = (e) => {
  const chaine = e;
  const regex = /Level\//g;
  const regex2 = /0/g;
  const newChaine = chaine.replace(regex, "");
  const title = newChaine.replace(regex2, " ").replace(/1/g, "-");
  return title;
};

export const calcule = (seconde) => {
  let minutes = Math.floor(seconde / 60);
  let secondesRestantes = seconde % 60;

  minutes = parseInt(minutes);
  secondesRestantes = parseFloat(secondesRestantes).toFixed(0);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  secondesRestantes =
    secondesRestantes < 10 ? "0" + secondesRestantes : secondesRestantes;

  let formatMinuteSeconde = minutes + ":" + secondesRestantes;
  return formatMinuteSeconde;
};