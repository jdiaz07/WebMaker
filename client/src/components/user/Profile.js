import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <nav className="navbar navbar-light bg-primary">
        <span className="navbar-brand mb-0 h1 text-light">Profile</span>
        <Link to="/use/:uid" className="text-light">
          <i className="fas fa-check" />
        </Link>
      </nav>
      <form>
        <div className="container mt-5">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input className="form-control" placeholder="Enter username..." />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input className="form-control" placeholder="Enter email..." />
          </div>
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input className="form-control" placeholder="Enter first name..." />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input className="form-control" placeholder="Enter last name..." />
          </div>
          <Link
            to="/user/:uid/website"
            className="btn btn-primary btn-md btn-block"
          >
            Websites
          </Link>
          <Link to="/login" className="btn btn-danger btn-md btn-block">
            Log Out
          </Link>
        </div>
      </form>
      <nav className="navbar navbar-light bg-primary fixed-bottom">
        <span className="mb-0">
          <p className="fixed-bottom container text-center text-light">
            TRENCHES © 2020
          </p>
        </span>
        <Link to="/user/:uid" className="text-light">
          <i className="fas fa-user" />
        </Link>
      </nav>
    </div>
  );
}
