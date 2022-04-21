import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    document.title = "CricKit Login";
  }, []);

  return (
    <main class="login-container flex flex-column align-center justify-center">
      <form class="form-container flex flex-column" action="">
        <div class="center-text bold-500 font-size-large">Log In</div>
        <div class="flex flex-column">
          <label for="email">Email</label>
          <input type="email" placeholder="example@example.com" />
        </div>
        <div class="flex flex-column">
          <label for="password">Password</label>
          <input type="password" />
        </div>
        <div class="flex justify-between align-center">
          <div class="flex align-center">
            <input type="checkbox" name="remember" id="remember" />
            <label for="remember">Remember me</label>
          </div>
          <a href="#">Forgot Password?</a>
        </div>
        <button class="btn-primary">Login</button>
        <div>
          New to CricKit?
          <Link to="/signup"> Sign Up </Link>
        </div>
      </form>
    </main>
  );
};

export default Login;
