// MainContent.js
import React from "react";

const MainContent = () => {
  // Sample data for cards
  const cardData = [
    {
      id: 1,
      title: "Post Title 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "John Doe",
      postTime: "2 hours ago",
      imageUrl: "https://placekitten.com/200/300", // Replace with actual image URL
    },
    
    // Add more cards as needed
  ];

  return (
    <main className="main-content py-2">
      {cardData.map((card) => (
        <div key={card.id} className="card mb-3">
          <img
            src={card.imageUrl}
            className="card-img-top p-2"
            alt={`Card ${card.id}`}
            style={{height:300}}
          />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.content}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img
                  src="https://placekitten.com/30/30" // Replace with actual user image URL
                  alt="User"
                  className=" me-2"
                />
                <span>{card.author}</span>
                <small className="text-muted mx-2">{card.postTime}</small>
              </div>
              
              {/* Move the navigation buttons to the right */}
              <div className="ml-auto">
                <button type="button" className="border">
                  &#8249;
                </button>
                <button type="button" className="border">
                  &#8250;
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default MainContent;
