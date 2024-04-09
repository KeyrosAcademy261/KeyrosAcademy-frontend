import React, { useState } from 'react'
import './AddWebinaire.scss'

function AddWebinaire() {
  const [details, setDetails] = useState({
    title: '',
    description: '',
    link: '',
    date:'',
    heure:''
  })
  const [files, setFiles] = useState(null)

  const onChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value
    })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(files)
  }
  return (
    <>
      <h3>Modifier une réunion</h3>
      <form onSubmit={onSubmit} encType='multipart/form-data'>
        <div className="formGroup">
          <label>Titre</label>
          <input type="text" name="title" placeholder="Entrez le titre de la webinaire" value={details.title} onChange={onChange} />
        </div>
        <div className="formGroup">
          <label>Link</label>
          <input type="text" name="link" placeholder="Entrez le lien de la webinaire" value={details.link} onChange={onChange} />
        </div>
        <div className="formGroup">
          <label>Description</label>
          <textarea placeholder='Entrez la description de la video' name='description' value={details.description} onChange={onChange}></textarea>
        </div>
        <div className="formGroup">
          <label>Date</label>
          <input type="date" name="date" value={details.date} onChange={(e) => { setFiles(e.target.files[0]) }} />
        </div>
        <div className="formGroup">
          <label>Heure</label>
          <input type="text" name="heure" value={details.heure} onChange={(e) => { setFiles(e.target.files[0]) }} />
        </div>
        <button>Modifier une reunion</button>
      </form>
    </>
  )
}

export default AddWebinaire