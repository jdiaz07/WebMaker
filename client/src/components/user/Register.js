import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import uuid from "uuid";
import axios from "axios";

export default function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const history = useHistory();

  const register = e => {
    e.preventDefault();
    // Check if passwords match
    if (password !== password2) {
      alert("The passwords entered do not match, please try again.");
      return;
    }
    // Check if user name is taken
    const res = await axios.get(`/api/user?username=${username}`) 
    if(res.data) {
      alert("Username is taken, try another one");
      return;
    }
    for (let user of props.users) {
      if (user.username === username) {
        alert("Username is taken, please try another one.");
        return;
      }
    }
    // Add new user into users
    const newUser = {
      _id: uuid.v4(),
      username: username,
      password: password,
      firstName: "",
      lastName: "",
      email: ""
    };
    await axios.post("/api/user", newUser)
    // Navigate user into his profile
    history.push(`/user/${newUser._id}`);
  };
 
  return (
    <div className="container mt-5">
      <h1 className="text-primary">Register</h1>
      <p>It's free and only takes a minute!</p>
      <form onSubmit={register}>
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input className="form-control" placeholder="Enter first name..." />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input className="form-control" placeholder="Enter last name..." />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            placeholder="Enter email address..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            placeholder="Enter username..."
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password..."
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Reenter password..."
            value={password2}
            onChange={e => setPassword2(e.target.value)}
          />
        </div>
        <button className="btn btn-primary btn-md btn-block">Submit</button>
        <Link to="/login" className="btn btn-danger btn-md btn-block">
          Cancel
        </Link>
        <br />
        <p className="bottom-text">
          By clicking the Submit button, you agree to our{" "}
          <Link to="#">Terms &amp; Conditions</Link> and{" "}
          <Link to="#">Privacy Policy</Link>
        </p>
        <p>
          Already have an account? <Link to="/login">Login Here</Link>
        </p>
        <p className="fixed-bottom container text-center">TRENCHES © 2020</p>
      </form>
    </div>
  );
}
