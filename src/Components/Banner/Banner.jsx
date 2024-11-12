import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './Banner.css';

function Banner() {
  return (
    <div className="banner" style={{ backgroundImage: `url('https://stephenbrad.com/wp-content/uploads/2020/02/NF_Awareness_13ReasonsWhy_1200x628__SB_4.29.19.png')` }}>
      <div className="banner-contents">
        <h1 className="banner-title">Dummy Movie Title</h1>
        <p className="banner-description">
          This is a short description of the dummy movie. It captures the main storyline and entices viewers to watch.
        </p>
        <div className="banner-buttons">
          <button className="banner-button">
            <FontAwesomeIcon icon={faPlay} className="icon" /> Play
          </button>
          <button className="banner-button">
            <FontAwesomeIcon icon={faInfoCircle} className="icon" /> More Info
          </button>
        </div>
      </div>
      <div className="banner-fadeBottom"></div>
    </div>
  );
}

export default Banner;
