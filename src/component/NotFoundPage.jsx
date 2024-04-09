import React from 'react'
import {useNavigate} from 'react-router-dom'
import './NotFoundPage.scss'

function NotFoundPage() {
  const navigate = useNavigate()

  const handlechange = ()=>{
    navigate('')
  }

  return (
    <div className='notFoundPage'>
      <h1>Oops!</h1>
      <h3>404 - PAGE NOT FOUND</h3>
      <p>Désolé, la page que vous recherchez semble introuvable. Il est possible qu'elle ait été déplacée, supprimée ou qu'une erreur se soit produite lors de son accès. Vous pouvez revenir à la page précédente, visiter notre page d'accueil pour explorer d'autres contenus ou vérifier l'exactitude de l'URL que vous avez saisie.</p>
      <button onClick={handlechange}>GO TO HOMEPAGE</button>
    </div>
  )
}

export default NotFoundPage