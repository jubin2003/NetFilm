import React, { useState, useEffect, useRef } from "react";
import "./Titlecard.css";
import { Link } from "react-router-dom";

function TitleCard({ title, category }) {
  const token = import.meta.env.VITE_TOKEN;
    const [movies, setMovies] = useState([]);
  const cardsRef = useRef();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY * 2.5;
  };
  const random = Math.floor(Math.random() * 30)+1;
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category || "now_playing"}?language=en-US&page=${random}`,
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
<img
                src="https://payload.cargocollective.com/1/23/758880/13104445/NO-MOVIE-POSTERS-02-03-003_1000.jpg"
                alt="Default movie poster"
                className="default-poster"
              />            )}
            <h4>{card.original_title}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TitleCard;
