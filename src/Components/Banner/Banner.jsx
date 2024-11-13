import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Banner.css';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjA0ZWRjZWFhMTk3ZTMxZGFmMTI3YzczYzU3ZDUxMyIsIm5iZiI6MTczMTQ2MDc5My4zMjk0MjgsInN1YiI6IjY3MzE5MDgzNzIyMWM0MTJhNmFmOGNkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uoe0MviUE6ToUDRW63YPTsNabIQXQ0JUaL94tEYmWaM'
  }
};

function Banner() {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trailerUrl, setTrailerUrl] = useState(null);

  // Fetch upcoming movies
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      })
      .catch(err => console.error(err));
  }, []);

  // Move to the next movie in the slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 5000); // Change movie every 5 seconds
    return () => clearInterval(interval);
  }, [movies.length]);

  // Fetch and set trailer URL
  const playTrailer = (movie) => {
    fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(data => {
        const trailer = data.results.find(vid => vid.type === "Trailer");
        if (trailer) {
          setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}?autoplay=1&controls=1`);
        } else {
          console.info(`No trailer found for "${movie.title}".`);
        }
      })
      .catch(err => console.error('Failed to load trailer:', err));
  };

  // Close trailer modal
  const closeTrailer = () => {
    setTrailerUrl(null);
  };

  if (!movies || movies.length === 0) {
    return <div>Loading...</div>;
  }

  const currentMovie = movies[currentIndex];

  return (
    <div
      className="banner"
      style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}')` }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">{currentMovie.title}</h1>
        <p className="banner-description">
          {currentMovie.overview ? currentMovie.overview.substring(0, 150) + '...' : 'No description available'}
        </p>
        <div className="banner-buttons">
          <button className="banner-button" onClick={() => playTrailer(currentMovie)}>
            <FontAwesomeIcon icon={faPlay} className="icon" /> Play
          </button>
          <button className="banner-button">
            <FontAwesomeIcon icon={faInfoCircle} className="icon" /> More Info
          </button>
        </div>
      </div>
      <div className="banner-fadeBottom"></div>

      {/* Trailer Modal */}
      {trailerUrl && (
        <div className="trailer-modal">
          <div className="trailer-content">
          <button className="close-button" onClick={closeTrailer}>
              <FontAwesomeIcon icon={faTimes} className="close-icon" />
            </button>
            <iframe
              width="100%"
              height="100%"
              src={trailerUrl}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Trailer"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Banner;
