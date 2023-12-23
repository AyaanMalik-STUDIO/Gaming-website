import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginImage from "../components/images/loginBg.jpg";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const backgroundImageStyle = {
    backgroundImage: `url(${loginImage})`,
    backgroundRepeat: 'no-repeat',  
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.username || !formData.password) {
      alert('Please fill in required fields');
      return;
    }

    // Continue with form submission or other logic
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <main
      className="loginBg d-flex align-items-center justify-content-center text-center"
      style={{ ...backgroundImageStyle, minHeight: "100vh" }}
    >
      <form className="p-5 rounded bg-light shadow-lg login-form" onSubmit={handleSubmit}>
        <h1 className="my-3">Login</h1>

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

        <button className="w-100 btn btn-primary py-2" type="submit">
          Sign in
        </button>

        <p className="my-2">
          If you don't have an account, please <Link to="/signup">Sign up</Link> here
        </p>
      </form>
    </main>
  );
};

export default Login;
