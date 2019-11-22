import React from "react";
import { Link, useParams } from "react-router-dom";

export default function WidgetHeading(props) {
  const params = useParams();
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
            Heading | Widget Edit
          </span>
        </div>
        <button className="btn" form="widgetForm">
          <i className="fas fa-check text-dark" />
        </button>
      </nav>
      <div className="container mt-2">
        <form id="widgetForm" onSubmit={props.update}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              placeholder="Enter Widget Name..."
              id="name"
              name="name"
              value={props.widget.name ? props.widget.name : ""}
              onChange={props.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Text</label>
            <input
              className="form-control"
              placeholder="Enter Widget Text"
              id="text"
              name="text"
              value={props.widget.text ? props.widget.text : ""}
              onChange={props.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="size">Size</label>
            <input
              type="range"
              min={1}
              max={6}
              className="form-control"
              id="size"
              name="size"
              value={props.widget.size ? props.widget.size : "1"}
              onChange={props.onChange}
            />
          </div>
          <button onClick={props.remove} className="btn btn-danger btn-block">
            Delete
          </button>
        </form>
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
