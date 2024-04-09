import React from 'react'
import { GiAbstract089,GiArchiveResearch, GiArcheryTarget} from "react-icons/gi";
import './AboutUs.scss'

export default function AboutUs() {
  return (
    <div className='AboutUS'>
        <div className="containerAboutUs">
            <div className="card">
                <GiArchiveResearch className='AboutUSIcon'/>
                <h3> Weekly live  Pre- Market</h3>
                <p>Accès direct aux expertises du formateur </p>
            </div>
            <div className="card">
                <GiArcheryTarget className='AboutUSIcon'/>
                <h3>Strategies gagnantes et 100% pratique </h3>
                <p>Prouvées et démontrées sur les marchés des commodities et Fx</p>
            </div>
            <div className="card">
                <GiAbstract089 className='AboutUSIcon'/>
                <h3>Suivi à vie</h3>
                <p>Communauté de partage d’experience entre les traders expérimentés</p>
            </div>
        </div>
    </div>
  )
}
