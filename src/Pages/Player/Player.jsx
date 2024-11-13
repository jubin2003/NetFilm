import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import "./Player.css";

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trailer, setTrailer] = useState({
    name: "Loading...",
    key: "",
    published_at: "",
    type: "",
  });
  const { id } = useParams();
  const [fetchError, setFetchError] = useState(false);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjA0ZWRjZWFhMTk3ZTMxZGFmMTI3YzczYzU3ZDUxMyIsIm5iZiI6MTczMTM4NTExNC4wMjI3ODk3LCJzdWIiOiI2NzMxOTA4MzcyMjFjNDEyYTZhZjhjZGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.v_ElMLVXRYc_G_-3dU5BYJqTSo6_lcfNaVkx912VHqA",
    },
  };

  useEffect(() => {
    console.log("Fetching trailer data...");
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.results && res.results.length > 0) {
          setTrailer(res.results[0]);
          setFetchError(false);
        } else {
          console.error("No trailer available.");
          setTrailer({ name: "No trailer available", key: "", published_at: "", type: "" });
          setFetchError(true);
        }
      })
      .catch((err) => {
        console.error("Network or fetch error:", err);
        setTrailer({ name: "Network error. Try again later.", key: "", published_at: "", type: "" });
        setFetchError(true);
      });
  }, [id]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (fetchError) {
    return <Navigate to="/" />;
  }

  return (
    <div className="player-container">
      <div className="overlay">
        <button onClick={() => window.location.href = "/"} className="back-button">
          &#8592; Back
        </button>
        <div className="player-info">
          <h3 className="title">{trailer.name}</h3>
          <p className="publish-date">Published on: {trailer.published_at}</p>
          <p className="type">Type: {trailer.type}</p>
        </div>
      </div>
      <iframe 
        className="video"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=${isPlaying ? 1 : 0}&controls=1`}
              frameBorder="0"
               allow="autoplay; fullscreen; encrypted-media"
              allowFullScreen
              title="Trailer"
            ></iframe>
     
    </div>
  );
}

export default Player;
