// LeftSidebar.js
import React from "react";
import Img from "../images/11.jpg";
import Img1 from "../images/12.jpg";

const FeaturedCard = ({ title, image, content, timestamp }) => {
  return (
    <div className="card border-top mt-3 py-3">
      <div className="row g-0">
        {/* First Column (Image) */}
        <div className="col-12 col-md-6">
          <img
            src={image}
            className="img-fluid"
            alt="..."
            style={{ height: 200 }}
          />
        </div>
        {/* Second Column (Card Body) */}
        <div className="col-12 col-md-6">
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

const LeftSidebar = () => {
  const featuredData = [
    {
      title: "New Updates in Javacript",
      image: Img,
      content:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
    },
    {
      title: "New Updates in Laravel",
      image: Img1,
      content:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
    },
    // Add more featuredData as needed
  ];

  return (
    <aside className="left-sidebar py-2 sticky-top">
      <div className="sidebar-item">

        {/* Featured Cards */}
        {featuredData.map((data, index) => (
          <FeaturedCard key={index} {...data} />
        ))}
  
        {/* Add more FeaturedCard components if needed */}
      </div>
    </aside>
  );
};

export default LeftSidebar;
