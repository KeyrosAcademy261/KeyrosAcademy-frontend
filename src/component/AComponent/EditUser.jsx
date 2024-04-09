import React, { useEffect, useRef, useState } from 'react'
import { userService } from '../../_services/user.service'
import './AddUser.scss'
import { useParams } from 'react-router-dom'



function EditUser() {
  const flag = useRef(false)
  const {uid} = useParams()
  const [credentials, setCredentials] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  })
  useEffect(()=>{
    if(flag.current === false){
      userService.getUsers(uid)
        .then((data)=>{setCredentials(data.data)})
        .catch((error)=>{console.log(error)})
    }
    return ()=>flag.current = true

  },[uid])

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(credentials)
    userService.UpdateUser(uid,credentials)
      .then(res => {
        console.log(res.data)
        credentials.firstname('')
        credentials.lastname('')
        credentials.email('')
        credentials.password('')
      })
      .catch(error => console.log(error))
  }

  return (
    <div className='addUser' onSubmit={onSubmit}>
      <h3>Modification utilisateur</h3>
      <form>
        <div className="groupInput">
          <label htmlFor="Nom">Nom</label>
          <input type="text" placeholder="Entrez le nom de l'utilisateur..." name="firstname" value={credentials.firstname} onChange={onChange} />
        </div>
        <div className="groupInput">
          <label htmlFor="Prénom">Prénom</label>
          <input type="text" placeholder="Entrez le prénom de l'utilisateur..." name="lastname" value={credentials.lastname} onChange={onChange} />
        </div>
        <div className="groupInput">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Entrez le email de l'utilisateur..." name="email" value={credentials.email} onChange={onChange} />
        </div>
        <div className="groupInput">
          <label htmlFor="Password">Password</label>
          <input type="text" placeholder="Entrez le mot de passe de l'utilisateur..." name="password" value={credentials.password} onChange={onChange} />
        </div>
        <button>Update utitlisateurs</button>
      </form>
    </div>
  )
}

export default EditUser