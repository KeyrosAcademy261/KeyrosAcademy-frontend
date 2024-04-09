import Axios from './caller.service'

let getAllVideos = ()=>{
    return Axios.get('/videos')
}
let getAllFolder = ()=>{
    return Axios.get('/videos/folders')
}
let getOneVideo = (uid)=>{
    return Axios.get('/videos/'+uid)
}

export const videoServices ={
    getAllVideos,
    getAllFolder,
    getOneVideo
}
