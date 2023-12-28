// MainContent.js
import React from "react";
import Image13 from '../images/13.jpg'
import ProfileImg from '../images/profileImage.jpg'

const MainContent = () => {
  return (
    <main className="main-content py-2">
      <div className="card mb-3">
        <img
          src={Image13} // Replace with actual image URL
          className="card-img-top p-2"
          alt="Card 1"
          style={{ height: 300 }}
        />
        <div className="card-body">
          <h5 className="card-title">Post Title 1</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img
                src={ProfileImg} // Replace with actual user image URL
                alt="User"
                className=" me-2"
                style={{height:30}}

              />
              <span>Ayaan Malik</span>
              <small className="text-muted mx-2">2 hours ago</small>
            </div>

            {/* Move the navigation buttons to the right */}
            <div className="ml-auto">
              <a href="/" className="m-1">
                <i className="bi bi-caret-left-square h5"></i>
              </a>
              <a href="/" className="m-1">
                <i className="bi bi-caret-right-square h5"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
