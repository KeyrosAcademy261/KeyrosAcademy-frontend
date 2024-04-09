import React from 'react'
import './ANavBar.scss'
import {Link} from 'react-router-dom'
import { IoExitOutline } from "react-icons/io5";
import { accountService } from '../../_services/account.service';
import { useNavigate } from 'react-router-dom';

export default function ANavBar() {
  const navigate = useNavigate()
  const ANavigation = [
    {"id" : 1, "name": "Dashboard", "link": "dashboard"},
    {"id" : 2, "name": "Course", "link": "course"},
    {"id" : 3, "name": "Webinaire", "link": "webinaire"},
    {"id" : 4, "name": "User", "link": "user"},
  ]
  const logout =()=>{
    accountService.logout()
    navigate('/adminlogin')
  }
  return (
    <div className='ANavBar'>
      <div className="logo">
        <h1><Link to={'dashboard'}>KEYROS ACADEMY</Link></h1>
      </div>
      <div className="navigation">
        <ul>
          {ANavigation.map(function(e){
            return <li key={e.id}><Link to={e.link}>{e.name}</Link></li>
          })}
        </ul>
      </div>
      <div className="LogoutBtn">
        <p onClick={logout}><IoExitOutline/> Log Out</p>
      </div>
    </div>
  )
}
