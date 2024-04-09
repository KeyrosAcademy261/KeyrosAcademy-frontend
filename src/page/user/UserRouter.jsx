import React from 'react'
import './UserRoute.scss'
import { Routes, Route } from 'react-router-dom'
import { Ulayout,UDashboard, UCourseNew, UWebinaire, USetting} from './index'
import NotFoundPage from '../../component/NotFoundPage'

function UserRouter() {
  return (
    <Routes>
      <Route element={<Ulayout/>}>
        <Route index element={<UDashboard/>}/>
        <Route path='/*' element={<NotFoundPage/>}/>
        <Route path='/dashboard' element={<UDashboard/>}/>
        <Route path='/course/*' element={<UCourseNew/>}/>
        <Route path='/webinaire' element={<UWebinaire/>}/>
        <Route path='/setting' element={<USetting/>}/>
      </Route>
    </Routes>
  )
}

export default UserRouter