import React, { useEffect, useState , useRef} from 'react'
import './AMessageShow.scss'
import { messageService } from '../../_services/message.service';

function AMessageShow({ id }) {
  const [mssg, setMssg] = useState(null);
  const flag = useRef(false);
  console.log(id)
  async function getMessages(e) {
    await messageService
      .getMessage(id)
      .then((res) => e(res.data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    if (flag.current === false) {
      if (id) {
        getMessages(setMssg);
      }
    }
    return () => (flag.current = true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <div className="messageShow">
      {mssg && (
        <div className="mssgSelected">
          <div className="name">
            <p>prénom : {mssg.firstname}</p>
            <p>nom : {mssg.lastname}</p>
          </div>
          <div className="contact">
            <p>prénom : {mssg.email}</p>
            <p>nom : {mssg.telephone}</p>
          </div>
          <div className="contact">
            <p>message</p>
            <p>{mssg.messages}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AMessageShow
