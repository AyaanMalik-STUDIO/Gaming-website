// Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header text-center">
        <h1 className="py-2 m-0">MaliiikTimes</h1>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" href="/">
            MaliiikTimes
          </Link>
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
                <Link className="nav-link" href="/">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  About
                </Link>
              </li>
              {/* Add more links as needed */}
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Contact
                </Link>
              </li>
            </ul>
            {/* Search bar */}
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
