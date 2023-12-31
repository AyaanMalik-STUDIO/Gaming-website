// MainContent.js
import React from "react";
import Slider from "react-slick";
import Image13 from "../images/13.jpg";
import ProfileImg from "../images/profileImage.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardData = [
  {
    category: "Laravel",
    image: Image13,
    title: "The best tutorial for Laravel",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "Ayaan Malik",
    timestamp: "2 hours ago",
  },
  {
    category: "React",
    image: Image13,
    title: "Mastering React in 7 days",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "Ayaan Malik",
    timestamp: "1 day ago",
  },
  {
    category: "WordPress",
    image: Image13,
    title: "Building a WordPress site from scratch",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "Ayaan Malik",
    timestamp: "3 days ago",
  },
];

const MainContent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000,
    fade: true, // Set the interval in milliseconds (3 seconds)
  };

  return (
    <main className="main-content mt-4 py-3">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <img
              src={card.image}
              className="card-img-top p-2"
              alt={`Card ${index + 1}`}
              style={{ height: 300 }}
            />
            <div className="card-body p-3">
            <a href="/" className="text-dark">{card.category}</a>
              <h2 className="card-title">{card.title}</h2>
              <p className="card-text">{card.content}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src={ProfileImg}
                    alt="User"
                    className="me-2"
                    style={{ height: 30 }}
                  />
                  <span>{card.author}</span>
                  <small className="text-muted mx-2">{card.timestamp}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </main>
  );
};

export default MainContent;
