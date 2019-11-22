import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import uuid from "uuid";

export default function WidgetChooser(props) {
  const params = useParams();
  const history = useHistory();

  const create = type => {
    // Create new widget variable
    const newWidget = {
      _id: uuid.v4(),
      widgetType: type,
      pageId: params.pid
    };
    // Add new widget into widgets array
    props.addWidget(newWidget);
    // Navigate to widget edit page
    history.push(
      `/user/${params.uid}/website/${params.wid}/page/${params.pid}/widget/${newWidget._id}`
    );
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div>
          <Link
            to={`/user/${params.uid}/website/${params.wid}/page/${params.pid}/widget`}
          >
            <i className="fas fa-chevron-left text-dark" />
          </Link>
          <span className="navbar-brand mb-0 h1 ml-4 text-black-50">
            Choose Widget
          </span>
        </div>
      </nav>
      <div className="container">
        <ul className="list-group list-group-flush no-underline list-font-lg">
          <li className="list-group-item">
            <button onClick={create.bind(this, "HEADING")} className="btn">
              Header
            </button>
          </li>
          <li className="list-group-item">
            <Link to="#">Label</Link>
          </li>
          <li className="list-group-item">
            <Link to="#">HTML</Link>
          </li>
          <li className="list-group-item">
            <Link to="#">Text Input</Link>
          </li>
          <li className="list-group-item">
            <Link to="#">Link</Link>
          </li>
          <li className="list-group-item">
            <Link to="#">Button</Link>
          </li>
          <li className="list-group-item">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
              Image
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
              Youtube
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="#">Data Table</Link>
          </li>
          <li className="list-group-item">
            <Link to="#">Repeater</Link>
          </li>
        </ul>
      </div>
      <nav className="navbar navbar-light bg-light fixed-bottom">
        <span className="mb-0">
          <p className="fixed-bottom container text-center text-black-50">
            TRENCHES © 2020
          </p>
        </span>
        <Link to={`/user/${params.uid}`} className="text-primary">
          <i className="fas fa-user" />
        </Link>
      </nav>
    </div>
  );
}
