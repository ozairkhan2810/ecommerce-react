import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const Signup = () => {
  useEffect(() => {
    document.title = "CricKit Registration";
  }, []);
  return (
    <main className="login-container flex flex-column align-center justify-center">
      <form className="form-container flex flex-column" action="">
        <div className="center-text bold-500 font-size-large">Sign Up</div>
        <div className="flex flex-column">
          <label for="fname">First Name</label>
          <input type="text" placeholder="Enter your first name" />
        </div>
        <div className="flex flex-column">
          <label for="lname">Last Name</label>
          <input type="text" placeholder="Enter your last name" />
        </div>
        <div className="flex flex-column">
          <label for="email">Email</label>
          <input type="email" placeholder="example@example.com" />
        </div>
        <div className="flex flex-column">
          <label for="password">Password</label>
          <span className="flex align-center justify-between">
            <input type="password" />
            <FaEye />
          </span>
        </div>
        <div className="flex flex-column">
          <label for="password">Confirm Password</label>
          <span className="flex align-center justify-between">
            <input type="password" />
            <button>
              <FaEye />
            </button>
          </span>
        </div>
        <div className="flex align-center">
          <input type="checkbox" name="remember" id="remember" />
          <label className="small-text" for="remember">
            I read and agree to Terms and Condition
          </label>
        </div>
        <button className="btn-primary">Create Account</button>
        <div>
          Already have an account? <Link to="/login"> Sign In </Link>
        </div>
      </form>
    </main>
  );
};

export default Signup;
