// MainContent.js
import React from "react";
import Image13 from '../images/13.jpg';
import ProfileImg from '../images/profileImage.jpg';

const cardData = [
  {
    category: 'Laravel',
    image: Image13,
    title: 'The best tutorial for Laravel',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Ayaan Malik',
    timestamp: '2 hours ago',
  },
  {
    category: 'React',
    image: Image13,
    title: 'Mastering React in 7 days',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Ayaan Malik',
    timestamp: '1 day ago',
  },
  {
    category: 'WordPress',
    image: Image13,
    title: 'Building a WordPress site from scratch',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Ayaan Malik',
    timestamp: '3 days ago',
  },
];

const MainContent = () => {
  return (
    <main className="main-content py-2">
      {cardData.map((card, index) => (
        <div key={index} className="card mb-3">
          <img
            src={card.image}
            className="card-img-top p-2"
            alt={`Card ${index + 1}`}
            style={{ height: 300 }}
          />
          <div className="card-body">
            <a className="text-dark" href="/">{card.category}</a>
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
      ))}
    </main>
  );
};

export default MainContent;
