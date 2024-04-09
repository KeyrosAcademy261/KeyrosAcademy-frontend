import React, { useState } from 'react'
import './AddCourse.scss'

function AddCourse() {
  const [details, setDetails] = useState({
    chapitre: '',
    title: '',
    description: '',
  })
  const [file, setFile] = useState(null)


  const onChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value
    })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if(file){
      const formData = new FormData()
      formData.append('video', file)
      console.log(formData)
    }
  }
  return (
    <>
      <h3>Ajouter de nouveau Cours</h3>
      <form onSubmit={onSubmit} encType='multipart/form-data'>
        <div className="formGroup">
          <label>Chapitre</label>
          <input type="text" name="chapitre" placeholder="Entrez le chapitre" value={details.chapitre} onChange={onChange} />
        </div>
        <div className="formGroup">
          <label>Titre de la video</label>
          <input type="text" name="title" placeholder="Entrez le titre de la video" value={details.titre} onChange={onChange} />
        </div>
        <div className="formGroup">
          <label>Description</label>
          <textarea placeholder='Entrez la description de la video' name='description' value={details.description} onChange={onChange}></textarea>
        </div>
        <div className="formGroup">
          <label>Fichier</label>
          <input type="file" name="file" value={file} onChange={(e) => { setFile(e.target.files[0]) }} />
        </div>
        <button>Ajouter une nouvelle Cours</button>
      </form>
    </>
  )
}

export default AddCourse