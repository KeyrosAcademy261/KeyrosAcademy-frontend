import React, { useRef, useState, useEffect } from "react";
import "./MessageList.scss";
import { messageService } from "../../_services/message.service";
import { FaRegTrashCan } from "react-icons/fa6";

function MessageList({ viewMessage }) {
  const flag = useRef(false);
  const [allMessage, setAllMessage] = useState([]);
  const handleDelete = (uid)=>{
    messageService
      .deleteMessge(uid)
      .then((res)=>fetchMessage(setAllMessage))
  }
  async function fetchMessage(e) {
    await messageService
      .getAllMessage()
      .then((res) => e(res.data))
      .catch((error) => console.log);
  }
  
  useEffect(() => {
    if (flag.current === false) {
      fetchMessage(setAllMessage);
    }
  }, []);

  return (
    <div className="showMessage">
      {allMessage.map(function (e) {
        return (
          <div key={e._id} className="card">
            <div className="contact">
              <p>
                <span>Nom</span> : {e.lastname}
              </p>
              <p>
                <span>Prénom</span> : {e.firstname}
              </p>
              <p>
                <span>Email</span> : {e.email}
              </p>
              <p>
                <span>Telephone</span> : {e.telephone}
              </p>
            </div>
            <div className="message">
              <p>
                <span>Message</span> :{" "}
              </p>
              <p className="text">{e.messages}</p>
            </div>
            <div className="btn">
              <p
                onClick={() => {
                  handleDelete(e._id);
                }}
              >
                <FaRegTrashCan />
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MessageList;
