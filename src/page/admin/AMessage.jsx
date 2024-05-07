import React,{useState} from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./AMessage.scss";
import MessageList from "../../component/AComponent/MessageList.jsx";
import AMessageShow from "../../component/AComponent/AMessageShow.jsx";


export default function AMessage() {
  const [selectedMessageId, setSelectedMessageId] = useState(null)
  const navigate = useNavigate()

  const viewMessage = (messageId) => {
    setSelectedMessageId(messageId);
    navigate("view/" + messageId);
  }
console.log(selectedMessageId)
  return (
    <div className="MessageAdminContainer">
      <MessageList viewMessage={viewMessage} />
      <Routes>
        <Route
          path="/view/:uid"
          Id = {selectedMessageId}
          element={<AMessageShow />}
        />
      </Routes>
    </div>
  );
}
