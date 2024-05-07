import {AxiosMessage} from './message.caller.service'

let sendMessage = (message)=>{
    return AxiosMessage.post("/newMessage", message);
}

let getAllMessage = ()=>{
    return AxiosMessage.get("/AllMessages");
}

let getMessage = (uid) => {
    return AxiosMessage.get("/" + uid);
}

let deleteMessge = (uid) =>{
    return AxiosMessage.delete("/" + uid);
}

export const messageService = {
  sendMessage,
  getAllMessage,
  getMessage,
  deleteMessge,
};