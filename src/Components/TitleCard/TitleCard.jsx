import React, { useState, useEffect, useRef } from "react";
import "./Titlecard.css";
import { Link } from "react-router-dom";

function TitleCard({ title, category }) {
  const [movies, setMovies] = useState([]);
  const cardsRef = useRef();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjA0ZWRjZWFhMTk3ZTMxZGFmMTI3YzczYzU3ZDUxMyIsIm5iZiI6MTczMTMwMzE5MC4wOTM2NDI3LCJzdWIiOiI2NzMxOTA4MzcyMjFjNDEyYTZhZjhjZGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.uuY-Tzw9eiuiMFcjwtn5nfKDKSylgPaVRgefSjYi7f8",
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY * 2.5;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category || "now_playing"}?language=en-US&page=2`,
      options
    )
      .then((res) => res.json())
      .then((res) => setMovies(res.results))
      .catch((err) => console.error("Error fetching movies:", err));

    const cards = cardsRef.current;
    cards.addEventListener("wheel", handleWheel);

    return () => cards.removeEventListener("wheel", handleWheel);
  }, [category]);

  return (
    <div className="title-cards">
      <h2>{title || "Popular on Netflix"}</h2>
      <div className="card_list" ref={cardsRef}>
        {movies.map((card) => (
          <Link
            to={`/trailer/${card.id}`}
            className="card"
            key={card.id}
          >
            {card.backdrop_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                alt={card.original_title}
              />
            ) : (
              <div className="placeholder">Image Not Available</div>
            )}
            <h4>{card.original_title}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TitleCard;
