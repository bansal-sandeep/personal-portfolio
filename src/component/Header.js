import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <Link to="/" className="navbar-brand">
        Sandeep Bansal
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Contact Me
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Follow Me
            </Link>
          </li>
          <li className="nav-item active">
            <button className="btn btn-secondary">Resume</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
