import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function WebsiteList(props) {
  const params = useParams();

  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    setWebsites(props.getWebsites(params.uid));
  }, [params.uid, props]);

  return (
    <div>
      <nav className="navbar navbar-light bg-primary">
        <div>
          <Link to={`/user/${params.uid}`}>
            <i className="fas fa-chevron-left text-light" />
          </Link>
          <span className="navbar-brand mb-0 h1 text-light ml-4">Websites</span>
        </div>
        <Link to={`/user/${params.uid}/website/new`} className="text-light">
          <i className="fas fa-plus" />
        </Link>
      </nav>
      <div className="container mt-2">
        <ul className="list-group list-group-flush no-underline list-font-lg">
          {websites.map(website => (
            <li key={website._id} className="list-group-item">
              <Link
                to={`/user/${website.developerId}/website/${website._id}/page`}
              >
                {websites.name}
              </Link>
              <Link
                className="float-right"
                to={`/user/${website.developerId}/website/${website._id}`}
              >
                <i className="fas fa-cog" />
              </Link>
            </li>
          ))}
        </ul>
        <nav className="navbar navbar-light bg-primary fixed-bottom">
          <span className="mb-0">
            <p className="fixed-bottom container text-center text-light">
              TRENCHES © 2020
            </p>
          </span>
          <Link to={`/user/${params.uid}`} className="text-light">
            <i className="fas fa-user" />
          </Link>
        </nav>
      </div>
    </div>
  );
}
