import Axios from './caller.service'

let getAllVideos = (uid)=>{
    return Axios.get('/levels/videoFolder/'+ uid)
}
let getAllFolder = ()=>{
    return Axios.get("/levels/folder/allFolders");
}
let getFolder = (uid)=>{
    return Axios.get("/levels/folder/" + uid);
}
let getOneVideo = (uid)=>{
    return Axios.get("/levels/video/" + uid);
}

export const videoServices ={
    getAllVideos,
    getAllFolder,
    getOneVideo,
    getFolder
}
