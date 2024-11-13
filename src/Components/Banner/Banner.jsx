import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faInfoCircle ,faTimes} from '@fortawesome/free-solid-svg-icons';
import './Banner.css';

const token = import.meta.env.VITE_TOKEN;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
};

function Banner() {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const random = Math.floor(Math.random() * 10) + 1;

  // Fetch upcoming movies
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${random}`, options)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  // Move to the next movie in the slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 5000); // Change movie every 4 seconds
    return () => clearInterval(interval);
  }, [movies.length]);

  // Check if there are any movies and get the current movie
  const currentMovie = movies.length > 0 ? movies[currentIndex] : null;

  // Play trailer
  const playTrailer = (movie) => {
    fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`, options)
      .then((res) => res.json())
      .then((data) => {
        const trailer = data.results.find((vid) => vid.type === 'Trailer');
        if (trailer) {
          setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}?autoplay=1&controls=1`);
        }
      })
      .catch((err) => console.error('Failed to load trailer:', err));
  };

  // Show toast with movie info
  const showMoreInfoToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000); // Hide toast after 3 seconds
  };
  const closeTrailer = () => {
    setTrailerUrl(null); // This will hide the trailer modal
  };
  
  return (
    <div
      className="banner"
      style={{
        backgroundImage: currentMovie && currentMovie.backdrop_path
          ? `url('https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}')`
          : 'none',
      }}
    >
      {currentMovie && (
        <div className="banner-contents">
          <h1 className="banner-title">{currentMovie.title}</h1>
          <p className="banner-description">
            {currentMovie.overview
              ? currentMovie.overview.substring(0, 150) + '...'
              : 'No description available'}
          </p>
          <div className="banner-buttons">
            <button className="banner-button" onClick={() => playTrailer(currentMovie)}>
              <FontAwesomeIcon icon={faPlay} className="icon" /> Play
            </button>
            <button className="banner-button" onClick={showMoreInfoToast}>
              <FontAwesomeIcon icon={faInfoCircle} className="icon" /> More Info
            </button>
          </div>
        </div>
      )}

      {/* Trailer Video */}
      {trailerUrl && (
       <div className="trailer-modal">
       <div className="trailer-content">
         <button className="close-button" onClick={closeTrailer}>
           <FontAwesomeIcon icon={faTimes} className="close-icon" />
         </button>
         <div className="iframe-container">
           <iframe
             src={trailerUrl}
             frameBorder="0"
             allow="autoplay; encrypted-media"
             allowFullScreen
             title="Trailer"
           ></iframe>
         </div>
       </div>
     </div>
      )}

      {/* Toast Notification */}
      {showToast && currentMovie && (
        <div className="card toast-card">
          <img
            src={`https://image.tmdb.org/t/p/w200${currentMovie.poster_path}`}
            alt={currentMovie.title}
            className="toast-image"
          />
          <div className="toast-content">
            <h3 className="toast-title">{currentMovie.title}</h3>
            <p className="toast-description">
              {currentMovie.overview ? currentMovie.overview.substring(0, 60) + '...' : 'No description available'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Banner;
