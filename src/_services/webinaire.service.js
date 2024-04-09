import Axios from './caller.service'

let getAllWebinaire = ()=>{
    return Axios.get('/webinaires/allWebinaire')
}

let getWebinaire = (uid)=>{
    return Axios.get('/webinaires/'+uid)
}

let AddWebinaire = (details)=>{
    return Axios.post('/webinaires/', details)
}

let UpdateWebinaire = (uid, details)=>{
    return Axios.patch('/webinaires/'+uid, details)
}

let DeleteWebinaire = (uid)=>{
    return Axios.delete('/webinaires/'+uid)
}

export const webinaireService ={
    getAllWebinaire, getWebinaire, AddWebinaire,UpdateWebinaire,DeleteWebinaire
}