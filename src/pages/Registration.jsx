import React, { useState } from "react";
import { Link } from "react-router-dom";
import registrationImage from "../images/registrationBg.jpg";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const backgroundImageStyle = {
    backgroundImage: `url(${registrationImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const { firstName, lastName, email, phone, username, password, confirmPassword } = formData;

    if (!firstName || !lastName || !email || !phone || !username || !password || !confirmPassword) {
      alert("Please fill in all required fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <main
      className="registrationBg d-flex align-items-center justify-content-center text-center"
      style={{ ...backgroundImageStyle, minHeight: "100vh" }}
    >
      <form
        className="p-5 rounded bg-light shadow-lg registration-form"
        onSubmit={handleSubmit}
      >
        <h1 className="my-3">Registration</h1>

        <div className="my-2">
          <input
            type="text"
            name="firstName"
            className="form-control py-2"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="my-2">
          <input
            type="text"
            name="lastName"
            className="form-control py-2"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="my-2">
          <input
            type="email"
            name="email"
            className="form-control py-2"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="my-2">
          <input
            type="tel"
            name="phone"
            className="form-control py-2"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="my-2">
          <input
            type="text"
            name="username"
            className="form-control py-2"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="my-2">
          <input
            type="password"
            name="password"
            className="form-control py-2"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="my-2">
          <input
            type="password"
            name="confirmPassword"
            className="form-control py-2"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <button className="w-100 btn btn-primary py-2" type="submit">
          Sign up
        </button>

        <p className="my-2">
          If you already have an account, please <Link to="/login">Log in</Link>{" "}
          here
        </p>
      </form>
    </main>
  );
};

export default Registration;
