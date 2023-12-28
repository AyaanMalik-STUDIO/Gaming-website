// RightSidebar.js
import React from 'react';

const SubscribeForm = () => {
  // You can add your form submission logic here

  return (
    <form>
      <div className="form-group my-2">
      <h6> Subcribe for all the new updates</h6>
      <p>Never miss a new updates </p>
        <input type="email" className="form-control border-0 border-top border-bottom" id="email" placeholder="Email Address" />
      </div>
      <button type="submit" className="btn border mt-2 w-100">Subscribe</button>
    </form>
  );
};

const RightSidebar = () => {
  // Example data for multiple cards
  const courses = [
    {
      id: 1,
      title: 'The Course of JavaScript 2023',
      imageSrc: '../images/12.jpg', // Adjust the relative path to your image
    },
    {
      id: 2,
      title: 'React Masterclass',
      imageSrc: '../images/11.jpg', // Adjust the relative path to your image
    },
    {
      id: 3,
      title: 'The Course of JavaScript 2023',
      imageSrc: '../images/12.jpg', // Adjust the relative path to your image
    },
    {
      id: 4,
      title: 'React Masterclass',
      imageSrc: '../images/11.jpg', // Adjust the relative path to your image
    },
    // Add more courses as needed
  ];

  return (
    <aside className="right-sidebar py-2">
      <div className="sidebar-content">
        {/* Courses */}
        
        {courses.map((course) => (
          <>
          <hr />
          <div key={course.id} className="card mb-3">
            <div className="row g-0">
              {/* Center the Image */}
              <div className="col-md-4 d-flex justify-content-center">
                <img src={course.imageSrc} className="img-fluid" alt={`Course ${course.id}`} />
              </div>
              {/* Second Column (Card Body) */}
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                </div>
              </div>
            </div>
          </div>
          </>
        ))}
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
