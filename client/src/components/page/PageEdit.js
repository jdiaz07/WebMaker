import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";

export default function PageEdit(props) {
  const history = useHistory();
  const params = useParams();

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getPage();
    // eslint-disable-next-line
  }, []);

  const getPage = async () => {
    const res = await axios.get(`/api/page/${params.pid}`);
    const page = res.data;
    setName(page.name);
    setTitle(page.title);
  };

  const remove = async () => {
    await axios.delete(`/api/page/${params.pid}`);
    history.push(`/user/${params.uid}/website/${params.wid}/page`);
  };

  const update = async e => {
    e.preventDefault();
    const newPage = {
      _id: params.pid,
      name: name,
      title: title,
      websiteId: params.wid
    };
    await axios.put("/api/page", newPage);
    history.push(`/user/${params.uid}/website/${params.wid}/page`);
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div>
          <Link to={`/user/${params.uid}/website/${params.wid}/page`}>
            <i className="fas fa-chevron-left text-dark" />
          </Link>
          <span className="navbar-brand mb-0 h1 ml-4 text-black-50">
            Edit Page
          </span>
        </div>
        <button className="btn" form="pageForm">
          <i className="fas fa-check text-dark" />
        </button>
      </nav>
      <main className="container mt-2">
        <form id="pageForm" onSubmit={update}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              placeholder="Enter page name..."
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              placeholder="Enter page title..."
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <button
            className="btn btn-block btn-danger"
            type="button"
            onClick={remove}
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
        <Link to={`/use/${params.uid}`} className="text-primary">
          <i className="fas fa-user" />
        </Link>
      </nav>
    </div>
  );
}
