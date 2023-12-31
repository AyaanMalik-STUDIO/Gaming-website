// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="my-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4">
            <h1>Maliiik.Dev</h1>
            <p>"Inspiring Digital Journeys, One Line at a Time."</p>
          </div>
          <div className="col-12 col-md-4">
            <div className="row">
            <h5>Nagivation and links</h5>
              <div className="col-6 col-md-6">
                <ul className="list-unstyled">
                  <li>
                    <a className="text-dark" href="/blog">Blog</a>
                  </li>
                  <li>
                    <a className="text-dark" href="/coding">Coding</a>
                  </li>
                  <li>
                    <a className="text-dark" href="/tutorials">Tutorials</a>
                  </li>
                  <li>
                    <a className="text-dark" href="/projects">Projects</a>
                  </li>
                  <li>
                    <a className="text-dark" href="/resources">Resources</a>
                  </li>
                  <li>
                    <a className="text-dark" href="/featured">Featured</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-6">
                <ul className="list-unstyled">
                  <li>
                    <a className="text-dark" href="/challenges">Challenges</a>
                  </li>
                  <li>
                    <a className="text-dark" href="/about">About</a>
                  </li>
                  {/* Add more links as needed */}
                  <li>
                    <a className="text-dark" href="/contact">Contact</a>
                  </li>
                  <li>
                    <a className="text-dark" href="/services">Services</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <h5>Search and Social Links</h5>
            <form className="d-flex">
              <input
                className="form-control me-2 border-0 border-bottom px-0"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn" type="submit">
                Search
              </button>
            </form>
            {/* Social Icons */}
            <div className="mt-3">
              <a className="text-dark"
                href="https://github.com/your-github-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github mx-2 h1"></i>
              </a>
              <a className="text-dark"
                href="https://linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-linkedin mx-2 h1"></i>
              </a>
              <a className="text-dark"
                href="https://twitter.com/your-twitter-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter mx-2 h1"></i>
              </a>
              <a className="text-dark"
                href="https://instagram.com/your-instagram-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram mx-2 h1"></i>
              </a>
              <a className="text-dark"
                href="https://youtube.com/your-youtube-channel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-youtube mx-2 h1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
            <div class="copyright mt-3">
                <small className="">&copy; 2023 Maliiik.dev. All rights reserved.</small>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
