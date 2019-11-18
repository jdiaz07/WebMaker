import React from "react";
import { Link } from "react-router-dom";

export default function WidgetHeading() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-light bg-light">
          <div>
            <Link to="/user/:uid/website/:wid/page/:pid/widget">
              <i className="fas fa-chevron-left text-dark" />
            </Link>
            <span className="navbar-brand mb-0 h1 ml-4 text-black-50">
              Heading | Widget Edit
            </span>
          </div>
          <Link to="/user/:uid/website/:wid/page/:pid/widget">
            <i className="fas fa-check text-dark" />
          </Link>
        </nav>
        <div className="container mt-2">
          <form>
            <div className="form-group">
              <label>Name</label>
              <input className="form-control" placeholder="Blog Post" />
            </div>
            <div className="form-group">
              <label>Title</label>
              <input className="form-control" placeholder="Page Title" />
            </div>
            <div className="form-group">
              <label htmlFor="size">Size</label>
              <input
                type="range"
                min={1}
                max={6}
                className="form-control"
                id="size"
              />
            </div>
            <Link
              to="/user/:uid/website/:wid/page/:pid/widget"
              className="btn btn-danger btn-block"
            >
              Delete
            </Link>
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
