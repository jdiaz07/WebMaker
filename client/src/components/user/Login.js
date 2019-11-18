import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  function onSubmit(e) {
    e.preventDefault();
    for (let user of props.users) {
      // We found the user
      if (user.username === username && user.password === password) {
        // user/:uid
        history.push(`/user/${user._id}`);
        return;
      }
    }
    // we can't find user
    alert("Invalid credentials, please try again.");
  }

  return (
    <div className="container mt-5">
      <h1 className="text-primary">Login</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            className="form-control"
            placeholder="Enter username..."
            value={username}
            onChange={e => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password..."
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button className="btn btn-primary btn-lg btn-block">Submit</button>
        <Link className="btn btn-secondary btn-lg btn-block" to="/register">
          Register
        </Link>
        <p className="fixed-bottom container text-center">
          TRENCHES &copy; 2020
        </p>
      </form>
    </div>
  );
}
