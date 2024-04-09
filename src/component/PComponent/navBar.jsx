import React from 'react'
import './navBar.scss'
import { CiLogin } from "react-icons/ci";
import { Link } from 'react-router-dom';

export default function NavBar() {
    const navigation =[
    {'id':1 ,'name' : 'Home', 'link':''},
    {'id':2,'name' : 'Courses', 'link':'courses'},
    {'id':4,'name' : 'Contact Us', link:'contact'},
]
const connexion =[
    {'id':1 ,'name' : 'Login', 'link':'login', 'icon' : <CiLogin/>},
]
  return (
    <div className="containerFluidNavBar">
        <div className='ContainerNavbar'>
            <div className="title">
                <h1><Link to={"/"}>KEYROS ACADEMY</Link></h1>
            </div>
            <div className="navigation">
                <ul>
                    {navigation.map((e)=>{ return <li key={e.id}><Link to={e.link}>{e.name}</Link></li>})}
                </ul>
            </div>
            <div className="connexion">
                <ul>
                    {connexion.map((e)=>{ return <li key={e.id}><Link to={e.link}>{e.icon} {e.name} </Link></li>})}
                </ul>
            </div>
        </div>

    </div>
  )
}
