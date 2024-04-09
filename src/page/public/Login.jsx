import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaUnlockAlt } from "react-icons/fa";
import "./Login.scss";
import { accountService } from "../../_services/account.service";

export default function Login() {
  let navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const onChange = (e) => {

    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }
  const onSubmit = (e) => {
    e.preventDefault()

    accountService.login(credentials)
      .then(res => {
        const token = res.data.token
        const email = res.data.email
        accountService.saveToken(token)
        accountService.saveEmail(email)
        navigate('/user')
      })
      .catch(error => setError(error.response.data.error))
  }
  return (
    <div className="containerLogin">
      <div className="loginComponent">
        <div className="titleLogin">
          <h3>Login</h3>
        </div>
        <div className="form">
          <form onSubmit={onSubmit}>
            <div className="groupInput">
              <label htmlFor="Email">Email</label>
              <div className="input">
                <FaEnvelope className="iconLogin" />
                <input type="email" placeholder="Type your email . . ." value={credentials.email} onChange={onChange} name="email" />
              </div>
            </div>
            <div className="groupInput">
              <label htmlFor="password">Password</label>
              <div className="input">
                <FaUnlockAlt className="iconLogin" />
                <input type="password" placeholder="Type your password . . ." value={credentials.password} onChange={onChange} name="password" />
              </div>
            </div>
            <div className="btnConnexion">
              <button>Connexion</button>
            </div>
          </form>
        </div>
        <div className="errorMssg">{error && <p>{error}</p>}</div>
      </div>
    </div>
  );
}
