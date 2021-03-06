import React from "react";
import { Link, useParams } from "react-router-dom";

export default function WidgetYouTube(props) {
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
            YouTube | Widget Edit
          </span>
        </div>
        <button className="btn">
          <i className="fas fa-check text-dark" />
        </button>
      </nav>
      <main className="container mt-2">
        <form id="widgetForm" onSubmit={props.update}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              id="name"
              placeholder="Enter widget name..."
              name="name"
              value={props.widget.name ? props.widget.name : ""}
              onChange={props.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Text</label>
            <input
              className="form-control"
              id="text"
              placeholder="Enter Widget text..."
              name="text"
              value={props.widget.text ? props.widget.text : ""}
              onChange={props.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="url">URL</label>
            <input
              className="form-control"
              id="url"
              placeholder="Enter image address..."
              name="url"
              value={props.widget.url ? props.widget.url : ""}
              onChange={props.onChange}
            />
          </div>
          <div className="form-group">
            <label>Width</label>
            <input
              type="range"
              className="form-control"
              min={1}
              max={100}
              id="width"
              name="width"
              value={props.widget.width ? props.widget.width : "100%"}
              onChange={props.onChange}
            />
          </div>
          <button
            onClick={props.remove}
            type="button"
            className="btn btn-danger btn-block"
          >
            Delete
          </button>
        </form>
      </main>
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
