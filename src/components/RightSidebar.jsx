// RightSidebar.js
import React from "react";
import Image14 from '../images/14.jpg';

const SubscribeForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted!");
    // You can handle the form data submission to your server or perform any other actions.
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            required
          />
        </div>
        <button type="submit" className="btn border mt-2 w-100">
          Subscribe
        </button>
      </form>
    </div>
  );
};

const CourseCard = ({ title, image }) => {
  return (
    <div className="card mt-3 p-3">
      <div className="row g-0">
        {/* Center the Image */}
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <img src={image} className="img-fluid" alt={title} />
        </div>
        {/* Second Column (Card Body) */}
        <div className="col-12 col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

const RightSidebar = () => {
  const courseData = [
    { title: "The Course of JavaScript 2023", image: Image14 },
    { title: "Reactjs Course 2023", image: Image14 },
    { title: "JavaScript Mastery", image: Image14 },
  ];

  return (
    <aside className="right-sidebar py-2 sticky-top">
      <div className="sidebar-content">
        {courseData.map(({ title, image }, index) => (
          <div key={index}>
            <CourseCard title={title} image={image} />
          </div>
        ))}
        <SubscribeForm />
      </div>
    </aside>
  );
};

export default RightSidebar;
