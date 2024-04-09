import React from 'react'
import {ANavBar, AHeader} from './index'
import { Outlet } from 'react-router-dom'

export default function Alayout() {
  return (
    <div className='Alayout'>
        <ANavBar/>
        <div className="AdminContainer">
          <AHeader/>
          <Outlet/>
        </div>
        
    </div>
  )
}
