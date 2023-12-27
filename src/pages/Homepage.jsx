// src/pages/HomePage.js
import React from 'react';
import BlogList from '../components/BlogList';

const HomePage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Main Content Column */}
        <div className="col-lg-8">
          <h1 className="display-4 mb-4">Welcome to the Blogging Website!</h1>
          {/* Displaying the list of blog posts */}
          <BlogList />
        </div>

        {/* Sticky Sidebar Column */}
        <div className="col-lg-4">
          <div className="sticky-top">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">About Us</h5>
                <p className="card-text">
                  Welcome to our blogging platform where you can read and share
                  your thoughts with the world.
                </p>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Recent Posts</h5>
                <ul className="list-group">
                  <li className="list-group-item">
                    <a href="/posts/1">Post Title 1</a>
                  </li>
                  <li className="list-group-item">
                    <a href="/posts/2">Post Title 2</a>
                  </li>
                  <li className="list-group-item">
                    <a href="/posts/3">Post Title 3</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <a href="/categories" className="btn btn-primary btn-block">
                Explore Categories
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
