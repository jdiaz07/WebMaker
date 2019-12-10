import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Profile(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const params = useParams();

  const getUser = async () => {
    const res = await axios.get(`/api/user/${params.uid}`);
    const user = res.data;
    setUsername(user.username);
    setEmail(user.email);
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setPassword(user.password);
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  const update = async () => {
    const newUser = {
      _id: params.uid,
      username: username,
      password: password,
      email: email,
      firstName: firstName,
      lastName: lastName
    };

    // Update user in users
    await axios.put("/api/user", newUser);

    alert("User info is updated!");
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-primary">
        <span className="navbar-brand mb-0 h1 text-light">Profile</span>
        <span className="click" onSubmit={update}>
          <i className="fas fa-check" />
        </span>
      </nav>
      <form>
        <div className="container mt-5">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              className="form-control"
              id="username"
              placeholder="Enter username..."
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              id="email"
              placeholder="Enter email..."
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input
              className="form-control"
              id="firstName"
              placeholder="Enter first name..."
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input
              className="form-control"
              id="lastName"
              placeholder="Enter last name..."
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </div>
          <Link
            to={`/user/${params.uid}/website`}
            className="btn btn-primary btn-md btn-block"
          >
            Websites
          </Link>
          <Link to="/login" className="btn btn-danger btn-md btn-block">
            Log Out
          </Link>
        </div>
      </form>
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
  );
}
