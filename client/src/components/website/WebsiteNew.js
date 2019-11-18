import React from "react";
import { Link } from "react-router-dom";

export default function Website() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-dark bg-primary row">
          {/* Left Navbar */}
          <div className="col-lg-3 d-none d-lg-block">
            <div className="navbar">
              <div>
                <Link className="text-light" to="/user/:uid/website">
                  <i className="fas fa-chevron-left" />
                </Link>
                <span className="navbar-brand mb-0 h1 ml-4">Websites</span>
              </div>
              <Link className="text-light" to="/user/:uid/website/new">
                <i className="fas fa-plus" />
              </Link>
            </div>
          </div>
          {/* Right Navbar */}
          <div className="col-lg-9 navbar">
            <div>
              <Link className="text-light d-lg-none " to="/user/:uid/website">
                <i className="fas fa-chevron-left" />
              </Link>
              <span className="navbar-brand mb-0 h1 ml-4">New Website</span>
            </div>
            <Link className="text-light" to="/user/:uid/website">
              <i className="fas fa-check" />
            </Link>
          </div>
        </nav>
        <div className="row mt-2">
          <div className="col-lg-3 d-none d-lg-block">
            <div className="container">
              <ul className="list-group list-group-flush no-underline">
                <li className="list-group-item">
                  <Link to="/user/:uid/website/:wid/page">
                    Address Book App
                  </Link>
                  <Link className="float-right" to="/user/:uid/website/:wid">
                    <i className="fas fa-cog" />
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/user/:uid/website/:wid/page">Blogger</Link>
                  <Link className="float-right" to="/user/:uid/website/:wid">
                    <i className="fas fa-cog" />
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/user/:uid/website/:wid/page">Blogging App</Link>
                  <Link className="float-right" to="/user/:uid/website/:wid">
                    <i className="fas fa-cog" />
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/user/:uid/website/:wid/page">
                    Script Testing App
                  </Link>
                  <Link className="float-right" to="/user/:uid/website/:wid">
                    <i className="fas fa-cog" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="container">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    placeholder="Enter website name..."
                    id="name"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="form-control"
                    placeholder="Enter website description..."
                    rows={5}
                    defaultValue={""}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-primary fixed-bottom">
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
    </div>
  );
}
