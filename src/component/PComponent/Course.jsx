import React from 'react'
import { BackboneOfCover, BasicCourseCover, AddInStrategie } from '../../asset'
import './Course.scss'

export default function Course() {
    const courseListe = [
        {'id':1,'img': BasicCourseCover,'title' : 'Advanced Price Action Course','alt':'Advanced Price Action Course','price':100,'details':'Dévouvrez les bases du trading, apprenez à comprendre les marchés financiers et à effectuer vos premieres transactions en toute confiance.','button':'See More'},
        {'id':2,'img': BackboneOfCover,'title' : 'Backbone order flow Strategy','alt':'Adds-In Strategies','price':100,'details':'Pour les traders experimentés ,notre section pro offre des analyses pointues et des outils pour affiner vos compétences et optimiser vos résultats.','button':'See More'},
        {'id':3,'img': AddInStrategie,'title' : 'Adds-In Strategies','alt':'Adds-In Strategies','price':100,'details':'Techniques de gestion de portefeuille avancés et une maitrise inégalée des marchés financiers','button':'See More'},
    ]
  return (
    <div className='Course'>
        <div className="first">
            <h2>Our Most Popular Courses</h2>
        </div>
        <div className="second">
            {courseListe.map(function(e){
                return(
                    <div className="card" key={e.id}>
                        <img src={e.img} alt={e.alt}/>
                        <div className="text">
                            <h3>{e.title}</h3>
                            <p>{e.details}</p>
                        </div>
                    </div>)
                })}
        </div>
    </div>
  )
}
