import React from "react";
import { Link } from "react-router-dom";

export default function WidgetYouTube() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-light bg-light">
          <div>
            <Link to="/user/:uid/website/:wid/page/:pid/widget">
              <i className="fas fa-chevron-left text-dark" />
            </Link>
            <span className="navbar-brand mb-0 h1 ml-4 text-black-50">
              Widget Edit
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
              <input
                className="form-control"
                placeholder="Enter widget name..."
              />
            </div>
            <div className="form-group">
              <label>Text</label>
              <input
                className="form-control"
                placeholder="Enter widget text..."
              />
            </div>
            <div className="form-group">
              <label>URL</label>
              <input
                className="form-control"
                placeholder="Enter YouTube Address..."
              />
            </div>
            <div className="form-group">
              <label>Width</label>
              <input
                className="form-control"
                min={1}
                max={100}
                type="range"
                id="width"
              />
            </div>
            <Link to="#" className="btn btn-primary btn-block">
              Upload File
            </Link>
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
          <Link to="/user/:uid" className="text-primary">
            <i className="fas fa-user" />
          </Link>
        </nav>
      </div>
    </div>
  );
}
