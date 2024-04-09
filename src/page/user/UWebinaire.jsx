import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { webinaireService } from '../../_services/webinaire.service';

function UWebinaire() {
  const flag = useRef(false)
  const [webinaire, setWebinaire] = useState([])

  useEffect(() => {
    if (flag.current === false) {
      webinaireService.getAllWebinaire()
        .then(res => setWebinaire(res.data))
        .catch((error) => console.log(error))
    }
    return () => flag.current = true
  })
  return (
      <div className="UWebinaire">
        <div className="affichageWebinaire">
        <h3>La liste des réunions</h3>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>description</th>
              <th>date</th>
              <th>heure</th>
              <th>link</th>
            </tr>
          </thead>
          <tbody>
            {webinaire.map((e) => {
              return (
                <tr key={e._id}>
                  <td>{e.title}</td>
                  <td>{e.description}</td>
                  <td>{e.date}</td>
                  <td>{e.heure}</td>
                  <td><Link to={e.link} target='blank'>Join</Link></td>

                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      </div>
  )
}

export default UWebinaire