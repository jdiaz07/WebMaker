import React from "react";
import { Link } from "react-router-dom";

export default function PageNew() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-light bg-light">
          <div>
            <Link to="/user/:uid/website/:wid/page">
              <i className="fas fa-chevron-left text-dark" />
            </Link>
            <span className="navbar-brand mb-0 h1 ml-4 text-black-50">
              New Page
            </span>
          </div>
          <Link to="/user/:uid/website/:wid/page">
            <i className="fas fa-check text-dark" />
          </Link>
        </nav>
        <div className="container mt-2">
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                className="form-control"
                placeholder="Enter page name..."
              />
            </div>
            <div className="form-group">
              <label>Title</label>
              <input
                className="form-control"
                placeholder="Enter page title..."
              />
            </div>
          </form>
        </div>
        <nav className="navbar navbar-light bg-light fixed-bottom">
          <span className="mb-0">
            <p className="fixed-bottom container text-center text-black-50">
              TRENCHES © 2020
            </p>
          </span>
          <Link to="/use/:uid" className="text-primary">
            <i className="fas fa-user" />
          </Link>
        </nav>
      </div>
    </div>
  );
}
