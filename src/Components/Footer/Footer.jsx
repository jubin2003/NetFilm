import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png" alt="Netflix Logo" />
      </div>
      
      <div className="footer-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
      
      <div className="footer-links">
        <a href="#audio-description">Audio Description</a>
        <a href="#help-center">Help Center</a>
        <a href="#gift-cards">Gift Cards</a>
        <a href="#media-center">Media Center</a>
        <a href="#investor-relations">Investor Relations</a>
        <a href="#jobs">Jobs</a>
        <a href="#terms-of-use">Terms of Use</a>
        <a href="#privacy">Privacy</a>
        <a href="#legal">Legal Notices</a>
        <a href="#cookie-preferences">Cookie Preferences</a>
        <a href="#corporate-info">Corporate Information</a>
        <a href="#contact-us">Contact Us</a>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Netflix, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
