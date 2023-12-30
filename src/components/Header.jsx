// Header.js
import React from "react";
// import Logo from '../images/logo.png'; // Replace with your actual logo image
// import TelephoneIcon from '../images/telephone-icon.png'; // Replace with your actual telephone icon image

const Header = () => {
  return (
    <>
      <div className="header text-center">
        <h1 className="py-2 m-0">Maliiik.dev</h1>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            Maliiik.dev
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="bi bi-newspaper h2"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="/blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/coding">
                  Coding
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tutorials">
                  Tutorials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/resources">
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/featured">
                  Featured
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/challenges">
                  Challenges
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              {/* Add more links as needed */}
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
