import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="container mt-5">
      <h1 className="text-primary">Register</h1>
      <p>It's free and only takes a minute!</p>
      <form>
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input className="form-control" placeholder="Enter first name..." />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input className="form-control" placeholder="Enter last name..." />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            placeholder="Enter email address..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Reenter password..."
          />
        </div>
        <Link to="/user/:uid" className="btn btn-primary btn-md btn-block">
          Submit
        </Link>
        <Link to="/login" className="btn btn-danger btn-md btn-block">
          Cancel
        </Link>
        <br />
        <p className="bottom-text">
          By clicking the Submit button, you agree to our{" "}
          <a href="#">Terms &amp; Conditions</a> and{" "}
          <a href="#">Privacy Policy</a>
        </p>
        <p>
          Already have an account? <a href="login.html">Login Here</a>
        </p>
        <p className="fixed-bottom container text-center">TRENCHES © 2020</p>
      </form>
    </div>
  );
}
