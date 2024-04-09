import Axios from './caller.service'

let getAllUsers = ()=>{
    return Axios.get('/users/AllUser')
}

let getUsers = (uid)=>{
    return Axios.get('/users/'+uid)
}

let AddUser = (credentials)=>{
    return Axios.post('/users/signup', credentials)
}

let UpdateUser = (uid, credentials)=>{
    return Axios.patch('/users/'+uid, credentials)
}

let DeleteUser = (uid)=>{
    return Axios.delete('/users/'+uid)
}

export const userService ={
    getAllUsers, getUsers, AddUser,UpdateUser,DeleteUser
}