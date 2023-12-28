// LeftSidebar.js
import React from "react";
import Img from "../images/11.jpg";
import Img1 from "../images/12.jpg";


const LeftSidebar = () => {
  return (
    <aside className="left-sidebar py-2 sticky-top">
      <div className="sidebar-item">
      <hr/>
        {/* First Card */}
        <div className="card mb-3">
          <div className="row g-0">
            {/* First Column (Image) */}
            <div className="col-md-6">
              <img
                src={Img}
                className="img-fluid"
                alt="..."
                style={{ height: 200 }}
              />
            </div>
            {/* Second Column (Card Body) */}
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a className="text-dark" href="/">
                  Read More
                </a>
                
              </div>
            </div>
          </div>
          <p className="card-text text-end">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
        </div>

        <hr />

        {/* Second Card */}
        <div className="card mb-3">
          <div className="row g-0 d-flex justify-content-between">
            {/* First Column (Card Body) */}
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">The best programming Tutorial</h5>
              </div>
            </div>
            {/* Second Column (Image) */}
            <div className="col-md-4 text-end">
              <img
                src={Img1}
                className="img-fluid"
                alt="..."
                style={{ height: 100, width: 100 }}
              />
            </div>
            <div className="col-md-12">
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a className="text-dark" href="/">
                Read More
              </a>
              <p className="text-end">
                <small className="text-body-secondary">
                  Last updated 5 mins ago
                </small>
              </p>
            </div>
          </div>
          {/* Content Below Image */}
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
