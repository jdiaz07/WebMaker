import React from "react";
import { Link } from "react-router-dom";

export default function WebsiteList() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-light bg-primary">
          <div>
            <Link to="/user/:uid">
              <i className="fas fa-chevron-left text-light" />
            </Link>
            <span className="navbar-brand mb-0 h1 text-light ml-4">
              Websites
            </span>
          </div>
          <Link to="/user/:uid/website/new" className="text-light">
            <i className="fas fa-plus" />
          </Link>
        </nav>
        <div className="container mt-2">
          <ul className="list-group list-group-flush no-underline list-font-lg">
            <li className="list-group-item">
              <Link to="/user/:uid/website/:wid/page">Address Book App</Link>
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
              <Link to="/user/:uid/website/:wid/page">Script Testing App</Link>
              <Link className="float-right" to="/user/:uid/website/:wid">
                <i className="fas fa-cog" />
              </Link>
            </li>
          </ul>
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
      </div>
    </div>
  );
}
