// Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="my-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4">
            <h1>MaliiikTimes</h1>
            <p>"Inspiring Digital Journeys, One Line at a Time."</p>
          </div>
          <div className="col-12 col-md-4">
            <div className="">
              <h5>Nagivation and links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link className="text-dark" href="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="text-dark" href="/about">
                    About
                  </Link>
                </li>
                {/* Add more links as needed */}
                <li>
                  <Link className="text-dark" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
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
              <Link
                className="text-dark"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github mx-2 h1"></i>
              </Link>
              <Link
                className="text-dark"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-linkedin mx-2 h1"></i>
              </Link>
              <Link
                className="text-dark"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter mx-2 h1"></i>
              </Link>
              <Link
                className="text-dark"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram mx-2 h1"></i>
              </Link>
              <Link
                className="text-dark"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-youtube mx-2 h1"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <div class="copyright mt-3">
          <small className="">
            &copy; 2023 Maliiik.dev. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
