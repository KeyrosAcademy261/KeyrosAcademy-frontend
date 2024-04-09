import React from 'react'
import {UNavBar, UHeader} from './index'
import {Outlet} from 'react-router-dom'

function Ulayout() {
  return (
    <div className="Ulayout">
      <UNavBar/>
      <div className="UserContainer">
        <UHeader/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Ulayout