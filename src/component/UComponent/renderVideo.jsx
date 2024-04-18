import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { videoServices } from '../../_services/video.services'
import { useNavigate } from 'react-router-dom'
import { calcule } from '../../component/function'

function RenderVideo() {
    const { uid } = useParams()
    const navigate = useNavigate()
    const flag = useRef(false)
    const [details, setDetails] = useState([])
    const [coursList, setCoursList] = useState([])
    const [folderList, setFolderList] = useState([])

    function fetchData() {
        videoServices.getOneVideo(uid)
            .then(res => setDetails(res.data[0]))
            .catch(error => console.log(error))
    }

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
            fetchData()
            fetchDataCours(setCoursList)
            fetchFolderData(setFolderList)
        }
        return () => flag.current = true
    }, [])
    const replace = (e) => {
        const chaine = e
        const newChaine = chaine.replace(/0/g, ' ')
        return newChaine
    }
    const viewVideo = (uid) => {
        navigate(`/user/course/view/${uid}`)
        console.log('view video')
        fetchData(uid);
    }
    if (!details) {
        return (
            <div className="attente">
                <h1>Chargement en Cours...</h1>
            </div>
        )
    }
    return (
      <div className="videoContainer">
        <div className="navigation">
          {folderList.map((e) => {
            return (
              <div className="courseList" key={e.id}>
                <h3>{replace(e.name)}</h3>
                <div className="cardContainer">
                  {coursList.map((course) => {
                    if (e.id === course.folder_id) {
                      return (
                        <div className="card" key={course.id}>
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
        <div className="videoLecteur">
          <h2>{details.title}</h2>
          <iframe
            title={details.title}
            src={details.url_preview}
            frameBorder={0}
            autoPlay
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
}

export default RenderVideo