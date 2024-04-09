import React from 'react'
import './ACourse.scss'
import AddCourse from '../../component/AComponent/AddCourse'

export default function ACourse() {
  return (
    <div className="courseAdminContainer">
      <div className="affichageCourse"></div>
      <div className="AddCourse">
        <AddCourse/>
      </div>
    </div>
     )
}
