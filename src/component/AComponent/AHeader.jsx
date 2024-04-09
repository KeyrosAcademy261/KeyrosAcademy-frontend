import React from 'react'
import './AHeader.scss'
import { IoSearch } from "react-icons/io5";

export default function AHeader() {
  const email = localStorage.getItem('email').charAt(0)
  return (
    <div className='AHeaderContainer'>
      <div className="searchBar">
        <IoSearch className='IconSearchBar'/>
        <input type="text" placeholder='Search ...'/>
      </div>
      <div className="AvatarUser">
        <h3>{email}</h3>
      </div>
    </div>
  )
}
