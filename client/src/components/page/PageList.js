import React from "react";
import { Link } from "react-router-dom";

export default function PageList() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-light bg-light">
          <div>
            <Link to="/user/:uid/website">
              <i className="fas fa-chevron-left text-dark" />
            </Link>
            <span className="navbar-brand mb-0 h1 ml-4 text-black-50">
              Pages
            </span>
          </div>
          <Link to="/user/:uid/website/:wid/page/new">
            <i className="fas fa-plus text-dark" />
          </Link>
        </nav>
        <div className="container mt-2">
          <ul className="list-group list-group-flush no-underline list-font-lg">
            <li className="list-group-item">
              <Link to="/user/:uid/website/:wid/page/:pid/widget">
                Blog Post
              </Link>
              <Link
                className="float-right"
                to="/user/:uid/website/:wid/page/:pid"
              >
                <i className="fas fa-cog" />
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/user/:uid/website/:wid/page/:pid/widget">Blogs</Link>
              <Link
                className="float-right"
                to="/user/:uid/website/:wid/page/:pid"
              >
                <i className="fas fa-cog" />
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/user/:uid/website/:wid/page/:pid/widget">Home</Link>
              <Link
                className="float-right"
                to="/user/:uid/website/:wid/page/:pid"
              >
                <i className="fas fa-cog" />
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/user/:uid/website/:wid/page/:pid/widget">About</Link>
              <Link
                className="float-right"
                to="/user/:uid/website/:wid/page/:pid"
              >
                <i className="fas fa-cog" />
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/user/:uid/website/:wid/page/:pid/widget">
                Contact Us
              </Link>
              <Link
                className="float-right"
                to="/user/:uid/website/:wid/page/:pid"
              >
                <i className="fas fa-cog" />
              </Link>
            </li>
          </ul>
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
    </div>
  );
}
