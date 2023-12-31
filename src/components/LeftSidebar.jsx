// LeftSidebar.js
import React from "react";
import Img from "../images/11.jpg";
import Img1 from "../images/12.jpg";

const FeaturedCardTop = ({ title, image, content, timestamp }) => {
  return (
    <div className="card p-3">
      <div className="row g-0">
        {/* First Column (Image) */}
        <div className="col-12 col-md-6">
          <img
            src={image}
            className="img-fluid"
            alt="..."
            style={{ height: 250 }}
          />
        </div>
        {/* Second Column (Card Body) */}
        <div className="col-12 col-md-6 align-self-center">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
            <a className="text-dark" href="/">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedCardBottom = ({ title, image, content, timestamp }) => {
  return (
    <div className="card p-3">
      <div className="row g-0">
        {/* First Column (Image) */}
        
        <div className="col-12 col-md-6 align-self-center">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img
            src={image}
            className="img-fluid"
            alt="..."
            style={{ height: 100 }}
          />
        </div>
        <div className="mt-2">
          <p className="card-text">{content}</p>
          <a className="text-dark" href="/">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

const LeftSidebar = () => {
  const featuredDataTop = [
    {
      title: "New Updates in Javacript",
      image: Img,
      content:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
    },
    // Add more featuredData as needed
  ];

  const featuredDataBottom = [
    {
      title: "New Updates in Laravel",
      image: Img1,
      content:
        "This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.",
    },
    // Add more featuredData as needed
  ];

  return (
    <aside className="left-sidebar py-2">
      <div className="sidebar-item">
        {/* Featured Cards top and bottom */}
        {featuredDataTop.map((data, index) => (
          <FeaturedCardTop key={index} {...data} />
        ))}
        {featuredDataBottom.map((data, index) => (
          <FeaturedCardBottom key={index} {...data} />
        ))}
      </div>
    </aside>
  );
};

export default LeftSidebar;
