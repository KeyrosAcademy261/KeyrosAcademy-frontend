import React, { useEffect, useRef, useState } from "react";
import "./AffichageUser.scss";
import { useNavigate } from "react-router-dom";
import { userService } from "../../_services/user.service";
import { FaRegTrashCan, FaPenToSquare } from "react-icons/fa6";

function AffichageUser() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const flag = useRef(false);
  const getUser = () => {
    userService
      .getAllUsers()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    if (flag.current === false) {
        getUser()
    }
    return () => (flag.current = true);
  }, []);

  //delete user function
  const handleDelete = (uid) => {
    userService
      .DeleteUser(uid)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
      getUser()
  };

  //edit user function
  const handleEdit = (uid) => {
    navigate(`edit/${uid}`);
    console.log(`user modifié ${uid}`);
  };
  return (
    <div className="affichage">
      <h3>La liste des utilisateur</h3>
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

export default AffichageUser;
