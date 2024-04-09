import React from 'react'
import AddWebinaire from '../../component/AComponent/AddWebinaire'
import AffichageWebinaire from '../../component/AComponent/AffichageWebinaire'
import './AWebinaire.scss'

export default function AWebinaire() {
  return (
    <div className='AWebinaire'>

      <AffichageWebinaire />

      <div className="formWebinaire">
        <AddWebinaire />
      </div>
    </div>
  )
}
