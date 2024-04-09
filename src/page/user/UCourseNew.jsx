import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UVideoAffichage from '../../component/UComponent/UVideoAffichage'
import RenderVideo from '../../component/UComponent/renderVideo'

function UCourseNew() {
  return (
    <div className='UCourseContainer'>
      <Routes>
        <Route path='/' exact element={<UVideoAffichage />} />
        <Route path='/view/:uid' element={<RenderVideo />} />
      </Routes>
    </div>
  )
}

export default UCourseNew