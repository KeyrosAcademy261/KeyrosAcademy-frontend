import React from 'react'
import {IoSearch} from "react-icons/io5"
import './UHeader.scss'


function UHeader() {
const email = localStorage.getItem('email').charAt(0)


  return (
    <div className="UHeaderContainer">
      <div className="searchBar">
        <IoSearch className='IconSearchBar'/>
        <input type="text" placeholder='Search...'/>
      </div>
      <div className="AvatarUser">
        <h3>{email}</h3>
      </div>
    </div>
  )
}

export default UHeader