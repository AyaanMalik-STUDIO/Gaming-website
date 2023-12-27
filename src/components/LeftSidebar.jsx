// LeftSidebar.js
import React from 'react';

const LeftSidebar = () => {
  // Example data for recent posts
  const recentPosts = [
    {
      id: 1,
      title: "Retro Coding: A Journey Back in Time",
      content: "Take a nostalgic trip back to the roots of coding. Explore the vintage programming languages and techniques that shaped the early days of computing.",
      imageSrc: "https://placekitten.com/200/201", // Replace with your actual image URL
      link: "/retro-coding"
    },
    {
      id: 2,
      title: "The Art of Pixelated Graphics in Retro Games",
      content: "Dive into the world of pixel art and discover how early video game designers created stunning graphics with limited resources. Learn the secrets behind the charm of retro games.",
      imageSrc: "https://placekitten.com/200/202", // Replace with your actual image URL
      link: "/pixelated-graphics"
    },
    {
      id: 3,
      title: "Creating Retro-Style Websites with Modern Tools",
      content: "Combine the best of both worlds: modern web development tools and a retro design aesthetic. Learn tips and tricks for building websites that evoke the nostalgic feel of the past.",
      imageSrc: "https://placekitten.com/200/203", // Replace with your actual image URL
      link: "/retro-websites"
    },
    // Add more posts as needed
  ];

  return (
    <aside className="left-sidebar">
      <div className="sidebar-item">
        <h2>Recent Posts</h2>
        {recentPosts.map(post => (
          <div key={post.id} className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={post.imageSrc} className="img-fluid rounded-start" alt={`Post ${post.id}`} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">{post.title}</h3>
                  <p className="card-text">{post.content}</p>
                  <a href={post.link} className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default LeftSidebar;
