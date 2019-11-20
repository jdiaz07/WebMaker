import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function PageList(props) {
  const params = useParams();

  const [pages, setPages] = useState([]);

  useEffect(() => {
    setPages(props.getPages(params.wid));
  }, [params.wid, props]);

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div>
          <Link to={`/user/${params.uid}/website`}>
            <i className="fas fa-chevron-left text-dark" />
          </Link>
          <span className="navbar-brand mb-0 h1 ml-4 text-black-50">Pages</span>
        </div>
        <Link to={`/user/${params.uid}/website/${params.wid}/page/new`}>
          <i className="fas fa-plus text-dark" />
        </Link>
      </nav>
      <main className="container mt-2">
        <ul className="list-group list-group-flush no-underline list-font-lg">
          {pages.map(page => (
            <li className="list-group-item" key={page._id}>
              <Link
                to={`/user/${params.uid}/website/${params.wid}/page/${page._id}/widget`}
              >
                {page.name}
              </Link>
              <Link
                to={`/user/${params.uid}/website/${params.wid}/page/${page._id}`}
                className="float-right"
              >
                <i className="fas fa-cog" />
              </Link>
            </li>
          ))}
          <li className="list-group-item">
            <Link to="/user/:uid/website/:wid/page/:pid/widget">Blog Post</Link>
            <Link
              className="float-right"
              to="/user/:uid/website/:wid/page/:pid"
            >
              <i className="fas fa-cog" />
            </Link>
          </li>
        </ul>
        <footer className="navbar navbar-light bg-light fixed-bottom">
          <span className="mb-0">
            <p className="fixed-bottom container text-center text-black-50">
              TRENCHES © 2020
            </p>
          </span>
          <Link to={`/use/${params.uid}`} className="text-primary">
            <i className="fas fa-user" />
          </Link>
        </footer>
      </main>
    </div>
  );
}
