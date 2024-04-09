import React, { useEffect, useRef, useState } from 'react'
import { videoServices } from '../../_services/video.services'
import { calcule } from '../../component/function'
import { useNavigate } from 'react-router-dom'

function UVideoAffichage() {
  const navigate = useNavigate()
  const [coursList, setCoursList] = useState([])
  const [folderList, setFolderList] = useState([])
  const [progess, setProgress] = useState(50);
  const flag = useRef(false)

  async function fetchFolderData(e) {
    await videoServices.getAllFolder()
      .then(res => e(res.data[0].folders))
      .catch((error) => console.log(error))
  }
  async function fetchDataCours(e) {
    await videoServices.getAllVideos()
      .then(res => {
        e(res.data[0].files)
      })
      .catch((error) => console.log(error))
  }
  useEffect(() => {
    if (flag.current === false) {
      fetchDataCours(setCoursList)
      fetchFolderData(setFolderList)
    }
    return () => flag.current = true
  }, [])
  if (!coursList) {
    return (
      <div className="attente">
        <h1>Chargement en Cours...</h1>
      </div>
    )
  }
  const replace = (e) => {
    const chaine = e
    const newChaine = chaine.replace(/0/g, ' ')
    return newChaine
  }
  const viewVideo = (uid) => {
    navigate(`view/${uid}`)
    console.log('view video')
  }

  return (
    <div className="UCourseContainer">
      <div className="courseTitle">
        <h1>KEYROS ACADEMY TRADING PROGRAM</h1>
      </div>
      <div className="bannerCourse">
        <img
          src="data:image/jpeg;base64,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"
          alt="bull and bear"
        />
        <div className="details">
          <h2>DEBUTANT COURSE</h2>
        </div>
      </div>
      {folderList.map((e) => {
        return (
          <div className="courseList" key={e.id}>
            <h3>{replace(e.name)}</h3>
            <div className="cardContainer">
              {coursList.map(function (course) {
                if (e.id === course.folder_id) {
                  return (
                    <div className="card" key={course.id}>
                      <div className="thumbnail">
                        <img src={course.url_thumbnail} alt={course.title} />
                      </div>
                      <div className="title">
                        <p>{course.title}</p>
                        <p>{calcule(course.duration)}</p>
                      </div>
                      <div className="button">
                        <p
                          onClick={() => {
                            viewVideo(course.id);
                          }}
                        >
                          view
                        </p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UVideoAffichage