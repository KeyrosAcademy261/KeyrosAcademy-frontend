import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { webinaireService } from '../../_services/webinaire.service';
import { FaRegTrashCan, FaPenToSquare } from "react-icons/fa6";

function AffichageWebinaire() {
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
    const handleEdit = (uid) => {
        console.log('webinaire modifier')
    }

    const handleDelete = (uid) => {
        webinaireService.DeleteWebinaire(uid)
        .then(res=>console.log(`la réunion sur ${res.data.title} a été supprimer`))
    }
    return (
        <div className="affichageWebinaire">
            <h3>La liste des Réunion</h3>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>description</th>
                        <th>date</th>
                        <th>heure</th>
                        <th>link</th>
                        <th>delete</th>
                        <th>Update</th>
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
                                <td onClick={() => { handleDelete(e._id) }}><FaRegTrashCan className='iconPannel' /></td>
                                <td onClick={() => { handleEdit(e._id) }}><FaPenToSquare className='iconPannel' /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default AffichageWebinaire
