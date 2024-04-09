import './AUsers.scss'
import { Routes, Route } from 'react-router-dom'
import AffichageUser from '../../component/AComponent/AffichageUser'
import AddUser from '../../component/AComponent/AddUser'
import EditUser from '../../component/AComponent/EditUser'


export default function AUsers() {
  return (
    <div className='userContainer'>
        <AffichageUser />
        <Routes>
          <Route path='/' exact element={<AddUser />} />
          <Route path='/edit/:uid' element={<EditUser />} />
        </Routes>
    </div>
  )
}
