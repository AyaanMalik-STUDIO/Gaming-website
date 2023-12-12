import React from "react";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form className="" name="form">
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button type="onclick">Login</button>
      </form>
    </div>
  );
};

export default Login;
