import React from "react";
import { Link } from "react-router-dom";
import loginImage from "../components/images/loginBg.jpg";

const Login = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${loginImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <main
      className="loginBg d-flex align-items-center justify-content-center text-center"
      style={{ ...backgroundImageStyle, minHeight: "100vh" }}
    >
      <form className="p-5 rounded bg-light shadow-lg">
        <h1 className="my-3">Login</h1>

        <div className="my-2">
          <input
            type="email"
            className="form-control py-2"
            placeholder="Username or Email"
          />
        </div>
        <div className="my-2">
          <input
            type="password"
            className="form-control py-2"
            placeholder="Password"
          />
        </div>

        <div className="my-2 text-start">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe" className="ms-2">Remember me</label>
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
