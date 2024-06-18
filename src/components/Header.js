import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="branding">
          <h1>John Doe</h1>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
