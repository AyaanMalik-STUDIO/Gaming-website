// RightSidebar.js
import React from "react";
import Image14 from '../images/14.jpg'

const SubscribeForm = () => {
  // You can add your form submission logic here

  return (
    <form>
      <div className="form-group my-2">
        <h6>Subscribe for all the new updates</h6>
        <p>Never miss new updates</p>
        <input
          name="email"
          type="email"
          className="form-control border-0 border-top border-bottom"
          id="email"
          placeholder="Email Address"
          autoComplete="off"
        />
      </div>
      <button type="submit" className="btn border mt-2 w-100">
        Subscribe
      </button>
    </form>
  );
};

const RightSidebar = () => {
  return (
    <aside className="right-sidebar py-2 sticky-top">
      <div className="sidebar-content">
        {/* Course */}
        <div>
          <hr />
          <div className="card mb-3">
            <div className="row g-0">
              {/* Center the Image */}
              <div className="col-md-4 d-flex justify-content-center">
                <img
                  src={Image14}
                  className="img-fluid"
                  alt="Course 1"
                />
              </div>
              {/* Second Column (Card Body) */}
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">The Course of JavaScript 2023</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <hr />
          <div className="card mb-3">
            <div className="row g-0">
              {/* Center the Image */}
              <div className="col-md-4 d-flex justify-content-center">
                <img
                  src={Image14}
                  className="img-fluid"
                  alt="Course 1"
                />
              </div>
              {/* Second Column (Card Body) */}
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">The Course of JavaScript 2023</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <hr />
          <div className="card mb-3">
            <div className="row g-0">
              {/* Center the Image */}
              <div className="col-md-4 d-flex justify-content-center">
                <img
                  src={Image14}
                  className="img-fluid"
                  alt="Course 1"
                />
              </div>
              {/* Second Column (Card Body) */}
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">The Course of JavaScript 2023</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <hr />
          <div className="card mb-3">
            <div className="row g-0">
              {/* Center the Image */}
              <div className="col-md-4 d-flex justify-content-center">
                <img
                  src={Image14}
                  className="img-fluid"
                  alt="Course 1"
                />
              </div>
              {/* Second Column (Card Body) */}
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">The Course of JavaScript 2023</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />

        {/* Subscribe Form */}
        <div className="subscribe-form">
          <SubscribeForm />
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
