/* eslint-disable array-callback-return */
import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { videoServices } from "../../_services/video.services";
import { useNavigate } from "react-router-dom";
import { calcule } from "../../functions/function";
import { IoArrowUndo } from "react-icons/io5";

import Chargement from "../chargement";

function RenderVideo() {
  const { uid } = useParams();
  const navigate = useNavigate();
  const flag = useRef(false);
  const [details, setDetails] = useState([]);
  const [coursList, setCoursList] = useState([]);

  function fetchData(e) {
    videoServices
      .getOneVideo(uid)
      .then((res) => e(res.data[0]))
      .catch((error) => console.log(error));
  }

  async function fetchDataCours(e) {
    await videoServices
      .getAllVideos(details.folder_id)
      .then((res) => {
        e(res.data[0].files);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    if (flag.current === false) {
      fetchData(setDetails);
      fetchDataCours(setCoursList);
    }
    return () => (flag.current = true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const viewVideo = (uid) => {
    navigate(`../view/${uid}`);
    fetchData(setDetails);
    window.location.reload();
  };

  if (details.length < 1 || coursList.length < 1) {
    return (
       Chargement()
    );
  }

  return (
    <div className="videoContainer">
      <div className="navigation">
        <div className="backContainer">
          <p>
            <Link to={"../"}>
              <IoArrowUndo />
              retour
            </Link>
          </p>
        </div>
        <div className="courseList">
          <div className="courseList">
            <div className="cardContainer">
              {coursList.map(function (course) {
                if (course.folder_id === details.folder_id) {
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
        </div>
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

export default RenderVideo;
